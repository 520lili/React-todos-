const fs = require("fs");

const rs = fs.createReadStream('./041.mp3');

const ws = fs.createWriteStream('./042.mp3')

rs.on('open', ()=>{
    console.log("我open了");
})

rs.on('close', ()=>{
    console.log("我close了");
})

rs.on('data', (data) =>{
    ws.write(data)
    console.log(data);
})

ws.on('open', ()=>{
    console.log("我open了");
})

ws.on('close', ()=>{
    console.log("我close了");
})
