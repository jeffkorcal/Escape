////////////////////////////////////////////////
//Modules
////////////////////////////////////////////////
var express = require('express');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/escape');

var db = mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  // Create your schemas and models here.
});



app.listen(8000);

module.exports = app;