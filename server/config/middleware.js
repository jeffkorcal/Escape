////////////////////////////////////////////////
//Configure Middleware
////////////////////////////////////////////////
var bodyParser = require('body-Parser');

module.exports = function(app, express){

  // Parse JSON (uniform resource locators)
  app.use(bodyParser.json());

  // Parse Forms (signup/login)
  app.use(bodyParser.urlencoded({ extended: true }));

  // Serve Static Assets
  app.use(express.static(__dirname + '/../../client'));

  //TODO: Need to add sessions
};
