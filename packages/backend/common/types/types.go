package types

import (
	"math/big"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type NFTStandard string

const (
	ERC1155 NFTStandard = "erc1155"
	ERC721  NFTStandard = "erc721"
)

type ENSDefaultTextRecords struct {
	Address string `json:"address"`
	Twitter string `json:"twitter"`
	Github  string `json:"github"`
	Discord string `json:"discord"`
	Email   string `json:"email"`
}

type NFTRecord struct {
	Standard    NFTStandard `bson:"standard" json:"standard"`
	Contract    string      `bson:"contract" json:"contract"`
	TokenId     *big.Int    `bson:"token_id" json:"token_id"`
	TxHash      string      `bson:"tx_hash" json:"tx_hash"`
	Url         interface{} `bson:"url" json:"url"`
	BlockNumber uint64      `bson:"block_number" json:"block_number"`
}

type User struct {
	ID         primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	EnsName    string             `bson:"ensName" json:"ensName"`
	WalletNFT  primitive.ObjectID `bson:"wallet_nft,omitempty" json:"wallet_nft"`
	TwitterID  primitive.ObjectID `bson:"twitter,omitempty" json:"twitter"`
	DiscordID  primitive.ObjectID `bson:"discord,omitempty" json:"discord"`
	TelegramID primitive.ObjectID `bson:"telegram,omitempty" json:"telegram"`
}

type Telegram struct {
	ID          primitive.ObjectID `bson:"_id,omitempty" json:"id"`
	UserID      primitive.ObjectID `bson:"user_id" json:"user_id"`
	TelegramID  int                `bson:"telegram_id" json:"telegram_id"`
	FirstName   string             `bson:"first_name" json:"first_name"`
	Username    string             `bson:"username" json:"username"`
}

type WalletNFT_ struct {
	Address string       `bson:"address" json:"address"`
	NFTs    []*NFTRecord `bson:"nfts" json:"nfts"`
}
type WalletNFT struct {
	Address string       `bson:"address" json:"address"`
	NFTs    []*NFTRecord `bson:"nfts" json:"nfts"`
	ID      string       `bson:"_id" json:"_id"`
}
type NFTAddrFetchHx_ struct {
	Addr            string `bson:"address" json:"address"`
	LastBlockNumber uint64 `bson:"last_block_number" json:"last_block_number"`
}
type NFTAddrFetchHx struct {
	Addr            string `bson:"address" json:"address"`
	LastBlockNumber uint64 `bson:"last_block_number" json:"last_block_number"`
	ID              string `bson:"_id" json:"_id"`
}
type Setting struct {
	ID    string      `bson:"_id" json:"_id"`
	Name  string      `bson:"name" json:"name"`
	Value interface{} `bson:"value" json:"value"`
}

type GithubConfig struct {
	ApiUrl   string
	AuthUrl  string
	ClientId string
	Secret   string
}

type TwitterConfig struct {
	ConsumerKey    string
	ConsumerSecret string
	CallbackURL    string
	Scopes         []string
	Endpoint       TwitterEndpoint
}

type TwitterEndpoint struct {
	RequestTokenURL string
	AuthorizeURL    string
	AccessTokenURL  string
}
