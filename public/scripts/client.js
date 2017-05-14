var myApp = angular.module('myApp',[]);

myApp.controller('MovieController', function($http, MovieTracker){
  console.log('controller');

   var vm = this;
   vm.test = 'Hello';
   vm.movies = [];

   vm.getMovies = function(){
     MovieTracker.getMovies().then(function(data){
       vm.movies = data;
     });
   };



});
