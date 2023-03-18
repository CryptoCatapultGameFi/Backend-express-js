var express = require('express');
var router = express.Router();
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");

  router.get("/acc_nft/:id", async (req, res) => {
    const address = req.params.id;
    const chain = EvmChain.MUMBAI;
    const response = await Moralis.EvmApi.nft.getWalletNFTs({
        address,
        chain,
      });
    res.json(response.result);
});

router.get("/nft/:nft_id", async (req, res) => {
    const address = req.params.nft_id;
    const chain = EvmChain.MUMBAI;
    const response = await Moralis.EvmApi.nft.getContractNFTs({
        address,
        chain,
      });
    res.json(response.result);
});

module.exports = router;