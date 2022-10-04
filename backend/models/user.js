const user = require('../models/userSchema');
const bcrypt = require('bcryptjs');

module.exports = class User {
  static async login(req, res) {
    await user.findOne({ email: req.body.email }).then((findUser) => {
      if (findUser) {
        bcrypt.compare(req.body.password, findUser.hash).then((check) => {
          if (check) {
            req.session.loggedIn = true;
            req.session.name = findUser.name;
            req.session.admin = findUser.isAdmin;
            req.session.email = findUser.email;
            req.session.adress = findUser.adress;
          }
          res.send(check);
        });
      } else {
        res.send(false);
      }
    });
  }
  static async register(req, res) {
    const findUser = await user.findOne({ email: req.body.email });
    if (findUser) {
      res.send(false);
    } else {
      bcrypt.hash(req.body.password, 12).then(async (hashedPassword) => {
        const newUser = new user({
          name: req.body.name,
          cpf: req.body.cpf,
          email: req.body.email,
          hash: hashedPassword,
          adress:req.body.adress,
          isAdmin: req.body.admin,
        });
        await newUser.save();
        res.send(true);
      });
    }
  }
  static async allUsers(req,res){
    await user.find().then((users) => {
      
      res.json(users)
  })
  }
};
