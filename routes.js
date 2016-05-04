angular.module('omdbApp')
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'directives/search.html',
        controller: 'OmdbController'
      })
      .when('/another', {
        templateUrl: 'directives/movies.html',
        controller: 'OmdbController'
      })
});
