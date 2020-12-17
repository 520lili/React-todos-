const express = require('express');
const app = express();

// 使用第三方的中间件
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true })); //entended扩展

//路由
app.post('/test', (req, res) => {
	console.log(req.abc);
	console.log(req.body);
	res.send('服务器响应的数据-post');
});

//启动服务
app.listen(3000, (err) => {
	if (!err) return console.log('服务器启动成功：http://localhost:3000');
});
