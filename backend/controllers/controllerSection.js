const section= require("../models/section")

exports.getSections = async(req,res)=>{
    section.getSections(req,res)
}

exports.registerSection = async(req,res)=>{
    section.registerSection(req,res)
}