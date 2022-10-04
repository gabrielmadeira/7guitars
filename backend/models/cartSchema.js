const mongoose = require('mongoose');

const schema = mongoose.Schema({
  owner: String,
  guitars:[String]
});
module.exports = mongoose.model('Cart', schema);
