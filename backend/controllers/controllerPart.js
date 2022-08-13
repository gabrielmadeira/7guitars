const part = require("../models/part")

exports.getPartofType = async (req, res) => {
    const findUser = await part.find({ type: req.query.type})
    res.send(findUser)
}

exports.registerPart = async (req, res) => {
   const newPart = new part({
        name:req.body.name,
        type:req.body.type,
        price:req.body.price
   })
   await newPart.save()
   res.send(newPart)
}






    



