const http = require("http");
const qs = require("querystring")

//创建服务器
    const server = http.createServer((request,response) =>{
        console.log(request.url);

          const re = qs.parse(request.url.split("?")[1])
          console.log(re);

        response.setHeader("Content-type", "text/html;charset=utf-8")
        response.end("<h2>如果响应成功</h2>")
    })


//启动服务
    server.listen(3000, (err)=>{
        if(!err)return console.log("服务器启动成功：http://localhost:3000");
    })    