package modals

import "github.com/persona-art/persona/common/config"

type Modals struct {
	*NftModal
	*LastNFTFetchModal
	*UserModal
	*TelegramModal
}

func NewModals(config *config.Config) *Modals {
	return &Modals{
		NewNFTModal(config),
		NewNFTFetchHx(config),
		NewUserModal(config),
		NewTelegramModal(config),
	}
}
