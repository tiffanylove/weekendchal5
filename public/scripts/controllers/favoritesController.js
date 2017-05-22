app.controller('favoritesController', ['favoritesService', function(favoritesService) {
  console.log('In favoritesController');
  var vm = this;
  //connects to the view
  vm.favorite = favoriteService.favorites;
  vm.removeFavorite = favoriteService.removeFavorite;
}]);
