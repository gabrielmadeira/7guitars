const order = require("../models/orderSchema")
module.exports = class Guitar {
    //retorna os pedidos
    static async getOrders(req, res) {
        await order.find().then(async (orders) => {
            if (orders) {
                res.send(orders)
            }

        })
    }
    //retorna os pedidos do usuario
    static async myOrders(req, res) {
        await order.find({recipient: req.session.email}).then(async (orders) => {
            if (orders) {
                res.send(orders)
            }

        })
    }
    //adiciona pedido espera lista de ids de guitaras

    static async order(req, res) {
        const newOrder = new order({
            recipient: req.session.name,
            guitars: req.body.guitars,
            adress:req.session.adress
        })
        await newOrder.save()
        res.send(newOrder)
    }
    //espera id do pedido
    static async concludeOrder(req, res) {
        await order.deleteOne({ _id: req.body.id}).then((order) => {
            res.status(204)
        })
    }

    static async removeOrder(req, res) {
        await order.findOne({ _id: req.body.id}).then(async (myOrder) => {
            if(req.session.email==myOrder.recipient){
                await order.deleteOne({ _id: req.body.id}).then((toDelete) => {
                    res.status(204)
                })
            }
        })
    }

}