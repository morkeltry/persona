package main

import (
	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/services"
)

func main() {
	config := config.AppConfig()
	services.Server(config)
}
