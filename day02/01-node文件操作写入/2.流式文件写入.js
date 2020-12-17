const fs = require("fs");

//创建写入流（在流创建出来的时候，流就开启了）
const ws = fs.createWriteStream("./text.txt", {
    start: 5 //写入开始的位置(距离开始的位置5个字节)
})

//开启写入流k
ws.on("open", ()=>{
    console.log("写入流开启");
})
//关闭写入流
ws.on("close", ()=>{
    console.log("写入流关闭");
})

ws.write("踢我？？？")
ws.write("写下鞋")
ws.write("写下鞋")

ws.end()