const express = require('express');
const { resolve } = require('path');

const mongoose = require('mongoose');
require('./db');

const useSchema = require('./userInfo');
//插入约束
const userInfo = mongoose.model('userInfo', useSchema);

//注册一个服务
const app = express();

//注册接口
app.get('/register', async (req, res) => {
	//console.log(req.query);
	//1 获取用户数据
	const { user, pass } = req.query;
	console.log(user, pass);

	//2.判断是否已经注册
	const isHasUser = await userInfo.findOne({
		user
	});
	console.log(isHasUser);
	if (isHasUser) {
		if (isHasUser.user === user) {
			res.send('用户名被注册');
			return;
		}
	}
	//3.保存数据库
	const saveResult = await userInfo.create({
		user,
		pass
	});
	console.log(saveResult);

	//4.返回响应
	res.sendFile(resolve(__dirname, './login.html'));
});

//登录接口
app.get("/login", async (req, res) => {
    // 1.获取用户的数据
    // 2.判断是否存在当前用户名
    // 3.判断密码是否正确
    // 4.返回成功相应

    // 1. 获取用户的数据
    console.log(req.query);
    const {
        user,
        pass
    } = req.query;

    //2.判断用户名是否存在
    const isHasUser = await userInfo.findOne({
        user
    });
    console.log(isHasUser);
    if (!isHasUser) return res.send("用户名不存在");

    //3.判断密码是否正确
    if(isHasUser.pass === pass){
        res.send("登录成功")
    } else {
        res.send("密码错误")
    }
})

app.get('/register.html', async (req, res) => {
	res.sendFile(resolve(__dirname, './register.html'));
});
app.get('/login.html', async (req, res) => {
	res.sendFile(resolve(__dirname, './login.html'));
});

//启动服务
app.listen(3000, (err) => {
	if (err) {
		console.log('服务器启动失败' + err);
		return;
	}
	console.log('服务器启动成功 http://127.0.0.1:3000');
});
