const section = require("../models/sectionSchema")
module.exports = class Section {

    static async getSections(req,res){
        const sections = await section.find()
        res.send(sections)
    }

    static async registerSection(req,res){
        console.log(req.body.name)
        const newSection = new section({
            name:req.body.name
       })
       await newSection.save()
       res.send(newSection)
    }

}