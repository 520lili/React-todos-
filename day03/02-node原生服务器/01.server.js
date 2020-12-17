const http = require("http")

const server = http.createServer((request, response) =>{
    console.log("xxx");
})

server.listen(3000,(err)=>{
    if(err) return console.log(err);
    console.log("启动服务器成功：localhost:3000");
})
