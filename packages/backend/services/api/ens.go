package api

import (
	"net/http"

	"github.com/ethereum/go-ethereum/common"
	"github.com/gin-gonic/gin"
	"github.com/persona-art/persona/common/config"
	handler "github.com/persona-art/persona/services/handler/ens"
)

func ENSRoutes(router *gin.RouterGroup, config *config.Config) {
	ensHandler := handler.NewENSHandler(config)
	router.GET("/list/:address", func(ctx *gin.Context) {
		address := ctx.Param("address")
		ensList, err := ensHandler.HandleWalletENSList(ctx, common.HexToAddress(address))
		if err != nil {
			panic(err)
		}
		ctx.JSON(http.StatusOK, ensList)
	})
	router.GET("/:domain", func(ctx *gin.Context) {
		domain := ctx.Param("domain")
		record, err := ensHandler.HandleDefaultTextRecord(domain)
		if err != nil {
			panic(err)
		}
		ctx.JSON(http.StatusOK, record)
	})
}
