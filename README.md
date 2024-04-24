# LeetBoard

A Leetcode Leaderboard website. Full Stack application build using Express, NodeJS and React. ( ⚠️ WIP )

## Backend

The Express server, `server.js` queries the Leetcode interal GraphQL server and caches them in memory, updating the cache every minute, and provies the API Endpoints for the server. Essentially, it translates the GraphQL API into a REST API.

Currently it supports one route : `/user/{username}` 

To use, directly configure and run `server.js` using Node, or build a docker image using the `Dockerfile`


## Frontend

Built with React, fetches data and displays data from above server 