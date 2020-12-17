const express = require("express")

const app = express()

app.use(express.static("public"))

app.listen(5000, err=>{
    if(!err) return console.log("启动服务：http://localhost:5000");
})