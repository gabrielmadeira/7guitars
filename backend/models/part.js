const part = require("../models/partSchema")

module.exports = class Part {
    static async registerPart(req, res) {
        const newPart = new part({
            name: req.body.name,
            quantity: req.body.quantity,
            section: req.body.section,
            price: req.body.price,
            description: req.body.description
        })
        await newPart.save()
        res.send(newPart)
    }
    static async getPartofType(req, res) {
        await part.find({ section: req.query.section }).then((parts) => {
            console.log(req.query)
            console.log(parts[0].section)
            const body={
                Nome:req.query,
                Variacoes:[]
            }
            parts.forEach(part => {
                const variantions={
                    id:part._id,
                    text:part.name,
                    price:part.price,
                    quantity:part.quantity,
                    description:part.description
                }
                body.Variacoes.push(variantions)
            });
            res.json(body)
        }
        )
    }
    static async deletePart(req, res) {
        await part.deleteOne({ section: req.body.section ,name:req.body.name}).then((parts) => {
            res.status(204)
        }
        )
    }

}