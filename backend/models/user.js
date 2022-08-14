const mongoose = require("mongoose")

const schema = mongoose.Schema({
    name:String,
    id:String,
    email:String,
    hash:String,
    isAdmin:Boolean
})
module.exports = mongoose.model("User",schema)