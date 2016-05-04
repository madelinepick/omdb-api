angular.module('omdbApp')
.controller('OmdbController', function($scope, $http, $log) {
  $scope.data = {};
  $scope.data.movieSearch = '';
  $scope.data.movies = [];
  $scope.data.show = true;
});
