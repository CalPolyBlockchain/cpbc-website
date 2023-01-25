// server/index.js
const axios = require('axios');
require('dotenv').config();
const express = require("express");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/api", async (req, res) => {
    const twitter = 'https://api.twitter.com/2/users/by/username/polyblockchain?user.fields=public_metrics';
    const config = {
        headers: {
          "authorization": `Bearer ${process.env.BEARER_TOKEN}`,
      }}
    const result = await axios.get(twitter, config)
    res.json({ data: result.data.data });
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});