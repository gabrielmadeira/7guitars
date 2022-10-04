const order = require("../models/order")

exports.getOrders = async (req, res) => {
    order.getOrders(req,res)
}

exports.concludeOrder = async (req, res) => {
    order.concludeOrder(req,res)
}

exports.order = async (req, res) => {
    order.order(req,res)
}

exports.myOrders = async (req, res) => {
    order.myOrders(req,res)
}


exports.removeOrder = async (req, res) => {
    order.removeOrder(req,res)
}










