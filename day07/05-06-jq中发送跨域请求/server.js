const express = require("express")
const app = express();
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res) => {
    let arr = [{ name: "xiaolang", age: 18 }, { name: "xiaohuang", age: 18 }]
    const arrStr = JSON.stringify(arr)
    
    // req.query ==> {callback: getData}
    const callback = req.query.callback

    res.send(callback+'(' + arrStr +')')// getData([{ name: 'zs', age: 18 }, { name: 'ls', age: 20 }])
})
app.post('/test', (req, res) => {
    let arr = [{ name: "xiaolang", age: 18 }, { name: "xiaohuang", age: 18 }]
    res.send(arr)
    console.log(req.body);
})

app.listen(5000, err => {
    if (!err) return console.log("服务器启动成功: http://localhost:5000");
})