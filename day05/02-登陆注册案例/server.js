const express = require("express")
const mongoose = require("mongoose")
//引入数据库
require("./db")

const userSchema = require("./userInfo")
//创建userInfo模块
const userInfo = mongoose.model('userInfo', userSchema)

//注册一个服务
const app = express()
//创建一个中间件
app.use(express.urlencoded({
    extended: true
}))
//配置路由,获取静态页面
app.use(express.static("./public"))

//注册页面
app.post("/register", async(req, res)=>{
    // 1.获取数据
    const {
        email,
        psw,
        username
    }= req.body
    //2.判断数据是否注册
   const ishasUse = await userInfo.findOne({
        email
    });
    if(ishasUse){
        if(ishasUse.email === email){
            res.send("邮箱已注册")
        }
    }
    await userInfo.create({
        email,
        psw,
        username
    })
      res.redirect('http://localhost:5000/login.html')
})
//登录页面
app.post("/login", async(req, res)=>{
    const {
        username,
        email,
        psw
    }= req.body;
    //判断邮箱是否正确
    const ishasUse = await userInfo.findOne({
        email
    })
    if(!ishasUse) return res.send("邮箱不存在")

    //判断密码是否正确
    if(ishasUse.psw === psw){
        res.send("登录成功")
    }else{
        res.send("登录失败")
    }
})

app.listen(5000, err=>{
    if(!err) return console.log("服务器启动成功：http://localhost:5000");
})