package services

import (
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/services/api"
)

func Server(config *config.Config) {
	// Set up the Gin router
	app := gin.Default()
	// Start the server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}
	app.Use(CORSMiddleware())

	apiRoute := app.Group("/api")
	api.ENSRoutes(apiRoute.Group("/ens"), config)
	api.NFTRoutes(apiRoute.Group("/nfts"), config)
	api.GithubRoute(apiRoute.Group("/github"), config)

	addr := fmt.Sprintf(":%s", port)
	app.Run(addr)
}

func CORSMiddleware() gin.HandlerFunc {
	return func(c *gin.Context) {
		c.Writer.Header().Set("Access-Control-Allow-Origin", "*")
		c.Writer.Header().Set("Access-Control-Allow-Credentials", "true")
		c.Writer.Header().Set("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With")
		c.Writer.Header().Set("Access-Control-Allow-Methods", "POST, OPTIONS, GET, PUT")

		if c.Request.Method == "OPTIONS" {
			c.AbortWithStatus(204)
			return
		}

		c.Next()
	}
}
