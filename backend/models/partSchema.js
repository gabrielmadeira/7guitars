const mongoose = require("mongoose")

const schema = mongoose.Schema({
    id:String,
    name:String,
    quantity:Number, 
    section:String,
    price:String,
    imageURL:String,
    dependency:[Number]
})
module.exports = mongoose.model("Part",schema)