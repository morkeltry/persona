package modals

import (
	"context"

	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/common/types"
	"github.com/persona-art/persona/database"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const UserCollection = "users"

type UserModal struct {
	*database.DB
}

func NewUserModal(config *config.Config) *UserModal {
	return &UserModal{
		config.DB,
	}
}

func (modal *UserModal) ConnectUser() (*mongo.Client, *mongo.Collection) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(modal.DbUrl))
	if err != nil {
		panic(err)
	}
	col := client.Database(modal.Database).Collection(UserCollection, &options.CollectionOptions{})
	return client, col
}

func (modal *UserModal) InsertUser(ctx context.Context, user *types.User) error {
	client, col := modal.ConnectUser()
	defer client.Disconnect(ctx)
	_, err := col.InsertOne(ctx, user)
	if err != nil {
		return err
	}
	return nil
}

func (modal *UserModal) FindUserByID(ctx context.Context, id primitive.ObjectID) (*types.User, error) {
	client, col := modal.ConnectUser()
	defer client.Disconnect(ctx)
	var user types.User
	err := col.FindOne(ctx, bson.M{"_id": id}).Decode(&user)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (modal *UserModal) FindUserByUsername(ctx context.Context, username string) (*types.User, error) {
	client, col := modal.ConnectUser()
	defer client.Disconnect(ctx)
	var user types.User
	err := col.FindOne(ctx, bson.M{"username": username}).Decode(&user)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (modal *UserModal) UpdateUser(ctx context.Context, user *types.User) (*mongo.UpdateResult, error) {
	client, col := modal.ConnectUser()
	defer client.Disconnect(ctx)
	upsert := true
	option := &options.UpdateOptions{
		Upsert: &upsert,
	}
	result, err := col.UpdateOne(ctx, bson.M{"_id": user.ID}, bson.M{"$set": user}, option)
	if err != nil {
		return nil, err
	}
	return result, nil
}
