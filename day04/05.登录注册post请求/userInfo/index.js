//封装约束
const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    user:String,
    pass:String
}) 

module.exports = userSchema;