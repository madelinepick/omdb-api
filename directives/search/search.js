angular.module('omdbApp')
.directive('search', ['$http', '$log', function($http,$log) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/search/search.html',
    scope: {
      moviesearch: '=',
      movies: '=',
      show: '='
    },
    link: function(scope, element, attrs, fn) {
      scope.submitSearch = function(){
        scope.show = true;
        scope.movies = [];
        var movieName = scope.moviesearch.split(' ').join('+');
        var movieUrl = 'https://www.omdbapi.com/?s='+ movieName;
        $http.get(movieUrl).then(function(results){
          results.data.Search.forEach(function(current){
            scope.movies.push(current);
          })
        });
      }
    }
  };
}]);
