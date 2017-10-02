const express = require('express');
const router = express.Router();
const async = require('async');
const db = require('../../config/db_pool.js');

router.post('/', function(req, res) {

    let address = req.body.address;

    let params = {
        TableName: "wallet",
        Key: {
            "address": address
        }
    };
    console.log(params);

    db.query(params, function(err, data) {
        if (err) {
            console.error("Error JSON", JSON.stringify(err, null, 2));
            res.status(403).send({
                err
            });
        } else {
            console.log("scan succeeded");
            if (data.Item == undefined) {
                res.status(404).send({
                    message: "no address"
                });
            } else {
                //console.log("getItem succeeded");
                res.status(200).send({
                    address: address,
                    balance: data.Item.balance
                });
            }
        }
    });

});

module.exports = router;
