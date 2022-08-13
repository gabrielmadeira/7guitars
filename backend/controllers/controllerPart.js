const part = require("../models/part")

exports.getPartofType = async (req, res) => {
    const findUser = await part.find({ type: req.query.type})
    res.send(findUser)
}

exports.registerPart = async (req, res) => {
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






    



