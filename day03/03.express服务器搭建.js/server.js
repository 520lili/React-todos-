
const express = require("express")

//创建一个应用对象
const app = express()

app.get("/",(request, response) =>{
    console.log(request.query);
    response.send("<h2>响应成功</h2>")
})

app.listen(3000, (err)=>{
    if(!err) return console.log("服务器启动成功：http://localhost:3000");
})