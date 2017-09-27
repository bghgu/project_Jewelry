const express = require('express');
const router = express.Router();
const async = require('async');
const db = require('../../config/db_pool.js');

router.post('/', async(req, res, next) => {

    let address = req.body.address;

    let params = {
        TableName: "coin",
        Key:{
            "address": address,
            "type" : "payment"
        }
    };

    await db.get(params, function(err, data) {
        if (err) {
            //console.error("Error JSON", JSON.stringify(err, null, 2));
            res.status(403).send({
                err
            });
        } else {
            if(data.Item == undefined) {
                res.status(404).send({
                    message : "no address"
                });
            }else {
                //console.log("getItem succeeded");
                res.status(200).send({
                    data
                });
            }
        }
    });

});

module.exports = router;
