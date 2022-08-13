const mongoose = require("mongoose")

const schema = mongoose.Schema({
    id:String,
    name:String,
})
module.exports = mongoose.model("Section",schema)