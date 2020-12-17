const express = require('express');
const app = express();
//引入静态资源
app.use(express.static('./public'));
//引入中间件
// app.use(express.urlencoded({ extended: true }));
//get请求
app.get('/test', (req, res) => {
	setTimeout(()=>{
		res.send('响应成功');
		console.log(req.query);
	}, 2000)
}); 
//post请求
// app.post('/test', (req, res) => {
// 	const arr = [ { name: 'huang', age: 18 }, { name: 'xiao', age: 13 } ];
// 	res.send(arr);
// 	console.log(req.body);
// });
//启动服务
app.listen(5000, err=>{
    if(!err) return console.log("服务器启动成功：http://localhost:5000");
})