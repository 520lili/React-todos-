const fs = require("fs")

const rs = fs.createReadStream('./041.mp3')
const ws = fs.createWriteStream('./043.mp3')

//监听读写
rs.on("open", ()=>{
    console.log("我open");
})
rs.on("close", ()=>{
    console.log("我close");
})
rs.on("data", (data) =>{
    console.log(data);
})
rs.pipe(ws)