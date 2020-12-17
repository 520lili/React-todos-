;(async () => {
	// 建议: 先连接数据库,数据库连接成功了,再去开启服务器
	const db = require('./db')
	await db
	const express = require('express')
	//引入解析cookie第三方包
	const cookieParser = require('cookie-parser')
	const LGRouter = require("./routers/LGRouter")
	const uiRouter = require('./routers/uiRouter')
  
	const app = express()
	// 由于使用中间件express.static可以快速返回静态资源
	app.use(express.static('public'))
	// 解析post请求的数据,并且添加到body身上
	app.use(express.urlencoded({ extended: true }))
  // 注意: 因为router写的路由中,要获取post请求的数据,所以使用router这个中间件,需要方法在解析post请求的数据后面
	app.use(cookieParser())
	app.use(LGRouter)
	app.use(uiRouter)

	// 配置ejs
	// 告诉node,当前使用的是ejs这个模板引擎
	app.set('view engine', 'ejs')
	// 告诉node，对应的模板在哪里
	app.set('views', './views')
	

	app.listen(5000, err =>{
		if(!err) console.log("服务器启动成功: http://localhost:5000");
	})
  })()
  