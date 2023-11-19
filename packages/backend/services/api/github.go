package api

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
	"net/url"

	"github.com/gin-gonic/gin"
	"github.com/persona-art/persona/common/config"
)

func GithubRoute(router *gin.RouterGroup, config *config.Config) {
	router.GET("/getToken", func(ctx *gin.Context) {
		code := ctx.Query("code")
		// Set the necessary parameters for the OAuth access token request
		endpoint := config.Github.AuthUrl + "access_token"
		clientID := config.Github.ClientId
		clientSecret := config.Github.Secret

		// Create the HTTP client and request object
		client := &http.Client{}
		query := fmt.Sprintf("%s?client_id=%s&client_secret=%s&code=%s",
			endpoint, clientID, clientSecret, code)
		fmt.Println(query)
		req, err := http.NewRequest("POST", query, nil)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error creating request: %v", err)})
			return
		}
		// Set the necessary headers for the OAuth access token request
		req.Header.Set("Accept", "*/*")
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

		// Parse the JSON response and extract the access token
		values, err := url.ParseQuery(string(body))
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error parsing response body: %v", err)})
			return
		}
		accessToken := values.Get("access_token")
		if accessToken == "" {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": fmt.Errorf("error getting access token: %s", string(body))})
			return
		}

		// Print the access token
		fmt.Println("Access token:", accessToken)

		ctx.JSON(http.StatusOK, map[string]interface{}{"data": accessToken})
	})
	router.GET("/commits", func(ctx *gin.Context) {
		repo := ctx.Query("repo")
		owner := ctx.Query("owner")
		authorization := ctx.Request.Header["Authorization"][0]
		url := config.Github.ApiUrl + "repos/" + owner + "/" + repo + "/commits"
		req, err := http.NewRequest("GET", url, nil)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": err})
			return
		}
		req.Header.Set("Authorization", authorization)
		req.Header.Set("Accept", "application/vnd.github+json")
		req.Header.Set("X-GitHub-Api-Version", "2022-11-28")
		httpClient := http.Client{}
		resp, err := httpClient.Do(req)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": err})
			return
		}
		defer resp.Body.Close()
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, map[string]interface{}{"error": err})
			return
		}
		var result interface{}
		json.Unmarshal(body, &result)
		ctx.JSON(http.StatusOK, map[string]interface{}{"data": result})
	})

	router.GET("/user", func(ctx *gin.Context) {
		authorization := ctx.Request.Header["Authorization"][0]
		url := config.Github.ApiUrl + "user"
		req, err := http.NewRequest("GET", url, nil)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": err})
			return
		}
		req.Header.Set("Authorization", authorization)
		req.Header.Set("Accept", "application/vnd.github+json")
		req.Header.Set("X-GitHub-Api-Version", "2022-11-28")
		httpClient := http.Client{}
		resp, err := httpClient.Do(req)
		if err != nil {
			ctx.JSON(http.StatusBadRequest, map[string]interface{}{"error": err})
			return
		}
		defer resp.Body.Close()
		body, err := ioutil.ReadAll(resp.Body)
		if err != nil {
			ctx.JSON(http.StatusInternalServerError, map[string]interface{}{"error": err})
			return
		}
		var result interface{}
		json.Unmarshal(body, &result)
		ctx.JSON(http.StatusOK, map[string]interface{}{"data": result})
	})

}
