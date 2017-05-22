
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//OMDB schema of favorites

var FavoriteSchema = new Schema({
  Poster: String,
  Title: String,
  Type: String,
  Year: String,
  imdbID: String
});

var Favorite = mongoose.model('Favorite', FavoriteSchema);

module.exports = Favorite;
