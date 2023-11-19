package handler

import (
	"context"
	"math/big"

	"github.com/ethereum/go-ethereum/common"
	"github.com/persona-art/persona/common/types"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func (ctl *NFTHandler) HandleWalletNFTs(ctx context.Context, address common.Address) ([]*types.NFTRecord, error) {
	var (
		latestBlockNumber uint64
		err               error
		fetchHx           *types.NFTAddrFetchHx
		cachedNfts        *types.WalletNFT
		nfts              []*types.NFTRecord
	)
	latestBlockNumber, err = ctl.Client.BlockNumber(ctx)
	if err != nil {
		return nil, err
	}
	fetchHx, err = ctl.Modal.FindNFTBlockHxByAddr(ctx, address)
	if err != nil {
		return nil, err
	}
	if fetchHx != nil {
		if latestBlockNumber > fetchHx.LastBlockNumber {
			nfts, err = ctl.GetAllWalletNFTs(ctx, address, big.NewInt(int64(fetchHx.LastBlockNumber)))
			if err != nil {
				return nil, err
			}
		}
		_id, err := primitive.ObjectIDFromHex(fetchHx.ID)
		if err != nil {
			panic(err)
		}
		ctl.Modal.UpdateNFTLastBlockNumber(ctx, _id, &types.NFTAddrFetchHx_{
			LastBlockNumber: latestBlockNumber,
			Addr:            address.Hex(),
		})
	} else {
		nfts, err = ctl.GetAllWalletNFTs(ctx, address, nil)
		if err != nil {
			return nil, err
		}
		ctl.Modal.InsertBlockHx(ctx, &types.NFTAddrFetchHx_{
			Addr:            address.Hex(),
			LastBlockNumber: latestBlockNumber,
		})
	}
	cachedNfts, err = ctl.Modal.FindWalletNFTsByAddress(ctx, address)
	if err != nil {
		return nil, err
	}
	if len(nfts) > 0 {
		if cachedNfts == nil {
			ctl.Modal.InsertWalletNFTs(ctx, &types.WalletNFT_{
				Address: address.Hex(),
				NFTs:    nfts,
			})
		} else {
			nfts = append(cachedNfts.NFTs, nfts...)
			ctl.Modal.UpdateWalletNFTs(ctx, &types.WalletNFT_{
				Address: address.Hex(),
				NFTs:    nfts,
			})
		}
	} else if cachedNfts != nil {
		nfts = append(cachedNfts.NFTs, nfts...)
	}
	return nfts, nil
}
