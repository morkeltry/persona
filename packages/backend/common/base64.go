package common

import (
	"encoding/base64"
	"encoding/json"
	"log"
)

func DecodeBase64(base64Str string) (interface{}, error) {

	decoded, err := base64.StdEncoding.DecodeString(base64Str)
	if err != nil {
		log.Fatal("Error decoding base64 string:", err)
	}

	var data interface{}
	err = json.Unmarshal(decoded, &data)
	if err != nil {
		return nil, err
	}
	return data, nil
}
