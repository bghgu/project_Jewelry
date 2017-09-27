const express = require('express');
const router = express.Router();
const async = require('async');
const uuid = require('node-uuid');
const moment = require('moment');
const db = require('../../config/db_pool.js');
const hash = require('../../module/hash.js');
const previousHash = require('../../module/previous_hash.js');
const check = require('../../module/check.js');

router.post('/', async(req, res, next) => {

    let uuid1 = uuid.v1();
    let address = req.body.sendAddress;
    let amount = req.body.amount;
    let fee = req.body.fee;
    let private_key = req.body.private_key;
    let incommingAddress = req.body.incommingAddress;
    let date = moment().format('YYYY-MM-DD HH:24');
    let sendAddressBalance;
    let incommingAddressBalance;

    let merklehash = hash.encoding(String(uuid1 + address + amount + fee + incommingAddress + date));
    merklehash = hash.encoding(String(merklehash));
    //지갑 조회
    let params1 = {
        TableName: "coin",
        KeyConditionExpression: "#key = :value",
        ExpressionAttributeNames: {
            "#key": "address"
        },
        ExpressionAttributeValues: {
            ":value": address
        }
    };
    //송금 노드 입력
    let params = {
        TableName: "coin",
        Item: {
            "sequenceNum": uuid1, //시퀸스 인덱스
            "previousblockhash": previousHash.getPreviousHash(), //이전 노드 해쉬값
            "address": address, //주소
            "amount": amount, //잔액
            "fee": fee, //수수료
            "incommingAddress": incommingAddress,
            "date": date, //만든 날짜
            "merklehash": merklehash, //이번 노드 해쉬값,
            "type": "payment" //노드 타입
        }
    };
    //보내는 사람 잔액 차감
    let params2 = {
        TableName: "coin",
        Item: {
            "sequenceNum": uuid1, //시퀸스 인덱스
            "previousblockhash": previousHash.getPreviousHash(), //이전 노드 해쉬값
            "address": address, //주소
            "balance": sendAddressBalance - amount - fee, //새로운 잔액
            "date": date, //만든 날짜
            "merklehash": merklehash, //이번 노드 해쉬값,
            "type": "wallet" //노드 타입
        }
    };
    //받는 사람 잔액 증가
    let params3 = {
        TableName: "coin",
        Item: {
            "sequenceNum": uuid1, //시퀸스 인덱스
            "previousblockhash": previousHash.getPreviousHash(), //이전 노드 해쉬값
            "address": address, //주소
            "balance": incommingAddressBalance + amount, //새로운 잔액
            "date": date, //만든 날짜
            "merklehash": merklehash, //이번 노드 해쉬값,
            "type": "wallet" //노드 타입
        }
    };

    //보내는 주소가 존재하는지 판단
    db.query(params1, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
        } else {
            console.log("Query1 succeeded.");
            console.log(data.Count);
            console.log(data.Items[0].balance);
            //주소가 존재하지 않을 경우
            if (data.Count == 0) {
                res.status(404).send({
                    message: "no address"
                });
                //잔액이 부족할 경우
            } else if (data.Items[0].balance < amount + fee) {
                res.status(404).send({
                    message: "no amount"
                });
            } else {
                //보내는 사람의 현재 잔액
                sendAddressBalance = data.Items[0].balance;
                //////////////////////////////////////////////////
                address = incommingAddress;
                //받는 주소가 존재하는지 판단
                db.query(params1, function(err, data) {
                    if (err) {
                        console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
                    } else {
                        console.log("Query2 succeeded.");
                        console.log(data.Count);
                        //받는 사람이 없을 경우
                        if (data.Count == 0) {
                            res.status(404).send({
                                message: "no address"
                            });
                        } else {
                            //받는 사람의 현재 잔액
                            incommingAddressBalance = data.Items[0].balance;
                            //////////////////////////////////////////////////
                            //송금 노드 작성
                            db.put(params, function(err, data) {
                                if (err) {
                                    console.error("Error JSON", JSON.stringify(err, null, 2));
                                    res.status(403).send({
                                        err
                                    });
                                } else {
                                    console.log("getItem succeeded");
                                    //////////////////////////////////////////////////
                                    //출금 진행
                                    db.put(params2, function(err, data) {
                                        if (err) {
                                            console.error("Error JSON", JSON.stringify(err, null, 2));
                                            res.status(403).send({
                                                err
                                            });
                                        } else {
                                            if (data.Item == undefined) {
                                                res.status(404).send({
                                                    message: "err"
                                                });
                                            } else {
                                                console.log("getItem succeeded");
                                                //////////////////////////////////////////////////
                                                //입금 진행
                                                db.put(params3, function(err, data) {
                                                    if (err) {
                                                        console.error("Error JSON", JSON.stringify(err, null, 2));
                                                        res.status(403).send({
                                                            err
                                                        });
                                                    } else {
                                                        if (data.Item == undefined) {
                                                            res.status(404).send({
                                                                message: "err"
                                                            });
                                                        } else {
                                                            console.log("getItem succeeded");
                                                            res.status(200).send({
                                                                message: "success"
                                                            });
                                                            //////////////////////////////////////////////////
                                                            //////////////////////////////////////////////////
                                                        }
                                                    }
                                                });
                                                //////////////////////////////////////////////////
                                            }
                                        }
                                    });
                                    //////////////////////////////////////////////////
                                }
                            });
                            //////////////////////////////////////////////////
                        }
                    }
                });
                //////////////////////////////////////////////////
            }
        }
    });

});

module.exports = router;
