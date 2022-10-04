const cart = require("../models/cartSchema")
module.exports = class Guitar {
    //espera id da guitara
    static async getCart(req, res) {
        await cart.findOne({ owner: req.session.email }).then(async (cart) => {
            if (cart) {
                res.send(cart);
            } else {
                const newCart = new cart({
                    owner: req.session.email,
                    guitars: []
                })
                await newCart.save()
                res.send(newCart)
            }

        })
    }

    static async addToCart(req, res) {
        await cart.findOne({ owner: req.session.email }).then(async (cart) => {
            if (cart) {
                cart.guitar.push(req.body.guitar)
                await cart.save();
            } else {
                const newCart = new cart({
                    owner: req.session.email,
                    guitars: [req.body.guitar]
                })
                await newCart.save()
                res.send(newCart)
            }

        })
    }
    //espera id da guitara
    static async removeFromCart(req, res) {
        await cart.findOne({ owner: req.session.email }).then(async (cart) => {
            if (cart) {
                var index = cart.guitar.indexOf(req.body.id);
                if (index !== -1) {
                    cart.guitar.splice(index, 1);
                }
            } else {
                res.send(404)
            }

        })
    }

}