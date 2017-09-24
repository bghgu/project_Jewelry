// 각종 라우팅을 연결하는 코드
const express = require('express');
const router = express.Router();

//채굴 관련
const mining = require('./mining/mining_routes');
router.use('/mining', mining);

//지갑 관련
const wallet = require('./wallet/wallet_routes');
router.use('/wallet', wallet);

//시세 관련
const price = require('./price/price_routes');
router.use('/price', price);

//송금 관련
const payment = require('./payment/payment_routes');
router.use('/payment', payment);

//블록 리스트 관련
const block = require('./block/block_routes');
router.use('/block', block);

module.exports = router;
