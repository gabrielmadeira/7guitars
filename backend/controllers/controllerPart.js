const part = require("../models/part")

exports.getPartofType = async (req, res) => {
    part.getPartofType(req,res)
}

exports.registerPart = async (req, res) => {
    part.registerPart(req,res)

}
exports.deletePart = async (req, res) => {
    part.deletePart(req,res)

}
exports.updateQuantity = async (req, res) => {
    part.updateQuantity(req,res)

}






    



