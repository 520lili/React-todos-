const {Schema, model} =require("mongoose");

const citiesSchema = new Schema({
    province: String,
    city: String,
    county: String,
    name: String,
    level: Number
})

module.exports = model('cities', citiesSchema);
