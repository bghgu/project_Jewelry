const express = require('express');
const router = express.Router();
const async = require('async');
const db = require('../../config/db_pool.js');

router.post('/', function(req, res) {

    let address = req.body.address;

    let params = {
        TableName: "block",
        FilterExpression: "#address = :address",
        ExpressionAttributeNames: {
            "#address": "address"
        },
        ExpressionAttributeValues: {
            ":address": address
        }
    };

    db.scan(params, function(err, data) {
        if (err) {
            console.error("Error JSON", JSON.stringify(err, null, 2));
            res.status(403).send({
                err
            });
        } else {
            console.log("scan succeeded");
            console.log(data);
            if (data.Count == 0) {
                res.status(404).send({
                    message: "no address"
                });
            } else {
                res.status(200).send({
                    data
                });
            }
        }
    });

});

module.exports = router;
