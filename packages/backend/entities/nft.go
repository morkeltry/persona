package entities

import (
	"context"
	"encoding/json"
	"errors"
	"fmt"
	"io/ioutil"
	"math/big"
	"net/http"
	"sort"
	"strings"

	"github.com/ethereum/go-ethereum"
	"github.com/ethereum/go-ethereum/common"
	eth_types "github.com/ethereum/go-ethereum/core/types"
	"github.com/ethereum/go-ethereum/crypto"
	"github.com/ethereum/go-ethereum/ethclient"
	persona_common "github.com/persona-art/persona/common"
	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/common/types"
	"github.com/persona-art/persona/modals"
	"github.com/persona-art/persona/services/go_gen/ERC1155"
	"github.com/persona-art/persona/services/go_gen/ERC721"
)

type NFTEntity struct {
	Modal   *modals.Modals
	Client  *ethclient.Client
	Secrets *config.Secrets
}

func NewNFTEntity(config *config.Config) *NFTEntity {
	return &NFTEntity{
		Modal:   modals.NewModals(config),
		Client:  config.Client,
		Secrets: config.Secrets,
	}
}
func (ent *NFTEntity) FetchOpenseaMetadata(ctx context.Context, url string) (interface{}, error) {
	client := &http.Client{}
	req, err := http.NewRequest("GET", url, nil)
	if err != nil {
		return nil, err
	}
	if strings.Contains(url, "api.opensea.io") {
		req.Header.Set("X-API-KEY", ent.Secrets.OpenseaKey)
	}
	// Send the request
	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}
	var nftData interface{}
	json.Unmarshal(body, &nftData)
	if d, ok := nftData.(map[string]any); ok {
		// Update the `image` property
		var img string
		if img, ok = d["image"].(string); ok {
			img = strings.Replace(img, "ipfs://", "https://ipfs.io/ipfs/", 1)
		}
		d["image"] = img
		// Reassign the updated concrete type back to the interface
		nftData = d
	}
	return nftData, nil
}
func (ent *NFTEntity) GetAllWalletNFTs(ctx context.Context, address common.Address, fromBlock *big.Int) ([]*types.NFTRecord, error) {
	nft1155s, _ := ent.ERC1155Tokens(ctx, address, fromBlock)
	nft721s, _ := ent.ERC721Tokens(ctx, address, fromBlock)
	nft1155s = append(nft1155s, nft721s...)
	sort.Slice(nft1155s, func(i, j int) bool {
		return nft1155s[i].BlockNumber < nft1155s[j].BlockNumber
	})
	return nft1155s, nil
}
func (ent *NFTEntity) NFTTokenUrlAdjustment(url string, contractAddr common.Address, tokenIdBytes []byte) interface{} {
	if url == "" {
		return url
	}
	if strings.Contains(url, "data:application/json") {
		url = strings.Split(url, ",")[1]
		url64, _ := persona_common.DecodeBase64(url)
		return url64
	}
	if strings.Contains(url, "ens-metadata-service.appspot.com/name/0x") {
		url = "https://metadata.ens.domains/mainnet/" + contractAddr.Hex() + "/0x{id}"
	}
	url = strings.Replace(url, "ipfs://", "https://ipfs.io/ipfs/", 1)
	tokenId := common.Bytes2Hex(tokenIdBytes)
	if strings.Contains(url, "api.opensea.io") {
		tokenId = new(big.Int).SetBytes(tokenIdBytes).Text(16)
	}
	url = strings.Replace(url, "{id}", tokenId, 1)
	return url
}
func (ent *NFTEntity) NFTFromERC721Log(log eth_types.Log, address common.Address) (*types.NFTRecord, error) {
	erc1155, err := ERC721.NewERC721(log.Address, ent.Client)
	if err != nil {
		return nil, err
	}
	if len(log.Topics) == 3 {
		return nil, errors.New("no index found")
	}
	tokenBigInt := log.Topics[3].Big()

	uri, err := erc1155.TokenURI(nil, tokenBigInt)
	if err != nil {
		fmt.Println(err.Error())
	}
	bal, err := erc1155.BalanceOf(nil, address)
	if err != nil {
		fmt.Println(err.Error())
	}
	if bal.Uint64() == 0 {
		return nil, nil
	}
	return &types.NFTRecord{
		TxHash:      log.TxHash.Hex(),
		TokenId:     tokenBigInt,
		Contract:    log.Address.Hex(),
		Standard:    types.ERC1155,
		BlockNumber: log.BlockNumber,
		Url:         ent.NFTTokenUrlAdjustment(uri, log.Address, tokenBigInt.Bytes()),
	}, nil
}
func (ent *NFTEntity) ERC721Tokens(ctx context.Context, address common.Address, fromBlock *big.Int) ([]*types.NFTRecord, error) {
	client := ent.Client
	transferSignature := crypto.Keccak256Hash([]byte("Transfer(address,address,uint256)"))

	walletAddress := common.BytesToHash(
		common.LeftPadBytes(address.Hash().Bytes(), 32),
	)
	query := &ethereum.FilterQuery{
		FromBlock: fromBlock,
		Topics: [][]common.Hash{
			{transferSignature},
			nil,
			{walletAddress},
		},
	}
	logs, err := client.FilterLogs(context.Background(), *query)
	if err != nil {
		return nil, err
	}
	var nfts []*types.NFTRecord
	for _, log := range logs {
		nft, err := ent.NFTFromERC721Log(log, address)
		if err != nil {
			fmt.Println(err.Error())
		}
		if nft != nil {
			nfts = append(nfts, nft)
		}
	}
	return nfts, nil
}
func (ent *NFTEntity) NFTFromERC1155Log(log eth_types.Log, address common.Address) (*types.NFTRecord, error) {
	erc1155, err := ERC1155.NewERC1155(log.Address, ent.Client)
	if err != nil {
		return nil, err
	}
	tokenIdBytes := log.Data[:32]
	tokenBigInt := new(big.Int).SetBytes(tokenIdBytes)
	uri, err := erc1155.Uri(nil, tokenBigInt)
	if err != nil {
		fmt.Println(err.Error())
	}
	bal, err := erc1155.BalanceOf(nil, address, tokenBigInt)
	if err != nil {
		fmt.Println(err.Error())
	}
	if bal != nil && bal.Uint64() == 0 {
		return nil, nil
	}
	return &types.NFTRecord{
		TxHash:      log.TxHash.Hex(),
		TokenId:     tokenBigInt,
		Contract:    log.Address.Hex(),
		Standard:    types.ERC1155,
		BlockNumber: log.BlockNumber,
		Url:         ent.NFTTokenUrlAdjustment(uri, log.Address, tokenBigInt.Bytes()).(string),
	}, nil
}
func (ent *NFTEntity) ERC1155Tokens(ctx context.Context, address common.Address, fromBlock *big.Int) ([]*types.NFTRecord, error) {
	client := ent.Client
	transferSingle := crypto.Keccak256Hash([]byte("TransferSingle(address,address,address,uint256,uint256)"))
	walletAddress := common.BytesToHash(
		common.LeftPadBytes(address.Hash().Bytes(), 32),
	)
	query := &ethereum.FilterQuery{
		FromBlock: fromBlock,
		Topics: [][]common.Hash{
			{transferSingle},
			nil,
			nil,
			{walletAddress},
		},
	}
	logs, err := client.FilterLogs(context.Background(), *query)
	if err != nil {
		return nil, err
	}
	var nfts []*types.NFTRecord
	for _, log := range logs {
		nft, err := ent.NFTFromERC1155Log(log, address)
		if err != nil {
			fmt.Println(err.Error())
		}
		if nft != nil {
			nfts = append(nfts, nft)
		}
	}
	return nfts, nil
}
