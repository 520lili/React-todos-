const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/users", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

mongoose.connection.once('open', err=>{
    if(err){
        console.log("err");
        return;
    }
    console.log("mongodb连接成功");
})