var express = require('express');
var router = express.Router();
const client = require("../db")

router.post("/user/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const user = await client.query(
            `SELECT * FROM "users" WHERE "user_address" = $1`, [id]
        )
        if(user.rows[0] === undefined) {
            const response = await client.query(
                `INSERT INTO "users" ("user_address")
                VALUES ($1) RETURNING *`, [id])
            res.json(response.rows);
        }
        else {
            res.json(user.rows);
        }
        console.log(user.rows)
        
    }  catch (err) {
        console.error(err.message);
    }
});

module.exports = router;