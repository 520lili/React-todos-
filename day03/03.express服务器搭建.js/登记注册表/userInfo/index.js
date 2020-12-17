//封装约束
const mongoose = require("mongoose");

const useSchema = new mongoose.Schema({
    user:String,
    pass:String,
})

module.exports = useSchema