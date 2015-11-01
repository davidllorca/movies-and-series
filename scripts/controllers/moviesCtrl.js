/**
 * Created by david on 9/25/15.
 */

angular.module("myMoviesSeriesApp").controller("moviesCtrl", ["$scope", "$routeSegment", function($scope, $routeSegment){

    $scope.pathComingSoon = function(){
        return $routeSegment.startsWith("movies.comingsoon");
    };

    $scope.pathMovieListings = function(){
        return $routeSegment.startsWith("movies.movielistings");
    };
}]);