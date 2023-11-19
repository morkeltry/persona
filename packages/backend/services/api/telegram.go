// telegram.go API
package api

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/persona-art/persona/common/config"
	"github.com/persona-art/persona/common/types"
	"github.com/persona-art/persona/modals"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func TelegramRoute(router *gin.RouterGroup, config *config.Config) {

		// Add your Telegram OAuth endpoint here
	router.GET("/telegram/auth", func(ctx *gin.Context) {
		telegramAuthURL := "https://t.me/oauth/login"
		clientID := "your-telegram-client-id"           // Replace with your Telegram app's client ID
		redirectURI := "http://localhost/api/telegram/callback" // Replace with your actual callback URL

		// Generate the Telegram authorization URL to redirect the user
		authorizationURL := fmt.Sprintf("%s?client_id=%s&redirect_uri=%s&scope=auth", telegramAuthURL, clientID, redirectURI)

		// Redirect the user to the Telegram authorization page
		ctx.Redirect(http.StatusFound, authorizationURL)
	})

	// Add the Telegram callback endpoint here
	router.GET("/telegram/callback", func(ctx *gin.Context) {
		// Retrieve the access token and other user data from Telegram callback
		accessToken := ctx.Query("access_token")

		// Now you can use the accessToken to fetch user data from Telegram API
		userInfo, err := getTelegramUserData(accessToken)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": "Error fetching user data from Telegram API",
			})
			return
		}

		// Store the necessary user data in your database
		// Use the TelegramModal to store the user's Telegram data
		hexString := "5f48c8901c4e5139785b4376" // this should be gotten from User Modal using the wallet Address field. So get walletInfo where address == ${inputAddress} and the User where walletId = user.WalletId 
		userID, err := primitive.ObjectIDFromHex(hexString)
		telegram := &types.Telegram{
			UserID:     userID, // Retrieve the userID from your user model logic
			TelegramID: userInfo.Result.ID,
			FirstName:  userInfo.Result.FirstName,
			Username:   userInfo.Result.Username,
		}
		telegramModal := modals.NewTelegramModal(config)
		err = telegramModal.InsertTelegram(ctx, telegram)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, gin.H{
				"error": "Error storing Telegram data in the database",
			})
			return
		}

		// Respond with success message or appropriate response
		ctx.JSON(http.StatusOK, gin.H{
			"message":       "Telegram OAuth callback handled successfully",
			"telegram_user": userID,
		})
	})
}

// Function to fetch user data from Telegram API
func getTelegramUserData(accessToken string) (*TelegramUserInfo, error) {
	telegramAPIUrl := "https://api.telegram.org/bot%s/getMe"
	botToken := "BOT_ID" // get it from bot master Replace with your Telegram bot token

	// Make API request to Telegram API
	resp, err := http.Get(fmt.Sprintf(telegramAPIUrl, botToken))
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	// Read response body
	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	// Parse response JSON
	var userInfo TelegramUserInfo
	if err := json.Unmarshal(body, &userInfo); err != nil {
		return nil, err
	}

	return &userInfo, nil
}

// Struct to hold Telegram user data
type TelegramUserInfo struct {
	Ok     bool `json:"ok"`
	Result struct {
		ID        int    `json:"id"`
		IsBot     bool   `json:"is_bot"`
		FirstName string `json:"first_name"`
		Username  string `json:"username"`
	} `json:"result"`
}
