const express =require("express") 

//引入mongoose
const mongoose = require("mongoose");

//引入数据库
require("./db");

//引入约束userSchema
const userSchema = require("./userInfo")

//创建一个userInfo集合模块的约束
const userInfo = mongoose.model("userInfo", userSchema)

//注册一个服务
const app = express();

//中间件：处理post的请求体 挂载在req对象的body属性上
app.use(express.urlencoded({
    extended: true
}))
app.use(express.static("./public"))

//注册接口
app.post("/register", async (req, res)=>{
   //1.获取用户数据
   const {
       user,
       pass
   } = req.body;
  

   //2.判断是否已经注册
   const inHasUser = await userInfo.findOne({
       user
   });
   if(inHasUser){
       if(inHasUser.user === user){
           res.send("用户名被注册")
           return;
       }
   }
   console.log(pass,'pass')
   //3.保存到数据库
   const saveResult = await userInfo.create({
       user,
       pass
   })
   console.log(saveResult,'saveResult');

   //4.返回响应
    //注册成功后直接跳转登录页面
   res.redirect("http://localhost:3000/login.html")
})

// 登录界面
app.post("/login", async (req, res)=>{
    //1.获取数据
    const {
        user,
        pass
    } = req.body
    console.log(user,pass);

    //2.判断用户是否正确
    const inHasUser = await userInfo.findOne({
        user,
    })
    if(!inHasUser)return res.send("用户名不存在")

    //3.判断密码是否正确
    if(inHasUser.pass === pass){
        res.send("登陆成功")
    } else{
        res.send("密码错误")
    }
})

//启动服务
app.listen(3000, err=>{
    if(!err) return console.log("服务启动成功：http://localhost:3000");
})
