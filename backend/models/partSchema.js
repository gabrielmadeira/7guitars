const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:String,
    quantity:Number, 
    section:String,
    price:String,
    description:String
})
module.exports = mongoose.model("Part",schema)