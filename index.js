require('dotenv').config()
const express = require("express");
// Import Moralis
const Moralis = require("moralis").default;
// Import the EvmChain dataType
const nfts = require('./routes/nfts');
const app = express();
const cors = require('cors')
app.use(cors())


app.use('/nfts', nfts);

// Add this a startServer function that initialises Moralis
const startServer = async () => {
  await Moralis.start({
    apiKey: process.env.API_KEY,
  });
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
  });
};

// Call startServer()
startServer();  