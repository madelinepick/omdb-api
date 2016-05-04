angular.module('omdbApp')
.directive('movies', ['$http', '$log', function($http,$log) {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'directives/movies/movies.html',
    scope: {
      movies: '=',
      show: '='
    },
    link: function(scope, element, attrs, fn){
      scope.singlePage = function(movieID){
        scope.show = false;
        var searchUrl = 'http://www.omdbapi.com/?i='+movieID+'&plot=short&r=json';
        $http.get(searchUrl).then(function(results){
          scope.singleMovie = results.data;
          scope.singleMovie.correctSrc = 'https' + scope.singleMovie.Poster.substring(4);
        })
      }

    }
  };
}]);
