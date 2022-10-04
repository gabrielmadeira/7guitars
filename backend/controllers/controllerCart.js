const cart = require("../models/cart")

exports.getCart = async (req, res) => {
    cart.getCart(req,res)
}

exports.addToCart = async (req, res) => {
    cart.addToCart(req,res)
}


exports.removeFromCart = async (req, res) => {
    cart.removeFromCart(req,res)
}










