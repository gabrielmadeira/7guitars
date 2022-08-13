const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:String,
    type:String,
    description:String,
    price:String
})
module.exports = mongoose.model("Part",schema)