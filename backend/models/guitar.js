const guitar = require("../models/guitarSchema")
const part = require("../models/part")
module.exports = class Guitar {
    static async registerGuitar(req, res) {
        idArray = [req.body.body, req.body.neck, req.body.strings, req.body.headstock, req.body.knobs, req.body.pickups]
        await part.getPricebyidList(idArray).then(async (price) => {
            const newguitar = new guitar({
                name:req.body.name,
                body: idArray[0],
                neck: idArray[1],
                strings: idArray[2],
                headstock: idArray[3],
                knobs: idArray[4],
                pickups: idArray[5],
                creator: req.body.email,
                price: price
            })
            await newguitar.save()
            res.send(newguitar)
        })
    }
    static async getAllGuitars(req, res) {
        await guitar.find().then((guitars) => {
            const body = {
                Guitars: []
            }
            guitars.forEach(guitar => {
                const cguitar = {
                    name:guitar.name,
                    body: guitar.body,
                    neck: guitar.neck,
                    strings: guitar.strings,
                    headstock: guitar.headstock,
                    knobs: guitar.knobs,
                    pickups: guitar.pickups,
                    creator: guitar.creator,
                    price: guitar.price
                }
                body.Guitars.push(cguitar)
            });
            res.json(body)
        }
        )
    }
    //espera id para deletar objeto
    static async deleteGuitar(req, res) {
        await guitar.deleteOne({ _id: req.body.id }).then((guitar) => {
            res.status(204)
        }
        )
    }
    static async myGuitars(req, res) {
        await guitar.find({ creator: req.session.email }).then((guitars) => {
            const body = {
                Guitars: []
            }
            guitars.forEach(guitar => {
                const cguitar = {
                    name:guitar.name,
                    body: guitar.body,
                    neck: guitar.neck,
                    strings: guitar.strings,
                    headstock: guitar.headstock,
                    knobs: guitar.knobs,
                    pickups: guitar.pickups,
                    creator: guitar.creator,
                    price: guitar.price
                }
                body.Guitars.push(cguitar)
            });
            res.json(body)
        }
        )
    }
    static async findGuitarsbyidList(req, res) {
        await guitar.find(req.body.list).then((guitars) => {
            const body = {
                Guitars: []
            }
            guitars.forEach(guitar => {
                const cguitar = {
                    name:guitar.name,
                    body: guitar.body,
                    neck: guitar.neck,
                    strings: guitar.strings,
                    headstock: guitar.headstock,
                    knobs: guitar.knobs,
                    pickups: guitar.pickups,
                    creator: guitar.creator,
                    price: guitar.price
                }
                body.Guitars.push(cguitar)
            });
            res.json(body)

        })
    }



}