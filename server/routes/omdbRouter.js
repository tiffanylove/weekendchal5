
var express = require('express');
var router = express.Router();
var Favorite = require('../modules/favorites.js');



router.get('/', function(req, res) {
  Favorite.find({}, function(err, favorites) {
    if(err) {
      console.log('There was an error with the favorites find', err);
      res.sendStatus(500);
    } else {
      res.send(favorites);
    }
  });
});//end router.get

router.post('/', function(req, res) {
  var newMovieObject = req.body;
  console.log(newMovieObject);
  newMovie = new Favorite(newMovieObject);
  newMovie.save(function(err) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  });
});//end of router.post

router.delete('/', function(req, res) {
  var movieIdToDelete = req.query.id;
  Favorite.remove({ _id: movieIdToDelete }, function(err) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});//end delete

module.exports = router;











module.exports = router;
