var express = require('express');
var router = express.Router();
const Web3 = require('web3');

const web3 = new Web3(new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com/"));
const contractAbi = JSON.parse(process.env.CONTRACTABI);

const contractAddress = '0x76d7d4a62dE48579C103ff3a6dec0cb73a1C67Be'; // Insert the address of your contract here
const contract = new web3.eth.Contract(contractAbi, contractAddress);

router.get('/getAmount/:id', async (req, res) => {
    try {
      const address = req.params.id;
      const result = await contract.methods.balanceOf(address).call();
      res.send({ result });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });

module.exports = router;