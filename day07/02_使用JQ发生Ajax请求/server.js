const express = require('express');
const app = express();
//引入静态资源
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));

app.get('/test', (req, res) => {
	res.send('响应成功');
	console.log(req.require);
});

app.post('/test', (req, res) => {
	const arr = [ { name: 'huang', age: 18 }, { name: 'xiao', age: 13 } ];
	res.send(arr);
	console.log(req.body);
});

app.listen(5000, err=>{
    if(!err) return console.log("服务器启动成功：http://localhost:5000");
})