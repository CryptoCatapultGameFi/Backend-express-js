var express = require('express');
var router = express.Router();
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/common-evm-utils");
const client = require('../db');
const { response } = require('express');
const Web3 = require('web3')


function randomCatapult() {
  const number = Math.floor(Math.random() * 101);
  if( number <= 60 ) {
    return 'common'
  }
  else if( number <= 90 ) {
    return 'rare'
  }
  else {
    return 'super_rare'
  }
 }

router.get("/acc_nft/:id", async (req, res) => {
  const address = req.params.id;
  const chain = EvmChain.MUMBAI;
  const response = await Moralis.EvmApi.nft.getWalletNFTs({
      address,
      chain,
    });
  res.json(response.result);
});

router.get("/all/:nft_id", async (req, res) => {
  const address = req.params.nft_id;
  const chain = EvmChain.MUMBAI;
  const response = await Moralis.EvmApi.nft.getContractNFTs({
      address,
      chain,
    });
  let totalBullet = 0
  let totalCatapult = 0
  for(const nft of response.result) {
    if(nft.result.metadata !== undefined) {
      if(nft.result.metadata.type === "bullet") {
        totalBullet++;
      }
      else if(nft.result.metadata.type === "catapult") {
        totalCatapult++;
      }
    }
  }
  res.json({totalBullet, totalCatapult});
});

router.get("/random/catapult", async (req, res) => {
  const rarity = randomCatapult()
  const id = Web3.utils.toBN(Web3.utils.randomHex(32))
  const catapult =  await client.query(
      `SELECT * FROM "catapult" WHERE "tier" = $1 
      ORDER BY RANDOM() LIMIT 1 `, [rarity]
  )
  const response =  
  { 
      id: id.toString(),
      tier: catapult.rows[0].tier,
      catapult_name:  catapult.rows[0].catapult_name,
      catapult_gateway: catapult.rows[0].catapult_gateway

  }
  res.json(response)
})

router.get("/random/bullet", async (req, res) => {
  try {
    const rarity = randomCatapult()
    const id = Web3.utils.toBN(Web3.utils.randomHex(32))
    const bullet =  await client.query(
        `SELECT * FROM "bullet" WHERE "tier" = $1 
        ORDER BY RANDOM() LIMIT 1 `, [rarity]
    )
    const response =  
    { 
        id: id.toString(),
        tier: bullet.rows[0].tier,
        bullet_name:  bullet.rows[0].bullet_name,
        bullet_gateway: bullet.rows[0].bullet_gateway

    }
    res.json(response)
  } catch (err) {
    console.error(err.message);
  }
})

router.get("/rubber/:user_id/:catapult_id", async (req, res) => {
  try {
  // const now = new Date(2023,3,31);
    const now = new Date(Date.now());
    now.setHours(0,0,0,0)
    const {user_id, catapult_id} = req.params

    const rubber = await client.query(
      `SELECT COUNT(user_nft_used_id) FROM "user_nft_used"
      WHERE user_address = $1 AND catapult_address = $2 AND time_stamp = $3`, [user_id, catapult_id, now]
    )

    res.json(rubber.rows[0])
  } catch (err) {
    console.error(err.message);
  }

})



module.exports = router;