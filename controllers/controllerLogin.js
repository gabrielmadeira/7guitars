const user = require("../models/user")

exports.getUser = async (req, res) => {
    console.log(req.params)
    const findUser = await user.findOne({ _id: req.query.id })
    console.log("test")
    console.log(findUser)
    res.send(findUser)
}

exports.sendUser = async (req, res) => {
    console.log(req.body.name)
    console.log(req.body.id)
    console.log(req.body.email)
    console.log(req.body.hash)
   const newUser = new user({
        name:req.body.name,
        id:req.body.id,
        email:req.body.email,
        hash:req.body.hash
   })
   await newUser.save()
   console.log("test")
   console.log(newUser)
   res.send(newUser)
}






    



