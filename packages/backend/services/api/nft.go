package api

import (
	"context"
	"net/http"

	"github.com/ethereum/go-ethereum/common"
	"github.com/gin-gonic/gin"
	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/entities"
	handler "github.com/persona-art/persona/services/handler/nfts"
)

func NFTRoutes(router *gin.RouterGroup, config *config.Config) {
	nftEntity := entities.NewNFTEntity(config)
	nftHandler := handler.NewNFTHandler(config)
	router.GET("/:address", func(ctx *gin.Context) {
		address := ctx.Param("address")
		nfts, err := nftHandler.HandleWalletNFTs(ctx, common.HexToAddress(address))
		if err != nil {
			panic(err)
		}
		ctx.JSON(http.StatusOK, nfts)
	})
	router.GET("/opensea", func(ctx *gin.Context) {
		url := ctx.Query("url")
		nfts, err := nftEntity.FetchOpenseaMetadata(context.Background(), url)
		if err != nil {
			panic(err)
		}
		ctx.JSON(http.StatusOK, nfts)
	})
}
