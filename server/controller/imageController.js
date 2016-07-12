////////////////////////////////////////////////
//Image Controller
////////////////////////////////////////////////
var Q = require('q');
var Image = require('../model/imageModel.js');
var findImage = Q.nbind(Image.findOne, Image);
var findAllImages = Q.nbind(Image.find, Image);

module.exports = {
  serveRandomPic: function (req, res, next) {
    var randomNum = Math.floor(Math.random() * 1084) + 1;
    
    findImage({id: randomNum}).then(function (image){
      res.json(image);
    }).catch(function(err) {
        console.log(err);
    });
  },

  serveGrayScalePic: function (req, res, next) {

  }

}