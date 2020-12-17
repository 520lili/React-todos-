const mongoose = require("mongoose");

module.exports = new Promise((resolve,reject)=>{
    mongoose.connect("mongodb://localhost:27017/day09",{
        useNewUrlParser: true, 
        useCreateIndex: true,
        useUnifiedTopology: true
    });

    mongoose.connection.once('open',(err)=>{
        if(!err){
            console.log("Mongdb数据库连接成功");
            resolve()
        }else{
            console.log(err);
            reject()
        }
    })

})