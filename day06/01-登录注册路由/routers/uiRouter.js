const express = require("express")
const router = express.Router()

const path = require('path')
const cookieParser = require('cookie-parser')

//返回登录页面
router.get('/login', (req, res) =>{
    const url = path.join(__dirname, '../public/login.html')
    res.sendFile(url)
})
//返回注册页面
router.get('/register', (req, res)=>{
    const url = path.join(__dirname, '../public/register.html')
    res.sendFile(url)
})


//返回个人中心页面
router.get('/userCenter', (req, res)=>{
    const { username } = req.cookies
    //如果要返回一个ejs模板,应该使用res.render方法
  // render的第一个参数,就是ejs模板的路径.可以直接写文件名, 第二个参数是传入到ejs的数据
  //判断有没有cookie传上来,如果有,表示登录过了.就直接展示个人中心.如果没有就跳到login页面
  if (username) {
      res.render('userCenter', { username })
  } else {
      res.redirect('http://localhost:5000/login')
  } 

})

module.exports = router