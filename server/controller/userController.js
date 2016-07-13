////////////////////////////////////////////////
//User Controller
////////////////////////////////////////////////
var Q = require('q');
var User = require('../model/userModel.js');
var findUser = Q.nbind(User.findOne, User);
var createUser = Q.nbind(User.create, User);

module.exports = {

  signin: function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;

    findUser({email: email})
      .then(function (user) {
        if(!email) {
          next(new Error('User does not exist'));
        } else {
          return user.comparePasswords(password)
            .then(function (foundUser) {
              if (foundUser) {
                //TODO: need to perform authorization and sessions
                res.json('success');
              } else {
                return next(new Error('No User'));
              }
            });
        }
      })
      .fail(function (err) {
        next(err);
      });
  },

  signup: function (req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;

    findUser({email: email})
      .then(function(user) {
        if (user) {
          next(new Error('User already exists!!!'))
        } else {
          return createUser({
            name: name,
            email: email,
            password: password
          });
        }
      })
      .then(function (user) {
        //TODO: need to perform authorization and sessions
        res.json('success');
      })
      .fail(function(err) {
        next(err);
      });
  } 

}