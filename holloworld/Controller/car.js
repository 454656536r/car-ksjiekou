const path = require('path');
const fs = require('fs');
// const http = require('http');

const read = (req, res) => {
  fs.readFile(path.join(__dirname, "array.json"), "utf-8", (err, data) => {
    if (err) {
      res.end(500);
    } else {
      res.end(data);
    }
  });
};

// // 删除
const deleteUser = (req, res) => {
  const id = req.url.split('?')[1].split('=')[1]
  console.log(id);
  let data = JSON.parse(deleat())
  let index = data.data.findIndex((item) => item.id == id)
  data.data.splice(index, 1)
  let dataStr = JSON.stringify(data)
  fs.writeFile(path.join(__dirname, "array.json"), dataStr, (err) => {
    if (err != null) {
      res.statusCode = 404
      res.end("删除失败")
    } else {
      res.statusCode = 200
      res.end(JSON.stringify({ "msg": "删除成功" }))
    }
  })
}
// // 修改
// const modify = (req, res) => {
//     res.json({
//         code: '200',
//         msg: '已修改'
//     })
// }

// 详情
const detail = (req, res) => {
  const id = req.url.split('?')[1].split('=')[1]
  console.log(id);
  let data = JSON.parse(deleat())
console.log(data);
  let datale = data.data.find((item) => item.id == id)
  if (!datale) {
    res.statusCode == 200;
    res.end(JSON.stringify({ msg: "未找到数据" }))
    return
  }
  res.statusCode == 200;
  res.end(JSON.stringify(datale))
  res.json({
    code: 200,
    msg: "成功查询"
  })
}

// 添加
const increase = (req, res) => {
  let car = req.body
  fs.readFile(path.join(__dirname, "array.json"), 'utf-8', function (err, data) {
    if (err) {
      res.statusCode = 500;
      res.end('读取失败')
    } else {
      let books = JSON.parse(data)
      console.log(books);
      books.data.push(car)
      fs.writeFile(path.join(__dirname, 'array.json'), JSON.stringify(books), 'utf-8', function (err) {
        if (err) {
          res.statusCode = 500;
          res.end("写入失败")
        } else {
          res.statusCode = 200;
          res.end("添加成功")
        }
      })
    }
  })

}
function deleat() {
  let data = fs.readFileSync(path.join(__dirname, 'array.json'), 'utf-8')
  //   console.log(JSON.parse(data).list);
  return data
}
module.exports = {
  read,
  deleteUser,
  // modify,
  increase,
  detail
}