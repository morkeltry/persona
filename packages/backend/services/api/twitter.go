// twitter.go API
package api

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"
	"strings"

	"github.com/gin-gonic/gin"
	"github.com/persona-art/persona/common/config"
)

func TwitterRoute(router *gin.RouterGroup, config *config.Config) {
	router.GET("/twitter/auth", func(ctx *gin.Context) {
		// Set the necessary parameters for the Twitter OAuth authorization request
		requestTokenEndpoint := "https://api.twitter.com/oauth/request_token"
		callbackURL := "http://your-web-service.com/api/twitter/callback" 
		consumerKey := "your-twitter-consumer-key"                       
		consumerSecret := "your-twitter-consumer-secret"                 

		
		client := &http.Client{}
		req, err := http.NewRequest("POST", requestTokenEndpoint, nil)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error creating request: %v", err)})
			return
		}

		// Set the necessary headers for the Twitter OAuth authorization request
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
		req.SetBasicAuth(consumerKey, consumerSecret)

		// Set the request body with the required parameters
		data := url.Values{}
		data.Set("oauth_callback", callbackURL)
		req.Body = ioutil.NopCloser(strings.NewReader(data.Encode()))

		// Send the request and read the response
		resp, err := client.Do(req)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error sending request: %v", err)})
			return
		}
		defer resp.Body.Close()
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error reading response body: %v", err)})
			return
		}

		// Parse the response and extract the request token and token secret
		values, err := url.ParseQuery(string(body))
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error parsing response body: %v", err)})
			return
		}
		requestToken := values.Get("oauth_token")
		tokenSecret := values.Get("oauth_token_secret")
		
		// Store the request token and token secret temporarily for later use in the callback
		// You can use a session store or any other method to keep the tokens for the user's session
		// TODO
		print(tokenSecret)

		// Generate the Twitter authorization URL to redirect the user
		authorizationURL := "https://api.twitter.com/oauth/authenticate?" + url.Values{
			"oauth_token": {requestToken},
		}.Encode()

		// Redirect the user to the Twitter authorization page
		ctx.Redirect(http.StatusFound, authorizationURL)
	})


	router.GET("/twitter/callback", func(ctx *gin.Context) {
		code := ctx.Query("code")

		// Set the necessary parameters for the Twitter OAuth access token request
		endpoint := "https://api.twitter.com/oauth/access_token"
		callbackURL := "http://your-web-service.com/api/twitter/callback"
		consumerKey := "your-twitter-consumer-key"                       
		consumerSecret := "your-twitter-consumer-secret" 

		// Create the HTTP client and request object
		client := &http.Client{}
		req, err := http.NewRequest("POST", endpoint, nil)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error creating request: %v", err)})
			return
		}

		// Set the necessary headers for the Twitter OAuth access token request
		req.Header.Set("Content-Type", "application/x-www-form-urlencoded")
		req.SetBasicAuth(consumerKey, consumerSecret)

		// Set the request body with the required parameters
		data := url.Values{}
		data.Set("grant_type", "authorization_code")
		data.Set("code", code)
		data.Set("redirect_uri", callbackURL)
		req.Body = ioutil.NopCloser(strings.NewReader(data.Encode()))

		// Send the request and read the response
		resp, err := client.Do(req)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error sending request: %v", err)})
			return
		}
		defer resp.Body.Close()
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error reading response body: %v", err)})
			return
		}

		// Parse the JSON response and extract the access token and other user data
		var tokenResp struct {
			AccessToken string `json:"access_token"`
			// Add other necessary fields here
		}
		err = json.Unmarshal(body, &tokenResp)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error parsing response body: %v", err)})
			return
		}

		// Use the access token to fetch the user data from Twitter
		twitterUser, err := getTwitterUserData(tokenResp.AccessToken)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, map[string]interface{}{"error": fmt.Errorf("error getting user data: %v", err)})
			return
		}

		// Store the necessary user data in your database (e.g., user ID, screen name, profile image URL, etc.)
		// For example:
		// userID := twitterUser.ID
		// screenName := twitterUser.ScreenName
		// profileImageURL := twitterUser.ProfileImageURL

		ctx.JSON(http.StatusOK, map[string]interface{}{
			"data": twitterUser,
		})
	})
}

func getTwitterUserData(accessToken string) (*TwitterUser, error) {
	// Implement the logic to fetch user data from Twitter using the provided access token
	// You can use the Twitter API to get the user's profile information

	// Example: Fetching user data using the Twitter API
	endpoint := "https://api.twitter.com/2/users/me"
	client := &http.Client{}
	req, err := http.NewRequest("GET", endpoint, nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Authorization", "Bearer "+accessToken)

	resp, err := client.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return nil, err
	}

	// Parse the JSON response and map it to a struct representing Twitter user data
	var user TwitterUser
	err = json.Unmarshal(body, &user)
	if err != nil {
		return nil, err
	}

	// save the user to the database

	return &user, nil
}

// Define a struct representing Twitter user data
type TwitterUser struct {
	ID            string `json:"id"`
	ScreenName    string `json:"screen_name"`
	ProfileImageURL string `json:"profile_image_url"`
	// Add other necessary fields here
}
