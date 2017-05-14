var myApp = angular.module('myApp',[]);

myApp.controller('MovieController', function($http){    //need to pass into the function MovieTracker 
  console.log('controller');

   var vm = this;
   vm.test = 'Hello';
   vm.assignments = [];



});
