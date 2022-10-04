const mongoose = require('mongoose');

const schema = mongoose.Schema({
  name:String,
  body: Number,
  neck:Number,
  strings: Number,
  headstock: Number,
  knobs: Number,
  pickups: Number,
  creator:String,
  price:Number
});
module.exports = mongoose.model('Guitar', schema);