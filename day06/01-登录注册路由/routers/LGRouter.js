const express = require("express")
const router = express.Router()
//创建userInfo约束模块
const userInfo = require('../userInfo/index');

//注册页面
router.post('/register', async (req, res) => {
    // 1.获取数据
    const { email, psw, username } = req.body;
    //2.判断数据是否注册
    const EmailRouter = await userInfo.findOne({
        email,
    });
    if(EmailRouter){
        if(EmailRouter.email === email){
            res.send("邮箱已经注册了")
        }
    }
    await userInfo.create({
        email,
        psw,
        username
    });
    res.redirect('http://localhost:5000/login.html')
    
});
//登录页面
router.post('/login', async (req, res) => {
    let {email, psw } = req.body;
    // 去数据库中查询,看是否有这个账户
    const ishasUse = await userInfo.findOne({ email, psw })
    if (ishasUse) {
        res.cookie('username', user.username, {maxAge: 1000 * 60 * 60 * 24})
        res.redirect("http://localhost:5000/userCenter")
    } else {
        //登录失败
        res.send('邮箱或密码错误,请重新登录');
    }
});

module.exports = router