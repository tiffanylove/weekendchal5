var myApp = angular.module('myApp',[]);

myApp.controller('MovieController', function($http){
  console.log('controller');

   var vm = this;
   vm.test = 'Hello';
   vm.movies = [];







   vm.requestMovie = function(){
    //  MovieTracker.getMovies().then(function(data){
    $http({
      method: 'GET',
      url:'http://www.omdbapi.com/?s=<user search string>'
    }).then(function success(response){
      console.log('omdb response', response.data);
       vm.movieData = response.data;
       vm.movieData.push(vm.movies);
     });
   };
});
