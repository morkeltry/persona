package database

import (
	"github.com/persona-art/persona/common/types"
)

type Modals struct {
	WalletNFT *types.WalletNFT
}
type DB struct {
	DbUrl    string
	Database string
	Modals   *Modals
}

func NewMongo(dbUrl string, database string) *DB {
	return &DB{
		DbUrl:    dbUrl,
		Database: database,
		Modals: &Modals{
			WalletNFT: &types.WalletNFT{},
		},
	}
}
