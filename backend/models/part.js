const mongoose = require("mongoose")

const schema = mongoose.Schema({
    id:String,
    name:String,
    quantity:Integer, 
    section:String,
    price:String,
    imageURL:String,
    dependency:[Integer]
})
module.exports = mongoose.model("Part",schema)