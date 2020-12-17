const fs = require("fs")

fs.readFile('./hello.txt', (err, data) => {
    // 错误优先机制
    if(err) console.log(err)
    //本身会打印buffer类的进制数，使用toString来转换为文字
    console.log(data.toString());
})