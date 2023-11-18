import { Octokit } from "@octokit/core";
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const LoginButton = () => {
  const location = useLocation();
  const octokit = new Octokit({
    auth: localStorage.getItem("access_token"),
  });
  const getCommits = () => {
    return octokit.request("GET /repos/{owner}/{repo}/commits", {
      owner: "chokey2nv",
      repo: "vote_dapp",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  };
  const getUser = () => {
    // Octokit.js
    // https://github.com/octokit/core.js#readme

    return octokit.request("GET /user", {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
  };
  useEffect(() => {
    (async () => {
      console.log(await getUser());
      console.log(await getCommits());
    })();
  }, []);
  useEffect(() => {
    (async () => {
      const searchParams = new URLSearchParams(location.search);
      const code = searchParams.get("code");
      if (code) {
        const response = await (
          await fetch("http://localhost:8080/api/github/getToken?code=" + code)
        ).json();
        if (response?.data) {
          localStorage.setItem("access_token", response.data);
          // const user = await (
          //   await fetch("http://localhost:8080/api/github/user", {
          //     headers: {
          //       Authorization: "Bearer " + response.data,
          //     },
          //   })
          // ).json();
          // console.log(user);
        }
      }
    })();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          window.location.assign(
            `https://github.com/login/oauth/authorize?client_id=5f7316317df9bb089ad4`
          );
        }}
      >
        Log in with Github2
      </button>
      <button
        onClick={() => {
          fetch(
            "https://api.github.com/applications/5f7316317df9bb089ad4/token",
            {
              method: "POST",
            }
          )
            .then((res) => res.json())
            .then(console.log);
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default LoginButton;
