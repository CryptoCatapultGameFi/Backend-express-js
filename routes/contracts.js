var express = require('express');
var router = express.Router();
const Web3 = require('web3');
const contract = require('../contracts/conect_contract')

router.get('/getAmount/:id', async (req, res) => {
    try {
      let result;
      const address = req.params.id;
      const value = await contract.methods.balanceOf(address).call();
      const totalEther = Web3.utils.fromWei(value, 'ether');
      const amount = parseFloat(totalEther);
      if (amount % 1 === 0) {
        result = amount
      }
      else {
        result = parseFloat(amount).toFixed(2)
      }
      res.send({ result });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  });



module.exports = router;