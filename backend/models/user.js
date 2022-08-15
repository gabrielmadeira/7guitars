const user = require('../models/userSchema');
const bcrypt = require('bcryptjs');

module.exports = class User {
  static async login(req, res) {
    await user.findOne({ email: req.body.email }).then((findUser) => {
      if (findUser) {
        bcrypt.compare(req.body.password, findUser.hash).then((check) => {
          if (check) {
            console.log(findUser.name);
            console.log(findUser.isAdmin);
            req.session.loggedIn = true;
            req.session.name = findUser.name;
            req.session.admin = findUser.isAdmin;
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
          id: req.body.id,
          email: req.body.email,
          cpf: req.body.cpf,
          hash: hashedPassword,
          isAdmin: req.body.admin,
        });
        await newUser.save();
        res.send(true);
      });
    }
  }
};
