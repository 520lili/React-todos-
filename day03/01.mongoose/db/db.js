const mongoose = require("mongoose")

module.exports = new Promise ((request, response) =>{
    mongoose.connect("mongodb://127.0.0.1:27017/web0910", {})
    //连接服务
    mongoose.connection.once("open", ()=>{
        console.log("mongodb启动连接成功")
        request()
    })
})