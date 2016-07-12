////////////////////////////////////////////////
//Modules
////////////////////////////////////////////////
var express = require('express');
var mongoose = require('mongoose');

// declare server
var app = express();

////////////////////////////////////////////////
//Configure Middleware & Routes
////////////////////////////////////////////////
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

////////////////////////////////////////////////
//Database
////////////////////////////////////////////////
mongoose.connect('mongodb://localhost/escape');
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function() {
  console.log('database connected');
});

app.listen(8000, function() {
  console.log('listening on port 8000');
});

module.exports = app;


// Image Model
// var Image = mongoose.model('Image', 
//   new mongoose.Schema({
//     format: String,
//     width: Number,
//     height: Number,
//     filename: String,
//     id: Number,
//     author: String,
//     author_url:String,
//     post_url: String
//   }, { collection : 'images' }));

// Image.findOne({id: 0}, function(err, data) { 
//     if (err) {
//       console.log(err);
//     }
//     console.log(data.author_url);
//   });



//random image
//https://unsplash.it/800/600/?random

//specific image
//https://unsplash.it/800/600?image=0

//gray scale
//https://unsplash.it/g/800/600


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


// Image.find({}, function(err, data) { 
//     console.log(err, data, data.length);
//   });

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
