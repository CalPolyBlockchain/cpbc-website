// server/index.js
const axios = require('axios');
require('dotenv').config();
const express = require('express');
const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/api', async (req, res) => {
  const twitter =
    'https://api.twitter.com/2/users/by/username/polyblockchain?user.fields=public_metrics';
  const config = {
    headers: {
      authorization: `Bearer ${process.env.BEARER_TOKEN}`,
    },
  };
  const result = await axios.get(twitter, config);
  res.json({ data: result.data.data });
});

app.get('/api/sheet', async (req, res) => {
  const {
    query: { name, email, message },
  } = req;

  try {
    if (!name || !email) {
      throw new Error();
    }

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/gm, '\n'),
    });

    await doc.loadInfo(); // loads document properties and worksheets

    await doc.getInfo();
    const sheet = doc.sheetsByIndex[0];
    await sheet.addRow({ name, email, message });

    res.status(200).json({ message: `Added ${name} ${email} and ${message}` });
  } catch (error) {
    res.status(500).json(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
