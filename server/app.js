//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var favorite = require('./modules/favorites.js');

//uses
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/moviedb');

mongoose.connection.on('connected', function() {
  console.log('Connected to DB');
});

mongoose.connection.on('error', function() {
  console.log('Not connected to DB');
});

// app.use('/movies', movies);
app.use('/favorites', favorite);


//spin up server
app.listen(4005, function(){
  console.log('server up on 4005');
});
//base url
app.get('/', function(req,res){
  res.sendFile(path.resolve('public/views/index.html'));
});
