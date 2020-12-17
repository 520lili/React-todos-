const mongoose = require("mongoose");
// 包装约束
const Schema = mongoose.Schema

const stuSchema = new Schema ({
    id: {
        type: String,
        unique:true,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    age: Number,
    sex: String,

    info: {
        type: Schema.Types.Mixed
    }    
})

const stuModel = mongoose.model("student", stuSchema)

module.exports = stuModel