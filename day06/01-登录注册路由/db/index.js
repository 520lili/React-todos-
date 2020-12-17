const mongoose = require('mongoose')

module.exports = new Promise((resolve, reject) => {

	mongoose.connect('mongodb://localhost:27017/users', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true
	});

	mongoose.connection.once('open', () => {
		console.log('数据库连接成功')
		resolve()
	})
});


