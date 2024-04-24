# LeetBoard

A Leetcode Leaderboard website. Full Stack application build using Express, NodeJS and React.

## Backend

The Express server consists of two processes, `cache.js` queries the Leetcode interal GraphQL server and caches them on the disk, updating the cache every minute, while `main.js` reads the cache, and provies the API Endpoints for the server. Essentially, it translates a GraphQL API to a REST API.

To use, directly run both `cache.js` and `main.js` seperately using Node, or build a docker image using the `Dockerfile`

## Frontend

Build with React, fetches data and displays data from above server 