////////////////////////////////////////////////
//Modules
////////////////////////////////////////////////

var images = require('../env/images.json');
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-Parser');
var request = require('request');
var fs = require('fs');

// declare server
var app = express();

////////////////////////////////////////////////
//Middleware
////////////////////////////////////////////////

// Parse JSON (uniform resource locators)
app.use(bodyParser.json());

// Parse Forms (signup/login)
app.use(bodyParser.urlencoded({ extended: true }));

// Serve Static Assets
app.use(express.static(__dirname + '/../client'));


app.listen(8000, function() {
  console.log('listening on port 8000');
});

module.exports = app;


// mongoose.connect('mongodb://localhost/escape');
// var db = mongoose.connection;
// db.on('error', console.error);
// db.once('open', function() {
//   // Create your schemas and models here.
// });

// var imageSchema = new mongoose.Schema({
//   format: String,
//   width: Number,
//   height: Number,
//   filename: String,
//   id: Number,
//   author: String,
//   author_url:String,
//   post_url: String
// });

// var Image = mongoose.model('Image', imageSchema);

// snippet to download json list from unsplash.it
// request('https://unsplash.it/list', function (err, res, body) {
//   if (!err && res.statusCode == 200) {
//     fs.writeFile('test.json', body, 'utf8', function (err) {
//       if (err) {
//         console.log(err);
//       }
//       return ('transfered')
//     });
//   }
// });
