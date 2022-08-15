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
        await part.find({ type: req.query.type }).then((parts) => {
            console.log(parts[0].section)
            var returnJson = " {Nome:" + parts[0].section + ", Variacoes:[";
            parts.forEach(part => {
                returnJson += "{nome:" + part.name + ","
                returnJson += "preco:" + part.price + ","
                returnJson += "quantidade:"+ part.quantity+","
                returnJson += "descricao:" + part.description + ",},"
            });
            returnJson += "],}"
            res.send(returnJson)
        }
        )
    }

}