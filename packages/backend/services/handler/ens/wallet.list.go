package handler

import (
	"context"

	"github.com/ethereum/go-ethereum/common"
	"github.com/persona-art/persona/common/types"
	handler "github.com/persona-art/persona/services/handler/nfts"
)

var (
	ENSContract string = "0xD4416b13d2b3a9aBae7AcD5D6C2BbDBE25686401"
	ARTContract string = "0x828D6e836e586B53f1da3403FEda923AEd431019"
)

func (h *ENSHandler) HandleWalletENSList(ctx context.Context, addr common.Address) ([]*types.NFTRecord, error) {
	nftHandler := handler.NewNFTHandler(h.Config)
	nfts, err := nftHandler.HandleWalletNFTs(ctx, addr)
	var ensList []*types.NFTRecord
	if err != nil {
		return nil, err
	}
	if len(nfts) > 0 {
		for _, nft := range nfts {
			if nft.Contract == ENSContract || nft.Contract == ARTContract {
				ensList = append(ensList, nft)
			}
		}
	}
	return ensList, nil
}
