const part = require("../models/part")

exports.getPartofType = async (req, res) => {
    part.getPartofType(req,res)
}

exports.registerPart = async (req, res) => {
    part.registerPart(req,res)

}






    



