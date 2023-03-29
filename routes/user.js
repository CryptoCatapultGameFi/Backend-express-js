var express = require('express');
var router = express.Router();
const client = require("../db");
const { response } = require('express');



router.post("/user/:id", async (req, res) => {
    try {
        let status = "old"
        const { id } = req.params;
        const user = await client.query(
            `SELECT * FROM "users" WHERE "user_address" = $1`, [id]
        )
        if(user.rows[0] === undefined) {
            await client.query(
                `INSERT INTO "users" ("user_address","user_playing")
                VALUES ($1,$2) RETURNING *`, [id, 0])
            status = "new"
        }
        res.send({status});
        console.log(user.rows)
        
    }  catch (err) {
        console.error(err.message);
    }
});

router.get("/status/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const status =  await client.query(
            `SELECT users.user_playing FROM "users" WHERE "user_address" = $1`, [id]
        )
        console.log(status.rows)
        res.json(status.rows);     
    }  catch (err) {
        console.error(err.message);
    }
});

router.post("/play", async (req, res) => {
    try{
        
        const { id, catapult, bullet } = req.body  

        const user = await client.query(
            `SELECT * FROM "users" WHERE "user_address" = $1`, [id]
        )
    
        if (!user.rows[0].user_playing) {
            const user_nft_used = await client.query(
                `INSERT INTO "user_nft_used"(
                    user_address, catapult_address, catapult_power,
                    bullet_power, catapult_name, bullet_name,
                    catapult_img, bullet_img, time_stamp
                    ) 
                VALUES ($1,$2,$3,$4,$5,$6,$7,$8,CURRENT_TIMESTAMP) RETURNING *`, 
                [
                    id, catapult.tokenId, catapult.metadata.power, 
                    bullet.metadata.power, catapult.metadata.name, bullet.metadata.name,
                    catapult.metadata.image, bullet.metadata.image,  
                ]
            )
            await client.query(
                `UPDATE users 
                SET user_playing = $1, user_nft_using_id = $2  
                WHERE "user_address" = $3`, [1, user_nft_used.rows[0].user_nft_used_id , id]
            )
            // if(now.valueOf() > user_nft_used.rows[0].time_stamp.valueOf()) {
            //     console.log("yes")
            // }
            // if(now.valueOf() <= user_nft_used.rows[0].time_stamp.valueOf()) {
            //     console.log("no")
            // }
        } 
        res.json({id})
    }  catch (err) {
        console.error(err.message);
    }
});

router.get("/nft/:id", async (req, res) => {
    try {
        const { id } = req.params
        const user = await client.query(
            `SELECT * FROM "users" WHERE "user_address" = $1`, [id]
        )
        console.log(user.rows[0])
        const user_nft = await client.query(
            `SELECT * FROM "user_nft_used" WHERE "user_nft_used_id" = $1 `, [user.rows[0].user_nft_using_id]
        )
        res.json(user_nft.rows)
    } catch (err) {
        console.error(err.message);
    }
})

router.post("/finish/:id", async (req, res) => {
    try {
        const { id } = req.params
        const user = await client.query(
            `UPDATE users 
            SET user_playing = $1, user_nft_using_id = $2  
            WHERE "user_address" = $3 RETURNING * `, [0, null, id]
        )
        res.json(user.rows)
    } catch (err) {
        console.error(err.message);
    }
})





module.exports = router;