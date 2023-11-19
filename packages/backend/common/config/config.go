package config

import (
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/persona-art/persona/common/types"
	"github.com/persona-art/persona/database"
	"github.com/spf13/viper"
)

type Secrets struct {
	OpenseaKey string
}
type Config struct {
	Client         *ethclient.Client
	Github         *types.GithubConfig
	OpenseaMetaApi string
	DB             *database.DB
	Secrets        *Secrets
}

func AppConfig() *Config {
	viper.SetConfigFile(".env")
	viper.ReadInConfig()
	nodeUrl := viper.GetString("NODE_URL")
	client, err := ethclient.Dial(nodeUrl)
	if err != nil {
		panic(err)
	}

	config := Config{
		Client: client,
		DB: &database.DB{
			DbUrl:    viper.GetString("MONGODB_URL"),
			Database: viper.GetString("DATABASE"),
		},
		Github: &types.GithubConfig{
			ApiUrl:   "https://api.github.com/",
			AuthUrl:  "https://github.com/login/oauth/",
			Secret:   viper.GetString("GITHUB_CLIENT_SECRET"),
			ClientId: viper.GetString("GITHUB_CLIENT_ID"),
		},
		OpenseaMetaApi: "https://api.opensea.io/api/v1/asset/{contract}/{id}",
		Secrets: &Secrets{
			OpenseaKey: viper.GetString("OPENSEA_API_KEY"),
		},
	}
	return &config
}
