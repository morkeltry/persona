package modals

import (
	"context"
	"fmt"
	"reflect"

	"github.com/ethereum/go-ethereum/common"
	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/common/types"
	"github.com/persona-art/persona/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const FETCH_HX_COLLECTION = "nft_fetch_hx"

type LastNFTFetchModal struct {
	*database.DB
}

func NewNFTFetchHx(config *config.Config) *LastNFTFetchModal {
	return &LastNFTFetchModal{
		config.DB,
	}
}
func (modal *LastNFTFetchModal) ConnectNFTFetchHx() (*mongo.Client, *mongo.Collection) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(modal.DbUrl))
	if err != nil {
		fmt.Println(err)
		panic(err)
	}
	col := client.Database(modal.Database).Collection(FETCH_HX_COLLECTION, &options.CollectionOptions{})
	return client, col
}
func (modal *LastNFTFetchModal) InsertBlockHx(ctx context.Context, hx *types.NFTAddrFetchHx_) error {
	client, col := modal.ConnectNFTFetchHx()
	defer client.Disconnect(ctx)
	_, err := col.InsertOne(ctx, hx)
	if err != nil {
		return err
	}
	return nil
}
func (modal *LastNFTFetchModal) FindNFTBlockHxByAddr(ctx context.Context, addr common.Address) (*types.NFTAddrFetchHx, error) {
	client, col := modal.ConnectNFTFetchHx()
	defer client.Disconnect(ctx)
	var lastFetched types.NFTAddrFetchHx
	col.FindOne(ctx, bson.M{"address": addr.Hex()}, nil).Decode(&lastFetched)
	if reflect.ValueOf(lastFetched).IsZero() {
		return nil, nil
	}
	return &lastFetched, nil
}
func (modal *LastNFTFetchModal) UpdateNFTLastBlockNumber(ctx context.Context, id primitive.ObjectID, lastFetch *types.NFTAddrFetchHx_) (*mongo.UpdateResult, error) {
	client, col := modal.ConnectNFTFetchHx()
	defer client.Disconnect(ctx)
	upsert := true
	option := &options.UpdateOptions{
		Upsert: &upsert,
	}
	result, err := col.UpdateOne(ctx, bson.M{"_id": id}, bson.M{"$set": lastFetch}, option)
	if err != nil {
		fmt.Println(err)
		return nil, err
	}
	return result, nil
}
