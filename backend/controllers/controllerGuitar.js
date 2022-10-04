const guitar = require("../models/guitar")

exports.getAllGuitars = async (req, res) => {
    guitar.getAllGuitars(req,res)
}

exports.registerGuitar = async (req, res) => {
    guitar.registerGuitar(req,res)
}
exports.deleteGuitar = async (req, res) => {
    guitar.deleteGuitar(req,res)
}
exports.myGuitars = async (req, res) => {
    guitar.myGuitars(req,res)
}

exports.findGuitarsbyidList = async (req, res) => {
    guitar.findGuitarsbyidList(req,res)
}








