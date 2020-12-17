const express = require("express")
const app = express()
app.use(express.static('./public'))
app.use(express.urlencoded({ extended: true }))

app.get('/test', (req, res)=>{
    setTimeout(()=>{
        res.send("响应成功")
    }, 1000)
    console.log(req.query);
})

app.post("/test", (req, res)=>{
    const arr = [{name:'yy', age: 18}, {name:'ll', age:19}]
    res.send(arr)
    console.log(req.body);
})

app.listen(3000, err =>{
    if(!err) return console.log('服务器启动成功：http://localhost:3000');
})