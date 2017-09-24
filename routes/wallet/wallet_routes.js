// 각종 라우팅을 연결하는 코드
const express = require('express');
const router = express.Router();

//지갑 생성
const create_wallet = require('./create_wallet');
router.use('/create', create_wallet);

//잔액 조회
const get_balance = require('./get_balance');
router.use('/balance', get_balance);

//거래기록 조회
const get_transactions = require('./get_transactions');
router.use('/transactions', get_transactions);

module.exports = router;
