var express = require('express');
var router = express.Router();
const client = require("../db")

router.get("/bullet", async (req, res) => {
    try {
        const user = await client.query(`SELECT * FROM bullet`)
        res.json(user.rows);
    }  catch (err) {
        console.error(err.message);
    }
});

router.get("/test", async (req, res) => {
    
    const response = await client.query('SELECT * FROM test_table;')
    res.json(response.rows);
});

module.exports = router;
