
var myApp = angular.module('movieApp', ['ngRoute']);

// Angular config
//routeProvider for client side
myApp.config(['$routeProvider', function($routeProvider) {


 $routeProvider
   .when('/search', {
     templateUrl: 'views/search.html',
     controller: 'omdbController',
     controllerAs: 'vm'
   })
   .when('/favorites', {
     templateUrl: 'views/favorites.html',
     controller: 'favoritesController',
     controllerAs: 'vm'
   })
   .otherwise({
     template: '<h2>404 error!</h2>'
   });
}]);
