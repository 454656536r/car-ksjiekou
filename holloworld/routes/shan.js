var express = require('express');

var router = express.Router();
const carController = require('../Controller/car');
router.get('/user/', carController.userlist);
router.get('/user/del', carController.deleteUser);
// router.get('/user/xouser', carController.xouser);
router.post('/user/tianser', carController.tianser);
router.get('/user/xiangqing', carController.xiangqing);
module.exports = router;
