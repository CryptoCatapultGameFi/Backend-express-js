require('dotenv').config()
const express = require("express");
// Import Moralis
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

// Import the EvmChain dataType
const nfts = require('./routes/nfts');
const contracts = require('./routes/contracts');
const app = express();
const sql = require('./routes/sql')
const user = require('./routes/user')
const cors = require('cors')
app.use(cors())
app.use(express.json());


app.use('/nfts', nfts);
app.use('/contracts', contracts);
app.use('/sql', sql);
app.use('/user', user);

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