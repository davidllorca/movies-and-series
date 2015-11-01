/**
 * Created by david on 10/18/15.
 */
angular.module("myMoviesSeriesApp").controller("moviesDetailsCtrl", ["$scope", "Movie", "ApiService",
    function ($scope, Movie, ApiService) {
        $scope.movie = Movie.data; // All data of movie
        $scope.imagePath = function (path) {

            return ApiService.getImagePath(150, path);
        };
    }]);