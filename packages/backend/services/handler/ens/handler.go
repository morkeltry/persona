package handler

import (
	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/common/types"
	"github.com/persona-art/persona/entities"
)

type ENSHandler struct {
	*entities.ENSEntity
	Config *config.Config
}

func NewENSHandler(config *config.Config) *ENSHandler {
	return &ENSHandler{
		entities.NewENSEntity(config),
		config,
	}
}

func (h *ENSHandler) HandleDefaultTextRecord(domain string) (*types.ENSDefaultTextRecords, error) {
	return h.ResolveDefaultText(domain)
}
