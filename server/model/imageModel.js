////////////////////////////////////////////////
//Image Model
////////////////////////////////////////////////
var mongoose = require('mongoose');

module.exports = mongoose.model('Image', 
  new mongoose.Schema({
    format: String,
    width: Number,
    height: Number,
    filename: String,
    id: Number,
    author: String,
    author_url: String,
    post_url: String
  }, { collection : 'images' }));