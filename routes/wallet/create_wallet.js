const express = require('express');
const router = express.Router();
const async = require('async');
const uuid = require('node-uuid');
const moment = require('moment');
const db = require('../../config/db_pool.js');
const hash = require('../../module/hash.js');
const previousHash = require('../../module/previous_hash.js');

router.get('/', async(req, res, next) => {

    let date = moment().format('YYYY-MM-DD HH:24');
    let uuid1 = uuid.v1();
    let address = hash.encoding(String(uuid.v4()));
    let private_key = hash.encoding(String(address));

    let merklehash = hash.encoding(String(uuid1 + address));
    merklehash = hash.encoding(String(merklehash));

    let params = {
        TableName: "coin",
        Item: {
            "sequenceNum": uuid1, //시퀸스 인덱스
            "previousblockhash": previousHash.getPreviousHash(), //이전 노드 해쉬값
            "address": address, //주소
            "balance": 0, //잔액
            "date": date, //만든 날짜
            "merklehash": merklehash //이번 노드 해쉬값
        }
    };

    console.log(params);

    await db.put(params, function(err, data) {
        if (err) {
            console.error("Error JSON", JSON.stringify(err, null, 2));
        } else {
            console.log("PutItem succeeded");
            if (previousHash.setPreviousHash(merklehash) == 1) {
                res.status(201).send({
                    address: address,
                    private_key: private_key,
                    create_date: date
                });
            } else {
                res.status(403).send({
                    message: "create wallet failed!"
                });
            }
        }
    });

});

module.exports = router;
