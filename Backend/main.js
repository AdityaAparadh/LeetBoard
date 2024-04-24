const express = require('express');
const cache = require('./cache');
const cors = require('cors')

const app = express();
const port = 3000;

app.use(cors({origin: 'http://localhost:5173'}))

app.get('/user-profile/:username', (req, res) => {
    console.log( " API Called ")
  const { username } = req.params;
  const userProfileCache = cache.getUserProfileCache();
  
  if (userProfileCache.hasOwnProperty(username)) {
    res.json(userProfileCache[username]);
  } else {
    res.status(404).json({ error: 'User profile not setup on this server' });
  }
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
