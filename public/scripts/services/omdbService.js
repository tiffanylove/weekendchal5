myApp.service('searchService', ['$http', function($http){
  var vm = this;

  vm.searchResult = { details: [] };

  //call to OMDB
  vm.search = function(searchText) {
    console.log('Hit the search function in the service!');
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + searchText
    }).then(function(response) {
      console.log(response);
      vm.searchResult.details = response.data.Search;
    });
  };
}]);
