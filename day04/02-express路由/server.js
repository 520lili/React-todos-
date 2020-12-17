const express = require("express")

//注册事件
const app = express()
//禁止在响应头中发送 x-powered-by 这个消息
app.disable("x-powered-by")

//监听get请求，第一个参数是请求的路径
app.get("/", (req,res)=>{
    console.log(req.query);//获取get请求的查询字符串的数据
    res.send("服务器响应成功")
})
//监听post请求
// 接收路由参数
// 写在路径后面的参数,就是所谓的路由参数
// 路由参数一般都是一些数字.表示分页(在浏览器输入1/10,获取对应:page/:pageSize的参数),id之类的
// 定义路由的时候,要配置路由参数: /:参数名
// 如果没有问号,表示这个参数必须写, 有问号就可以不写
// app.get("/test/:page/:pageSize", (req,res)=>{
//     console.log(req.params);
//     res.send("服务器响应的数据")
// })

//获取请求头中的信息
app.get("/test", (req, res)=>{
    console.log(req.get("host"));
    console.log(req.get("user-agent"));
    console.log(req.get("Upgrade-Insecure-Requests"));
    console.log(req.get("Accept"));
    res.send("/test响应-获取请求头的信息")
})

//响应对象常用的属性和方法
app.get("/test/a", (req,res)=>{
    // download方法可以下载任何文件,可以写相对路径,也可以写绝对路径
    // res.download("./music.mp3")
    // res.download("./队列.jpg")
    // res.download(__dirname + '/防盗链.txt')

    //sendFile
    // res.sendFile(__dirname + "/music.mp3")
    // res.sendFile(__dirname + "/队列.jpg")
    // res.sendFile(__dirname + "/防盗链.txt")
    // res.sendFile(__dirname + "/demo")

    //重定向
    // res.redirect('http://www.baidu.com')

    //操作响应头
    // console.log(res.get('location'))  //显示所有请求头
    // res.set('abc', 123) 
    // res.set('content-length', 12) //没有反应
    res.send("响应")
})

app.listen(3000, err=>{
    if(!err) return console.log("服务器启动成功: http://localhost:3000");
})