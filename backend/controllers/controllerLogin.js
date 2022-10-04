const user = require("../models/user")

exports.login = async (req, res) => {
    user.login(req,res)
}
exports.isAdmin = async (req, res,next) => {
    console.log(req.session)
    if(req.session.admin){
        next()
    }
    else{
        res.send(false)
    }
}
exports.isLoggedIn = async (req, res,next) => {
    console.log(req.session)
    if(req.session.loggedIn){
        next()
    }
    else{
        res.send(false)
    }
}


exports.registerUser = async (req, res) => {
    user.register(req,res)
}
exports.allUsers = async (req, res) => {
    user.allUsers(req,res)
}









