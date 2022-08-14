const part = require("../models/partSchema")

module.exports = class Part {
    static async registerPart(req,res){
        const newPart = new part({
            id:String,
            name:req.body.name,
            quantity:req.body.quantity,
            section:req.body.type,
            price:req.body.price,
            imageURL:req.body.image,
            dependency:req.body.dependency
    
       })
       await newPart.save()
       res.send(newPart)
    }
    static async getPartofType(req,res){
        const findUser = await part.find({ type: req.query.type})
        res.send(findUser)
    }

}