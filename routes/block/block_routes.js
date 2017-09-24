// 각종 라우팅을 연결하는 코드
const express = require('express');
const router = express.Router();

//직전 노드 조회
const select_block = require('./select_block');
router.use('/select', select_block);

module.exports = router;
