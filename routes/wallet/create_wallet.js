const express = require('express');
const router = express.Router();
const async = require('async');
const uuid = require('node-uuid');
const moment = require('moment');
const db = require('../../config/db_pool.js');
const hash = require('../../module/hash.js');
const previousHash = require('../../module/previous_hash.js');

router.get('/', function(req, res) {

    let date = moment().format('YYYY-MM-DD HH:24');
    let uuid1 = uuid.v1();
    let address = hash.encoding(String(uuid.v4()));
    let private_key = hash.encoding(String(address));

    let merklehash = hash.encoding(String(uuid1 + address + date + private_key));
    merklehash = hash.encoding(String(merklehash));

    //지갑 생성
    let walletParams = {
        TableName: "wallet",
        Item: {
            "sequenceNum": uuid1, //시퀸스 인덱스
            "address": address, //주소
            "balance": 100, //잔액
            "date": date, //만든 날짜
        }
    };
    //지갑 생성
    let blockParams = {
        TableName: "block",
        Item: {
            "sequenceNum": uuid1, //시퀸스 인덱스
            "previousblockhash": previousHash.getPreviousHash(), //이전 노드 해쉬값
            "address": address, //주소
            "balance": 100, //잔액
            "date": date, //만든 날짜
            "merklehash": merklehash, //이번 노드 해쉬값,
            "type": "create_wallet" //노드 타입
        }
    };

    //
    const create_wallet = [
        function(callback) {
            db.put(walletParams, function(err, data) {
                if (err) {
                    console.error("Error JSON", JSON.stringify(err, null, 2));
                    res.status(403).send({
                        message: "FAILED"
                    });
                    callback(err, null);
                } else {
                    console.log("PutItem succeeded");
                    if (previousHash.setPreviousHash(merklehash) == 1) {
                        callback(null);
                    } else {
                        res.status(403).send({
                            message: "FAILED"
                        });
                    }
                }
            });
        },
        function(callback) {
            db.put(blockParams, function(err, data) {
                if (err) {
                    console.error("Error JSON", JSON.stringify(err, null, 2));
                    res.status(403).send({
                        message: "FAILED"
                    });
                    callback(err, null);
                } else {
                    console.log("PutItem succeeded");
                    if (previousHash.setPreviousHash(merklehash) == 1) {
                        callback(null);
                    } else {
                        res.status(403).send({
                            message: "FAILED"
                        });
                    }
                }
            });
        }
    ];

    async.waterfall(create_wallet, function(err, result) {
        if (err)
            console.log(err);
        else {
            console.log("PutItem succeeded");
            res.status(201).send({
                message: "SUCCESS",
                address: address,
                private_key: private_key,
                create_date: date
            });
        }
    });

});

module.exports = router;
