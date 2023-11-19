package entities

import (
	"github.com/ethereum/go-ethereum/common"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/common/types"
	"github.com/persona-art/persona/modals"
	"github.com/wealdtech/go-ens/v3"
)

type ENSEntity struct {
	Modal  *modals.Modals
	Client *ethclient.Client
}

func NewENSEntity(config *config.Config) *ENSEntity {
	return &ENSEntity{
		Modal:  modals.NewModals(config),
		Client: config.Client,
	}
}
func (ent *ENSEntity) ResolveAddr(domain string) (*common.Address, error) {
	// Connect to the Ethereum network
	client := ent.Client
	// domain := config.Domain1

	addr, err := ens.Resolve(client, domain)
	if err != nil {
		return nil, err
	}
	return &addr, nil
}
func (ent *ENSEntity) ResolveDefaultText(domain string) (*types.ENSDefaultTextRecords, error) {
	record, err := ens.NewResolver(ent.Client, domain)
	if err != nil {
		return nil, err
	}
	email, err := record.Text("email")
	if err != nil {
		return nil, err
	}
	twitter, err := record.Text("com.twitter")
	if err != nil {
		return nil, err
	}
	github, err := record.Text("com.github")
	if err != nil {
		return nil, err
	}
	discord, err := record.Text("com.discord")
	if err != nil {
		return nil, err
	}
	addr, err := record.Address()
	if err != nil {
		return nil, err
	}
	return &types.ENSDefaultTextRecords{
		Email:   email,
		Twitter: twitter,
		Github:  github,
		Discord: discord,
		Address: addr.Hex(),
	}, nil
}
