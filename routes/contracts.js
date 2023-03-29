var express = require('express');
var router = express.Router();
const Web3 = require('web3');
const contract = require('../contracts/conect_contract')

router.get('/getAmount/:id', async (req, res) => {
    try {
      const address = req.params.id;
      const value = await contract.methods.balanceOf(address).call();
      const result = Web3.utils.fromWei(value, 'ether');
      res.send({ result });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });



module.exports = router;