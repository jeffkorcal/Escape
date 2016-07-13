////////////////////////////////////////////////
//Configure Routes
////////////////////////////////////////////////
var imageController = require('../controller/imageController.js');
var userController = require('../controller/userController.js');

module.exports = function (app, express) {
  
  app.get('/', imageController.serveRandomPic);
  app.get('/api/images/', imageController.serveRandomPic);

  app.post('/api/user/signin/', userController.signin);
  app.post('/api/user/signup/', userController.signup);
  
};