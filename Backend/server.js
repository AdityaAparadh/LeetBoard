const express = require('express');
const axios = require('axios');
const cors = require('cors')
const { LRUCache } = require('lru-cache');

const app = express();
const PORT =  3000;
app.use(cors({origin: 'http://localhost:5173'}))

// const userProfileCache = {};
const userProfileCache = new LRUCache({
    max: 100,
    maxAge: 60000,
  });
  

const graphqlEndpoint = 'https://leetcode.com/graphql';

const fetchUserProfile = async (username) => {
    console.log("Leetcode GraphQL Query Requested")
  const query = `
    query getUserProfile($username: String!) {
      matchedUser(username: $username) {
        username
        submitStats: submitStatsGlobal {
          acSubmissionNum {
            difficulty
            count
            submissions
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(
      graphqlEndpoint,
      {
        query,
        variables: { username },
      }
    );

    return response.data.data.matchedUser;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    throw error;
  }
};

const cacheMiddleware = (req, res, next) => {
  const { username } = req.params;
  const cachedProfile = userProfileCache[username];

  if (cachedProfile && (Date.now() - cachedProfile.timestamp) < 60000) {
    console.log(`Cache Hit - Life Remaining: ${(60000 - (Date.now() - cachedProfile.timestamp)) / 1000} seconds  `)
    res.json(cachedProfile.data);
  } else {
    next();
  }
};

app.get('/user/:username', cacheMiddleware, async (req, res) => {
  const { username } = req.params;

  try {
    const userProfile = await fetchUserProfile(username);
    userProfileCache[username] = {
      data: userProfile,
      timestamp: Date.now(),
    };
    res.json(userProfile);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`LeetBoard server is running on port ${PORT}`);
});
