/**
 * Created by david on 9/25/15.
 */

angular.module("myMoviesSeriesApp").controller("navigationCtrl", ["$scope", "$routeSegment", function ($scope, $routeSegment) {

    $scope.pathMovies = function () {

        return $routeSegment.startsWith("movies");
    };

    $scope.pathSeries = function () {

        return $routeSegment.startsWith("series");
    };

}]);