package modals

import (
	"context"

	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/common/types"
	"github.com/persona-art/persona/database"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

const TelegramCollection = "telegram"

type TelegramModal struct {
	*database.DB
}

func NewTelegramModal(config *config.Config) *TelegramModal {
	return &TelegramModal{
		config.DB,
	}
}

func (modal *TelegramModal) ConnectTelegram() (*mongo.Client, *mongo.Collection) {
	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(modal.DbUrl))
	if err != nil {
		panic(err)
	}
	col := client.Database(modal.Database).Collection(TelegramCollection, &options.CollectionOptions{})
	return client, col
}

func (modal *TelegramModal) InsertTelegram(ctx context.Context, telegram *types.Telegram) error {
	client, col := modal.ConnectTelegram()
	defer client.Disconnect(ctx)
	_, err := col.InsertOne(ctx, telegram)
	if err != nil {
		return err
	}
	return nil
}

//TODO ... (other functions like FindTelegramByID, FindTelegramByUserID, UpdateTelegram, etc.)
