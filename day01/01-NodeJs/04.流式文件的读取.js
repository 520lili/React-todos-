const fs = require('fs');

//创建读取流
const rs = fs.createReadStream("./hello.txt")

//监听读取流开启
rs.on('open', () => {
    console.log('读取流开始');
})

rs.on('close', () =>{
    console.log('读取流结束');
})

// rs.on('data', (a, b) =>{
//     console.log(a, b);
// })
rs.on('data', (data) =>{
    console.log(data);
})