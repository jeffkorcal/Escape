var Q = require('q');
var Image = require('../model/imageModel.js');

var findImage = Q.nbind(Image.findOne, Image);

console.log('in image controller');
Image.findOne({id: 0}, function(err, data) { 
    if (err) {
      console.log(err);
    }
    console.log(data.id);
  });

module.exports = {
  randomPic: function (req, res, next) {
    console.log('maybe');
  }

}