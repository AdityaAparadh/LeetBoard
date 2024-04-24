const fs = require('fs');
const axios = require('axios');

const usernames = ['adityaaparadh', 'yashkiran2004', 'Quanta6']; // Add your usernames here

let userProfileCache = {};

async function initializeCache() {
  for (const username of usernames) {
    await updateUserProfileCache(username);
  }
  saveCacheToFile();
}

function loadCacheFromFile() {
  try {
    const data = fs.readFileSync('data.json', 'utf8');
    userProfileCache = JSON.parse(data);
  } catch (error) {
    console.error('Error loading cache from file:', error);
  }
}

function saveCacheToFile() {
  try {
    fs.writeFileSync('data.json', JSON.stringify(userProfileCache));
  } catch (error) {
    console.error('Error saving cache to file:', error);
  }
}

async function updateUserProfileCache(username) {
  console.log("GRAPHQL CALL")
  const graphqlEndpoint = 'https://leetcode.com/graphql';

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

    const userProfile = response.data.data.matchedUser;
    userProfileCache[username] = userProfile;
  } catch (error) {
    console.error('Error fetching user profile:', error);
  }
}

function startCacheUpdateInterval() {
  setInterval(() => {
    for (const username in userProfileCache) {
      updateUserProfileCache(username);
    }
    saveCacheToFile();
  }, 60000); 
}

initializeCache();
startCacheUpdateInterval();

module.exports = {
  getUserProfileCache: () => userProfileCache,
  updateUserProfileCache
};
