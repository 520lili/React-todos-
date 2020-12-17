const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/web0910', {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

//适用open的方式打开连接mongodb
mongoose.connection.once('open', (err) => {
	if (!err) return console.log('Mongdb启动成功');

	
});
const Scheam = mongoose.Schema;
	const webScheam = new Scheam({
		name: {
			type: String,
			unique: true,
			required: true
		},
		age: Number,
		sex: String,

		hobby: [ String ],
		createTime: {
			type: Date,
			default: Date.now
		}
	});

	//对集合传入约束
	const Student = mongoose.model('student', webScheam);

	new Student({
		name: '小新',
		age: 20,
		sex: '女',
		hobby: [ '看片', '撩妹', '听歌' ],
		createTime: Date.now()
	}).save((err)=>{
        if(err){
            console.log("初始化错误" + err);
            return;
        }
        console.log("初始化成功");
    })
	
