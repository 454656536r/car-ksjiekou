var express = require('express');

var router = express.Router();
const carController = require('../Controller/car');
// 列表
router.get('/caroutside/', carController.read);
// 删除
router.get('/caroutside/del', carController.deleteUser);
// 修改
router.put('/caroutside/modify', carController.modify);
// 添加
router.post('/caroutside/increase', carController.increase);
// 详情
router.get('/caroutside/detail', carController.detail);

module.exports = router;
