const express = require('express');
const router = express.Router();
const async = require('async');
const db = require('../../config/db_pool.js');

router.get('/:address', async(req, res, next) => {
    console.log(req.params.address);
    res.status(200).send({
        balance : 1000
    });
});

module.exports = router;
