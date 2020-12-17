const mongoose = require("mongoose");

//连接mongodb数据库
mongoose.connect("mongodb://localhost:27017/web0910", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', (err)=>{
    if(err){
        console.log("err");
        return;
    }
    console.log("mongodb连接成功");
})