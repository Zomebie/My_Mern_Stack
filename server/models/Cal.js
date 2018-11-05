const mongoose = require('mongoose');

const Cal = new mongoose.Schema({
  cal_res:Number
});

module.exports = mongoose.model('calculator', Cal);
