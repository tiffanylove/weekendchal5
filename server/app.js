//requires
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var mongo = require('./modules/mongoConnect.js');
var assignments = require('./modules/omdbRouter.js');

//uses
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static('public'));

// app.use('/movies', movies);

//spin up server
app.listen(4005, function(){
  console.log('server up on 4005');
});
//base url
app.get('/', function(req,res){
  res.sendFile(path.resolve('public/views/index.html'));
});
