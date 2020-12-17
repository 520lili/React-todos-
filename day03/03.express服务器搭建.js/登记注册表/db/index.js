const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/web0910", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

mongoose.connection.once("open", (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log("MongoDB连接成功")
})