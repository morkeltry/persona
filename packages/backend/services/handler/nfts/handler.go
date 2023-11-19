package handler

import (
	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/entities"
)

type NFTHandler struct {
	*entities.NFTEntity
	Config *config.Config
}

func NewNFTHandler(config *config.Config) *NFTHandler {
	return &NFTHandler{
		entities.NewNFTEntity(config),
		config,
	}
}
