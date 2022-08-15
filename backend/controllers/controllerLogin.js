const user = require("../models/user")

exports.login = async (req, res) => {
    user.login(req,res)
}
exports.isAdmin = async (req, res,next) => {
    if(req.session.admin){
        next()
    }
    else{
        res.send(false)
    }
}


exports.registerUser = async (req, res) => {
    user.register(req,res)
}









