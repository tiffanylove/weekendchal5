
myApp.controller('omdbController', ['omdbService', 'favoritesService', function(omdbService, favoritesService) {
  var vm = this;
  vm.search = omdbService.search;
  vm.searchResult = omdbService.omdbResult;
  vm.saveFavorite = favoriteService.saveFavorite;
}]);
