const mongoose = require("mongoose")
//创建约束
const userSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
        required: true
    },
    psw:{
        type: String,
        required: true
        
    },
    username:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        default: Date.now()
    },
    enable_flag: {
        type:String,
        default:"Y"
    }
})
const userInfo = mongoose.model('userInfo', userSchema);

module.exports = userInfo
