////////////////////////////////////////////////
//Configure Routes
////////////////////////////////////////////////
var imageController = require('../controller/imageController.js');

module.exports = function (app, express) {
  
  app.get('/', imageController.serveRandomPic);
  app.get('/api/images/', imageController.serveRandomPic);
  
};