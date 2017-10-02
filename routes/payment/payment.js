const express = require('express');
const router = express.Router();
const async = require('async');
const uuid = require('node-uuid');
const moment = require('moment');
const db = require('../../config/db_pool.js');
const hash = require('../../module/hash.js');
const previousHash = require('../../module/previous_hash.js');

router.post('/', function(req, res) {

    let address = req.body.sendAddress;
    let amount = req.body.amount;
    let fee = req.body.fee;
    let private_key = req.body.private_key;
    let incommingAddress = req.body.incommingAddress;
    let uuid1 = uuid.v1();
    let date = moment().format('YYYY-MM-DD HH:24');
    let sendAddressBalance;
    let incommingAddressBalance;

    let merklehash = hash.encoding(String(uuid1 + address + amount + fee + incommingAddress + date));
    merklehash = hash.encoding(String(merklehash));

    //지갑 조회
    let params1 = {
        TableName: "wallet",
        KeyConditionExpression: "#key = :value",
        ExpressionAttributeNames: {
            "#key": "address"
        },
        ExpressionAttributeValues: {
            ":value": address
        }
    };
    //지갑 조회
    let params2 = {
        TableName: "wallet",
        KeyConditionExpression: "#key = :value",
        ExpressionAttributeNames: {
            "#key": "address"
        },
        ExpressionAttributeValues: {
            ":value": incommingAddress
        }
    };
    //보내는 사람 잔액 차감
    let params3 = {
        TableName: "wallet",
        Item: {
            "sequenceNum": uuid1, //시퀸스 인덱스
            "address": address, //주소
            "balance": sendAddressBalance - amount - fee, //새로운 잔액
            "date": date, //만든 날짜
            "type": "update" //노드 타입
        }
    };
    //받는 사람 잔액 증가
    let params4 = {
        TableName: "wallet",
        Item: {
            "sequenceNum": uuid1, //시퀸스 인덱스
            "address": address, //주소
            "balance": incommingAddressBalance + amount, //새로운 잔액
            "date": date, //만든 날짜
            "type": "update" //노드 타입
        }
    };
    //송금 노드 입력
    let params = {
        TableName: "block",
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

    const payment = [
        //보내는 사람 지갑 확인
        function(callback) {
            db.query(params1, function(err, data) {
                if(err) {
                    console.error("Error JSON", JSON.stringify(err, null, 2));
                    res.status(403).send({
                        message: "ERROR"
                    });
                    callback(err, null);
                }else {
                    console.log("Query successed");
                    //지갑이 없을 경우
                    if(data.Count == 0) {
                        console.log("No address");
                        res.status(403).send({
                            message: "NO SENDADDRESS"
                        });
                    }else {
                        sendAddressBalance = data.Items[0].balance;
                        console.log("sendAddressBalance : " + sendAddressBalance);
                        if(sendAddressBalance < amount + fee) {
                            console.log("No amount");
                            res.status(403).send({
                                message: "NO AMOUNT"
                            });
                        }else {
                            callback(null);
                        }
                    }
                }
            });
        },
        //받는 사람 지갑 확인
        function(callback) {
            db.query(params2, function(err, data) {
                if(err) {
                    console.error("Error JSON", JSON.stringify(err, null, 2));
                    res.status(403).send({
                        message: "ERROR"
                    });
                    callback(err, null);
                }else {
                    console.log("Query successed");
                    //지갑이 없을 경우
                    if(data.Count == 0) {
                        console.log("No address");
                        res.status(403).send({
                            message: "NO INCOMMINGADDRESS"
                        });
                    }else {
                        incommingAddressBalance= data.Items[0].balance;
                        console.log("incommingAddressBalance : " + incommingAddressBalance);
                    }
                    callback(null);
                }
            });
        },
        //보내는 사람 잔액 차감
        function(callback) {
            params3.Item.balance = sendAddressBalance - amount - fee;
            console.log(params3);
            db.put(params3, function(err, data) {
                if (err) {
                    console.error("Error JSON", JSON.stringify(err, null, 2));
                    res.status(403).send({
                        message: "ERROR"
                    });
                    callback(err, null);
                } else {
                    console.log("PutItem succeeded");
                    if (previousHash.setPreviousHash(merklehash) == 1) {
                        callback(null);
                    } else {
                        res.status(403).send({
                            message: "ERROR"
                        });
                    }
                }
            });
        },
        //받는 사람 잔액 증가
        function(callback) {
            params4.Item.balance = incommingAddressBalance + amount;
            console.log(params4);
            db.put(params4, function(err, data) {
                if (err) {
                    console.error("Error JSON", JSON.stringify(err, null, 2));
                    res.status(403).send({
                        message: "ERROR"
                    });
                    callback(err, null);
                } else {
                    console.log("PutItem succeeded");
                    if (previousHash.setPreviousHash(merklehash) == 1) {
                        callback(null);
                    } else {
                        res.status(403).send({
                            message: "ERROR"
                        });
                    }
                }
            });
        },
        //송금 노드 작성
        function(callback) {
            db.put(params, function(err, data) {
                if (err) {
                    console.error("Error JSON", JSON.stringify(err, null, 2));
                    res.status(403).send({
                        message: "ERROR"
                    });
                    callback(err, null);
                } else {
                    console.log("PutItem succeeded");
                    if (previousHash.setPreviousHash(merklehash) == 1) {
                        callback(null);
                    } else {
                        res.status(403).send({
                            message: "ERROR"
                        });
                    }
                }
            });
        }
    ];

    async.waterfall(payment, function(err, result) {
        if (err)
            console.log(err);
        else {
            console.log("PutItem succeeded");
            res.status(201).send({
                message: "SUCCESS"
            });
        }
    });

});

module.exports = router;
