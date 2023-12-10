const fs = require('fs')
const path = require('path');
const userlist = (req, res) => {
    res.json({
        code: 200,
        data: [

            {
                "id": "1",
                "name": "宝马",
                "img": "https://www.bmw.com.cn/content/dam/bmw/marketCN/bmw_com_cn/model_card/F52_2022.png",
                "color": "red",
                "manei": "20w",
                "time": "2023/12/8"
            },
            {
                "id": "2",
                "name": "奔驰",
                "img": "https://www.bmw.com.cn/content/dam/bmw/marketCN/bmw_com_cn/model_card/2_series_coupe_2021.png",
                "color": "red",
                "manei": "20w",
                "time": "2023/12/8"
            },

        ],

    })
}
// 删除
const deleteUser = (req, res) => {
    res.json({
        code: '200',
        msg: '已删除'
    })
}
// 修改
const xouser = (req, res) => {
    res.json({
        code: '200',
        msg: '已修改'
    })
}
// 添加
const tianser = (req, res) => {
    res.json({
        code: '200',
        msg: '已添加'
    })
}
module.exports = {
    userlist,
    deleteUser,
    xouser,
    tianser,
}