package modals

import (
	"context"
	"reflect"

	"github.com/ethereum/go-ethereum/common"
	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/common/types"
	"github.com/persona-art/persona/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const COLLECTION = "wallet_nfts"

type NftModal struct {
	*database.DB
}

func NewNFTModal(config *config.Config) *NftModal {
	return &NftModal{
		config.DB,
	}
}
func (modal *NftModal) ConnectWalletNFT() (*mongo.Client, *mongo.Collection) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(modal.DbUrl))
	if err != nil {
		panic(err)
	}
	col := client.Database(modal.Database).Collection(COLLECTION, &options.CollectionOptions{})
	return client, col
}
func (modal *NftModal) FindWalletNFTsByAddress(ctx context.Context, address common.Address) (*types.WalletNFT, error) {
	client, col := modal.ConnectWalletNFT()
	defer client.Disconnect(ctx)
	var nft types.WalletNFT
	col.FindOne(ctx, bson.M{"address": address.Hex()}, nil).Decode(&nft)
	if reflect.ValueOf(nft).IsZero() {
		return nil, nil
	}
	return &nft, nil
}
func (modal *NftModal) InsertWalletNFTs(ctx context.Context, nft *types.WalletNFT_) error {
	client, col := modal.ConnectWalletNFT()
	defer client.Disconnect(ctx)
	_, err := col.InsertOne(ctx, nft)
	if err != nil {
		return err
	}
	return nil
}
func (modal *NftModal) UpdateWalletNFTs(ctx context.Context, nftInfo *types.WalletNFT_) (*mongo.UpdateResult, error) {
	client, col := modal.ConnectWalletNFT()
	defer client.Disconnect(ctx)
	upsert := true
	option := &options.UpdateOptions{
		Upsert: &upsert,
	}
	result, err := col.UpdateOne(ctx, bson.M{"address": nftInfo.Address}, bson.M{"$set": nftInfo}, option)
	if err != nil {
		return nil, err
	}
	return result, nil
}
