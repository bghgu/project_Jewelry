// 각종 라우팅을 연결하는 코드
const express = require('express');
const router = express.Router();

//송금
const payment = require('./payment');
router.use('/', payment);

module.exports = router;
