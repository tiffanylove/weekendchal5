app.service('favoriteService', ['$http', function($http){
  var vm = this;

  vm.favorite = { list:[] };

  vm.getFavorites = function() {
    $http({
      method: 'GET',
      url: '/favorites'
    }).then(function(response) {
      vm.favorite.list = response.data;
    });
  };// end getFavorites

  vm.getFavorites();

  // http calls
  vm.saveFavorite = function(movie) {
    console.log('Movie to save:', movie);
    $http({
      method: 'POST',
      url: '/favorites',
      data: movie
    }).then(function(response) {
      console.log(response);
      vm.getFavorites();
    });
  };// end save


  vm.removeFavorite = function(movieId) {
    console.log('Movie id to remove:', movieId);
    $http({
      method: 'DELETE',
      url: '/favorites',
      params: { id: movieId }
    }).then(function(response) {
      console.log(response);
      vm.getFavorites();
    });
  };
}]);//end remove
