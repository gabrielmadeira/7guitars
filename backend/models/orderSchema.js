const mongoose = require('mongoose');

const schema = mongoose.Schema({
  recipient: String,
  guitars:[String],
  address:String
});
module.exports = mongoose.model('Order', schema);
