const express = require('express');
const router = express.Router();
const async = require('async');
const uuid = require('node-uuid');
const moment = require('moment');
const db = require('../../config/db_pool.js');
const hash = require('../../module/hash.js');
const parentHash = require('../../module/parent_hash.js');

router.get('/', async(req, res, next) => {

    let date = moment().format('YYYY-MM-DD HH:24');
    let uuid1 = uuid.v1();
    let address = hash.encoding(String(uuid.v4()));
    let password = hash.encoding(String(address));
    let h = hash.encoding(String(uuid1 + address));

    let params = {
        TableName: "coin",
        Item: {
            "sequenceNum": uuid1, //시퀸스 인덱스
            "parent_hash": parentHash.getParentHash(), //이전 노드 해쉬값
            data: {
                "address": address, //주소
                "date": date //만든 날짜
            },
            "hash": h //이번 노드 해쉬값
        }
    };

    console.log(params);

    await db.put(params, function(err, data) {
        if (err) {
            console.error("Error JSON", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded");
            if (parentHash.setParentHash(h) == 1) {
                res.status(200).send({
                    address: address,
                    password: password,
                    balance: 0,
                    create_date: date
                });
            } else {
                res.status(400).send({
                    message: "create wallet failed!"
                });
            }
        }
    });

});

module.exports = router;
