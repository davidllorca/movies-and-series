angular.module("myMoviesSeriesApp")
    .controller("moviesMovieListingsCtrl",
    ["$scope", "$filter", "Movies", "$location",
        function ($scope, $filter, Movies, $location) {

            $scope.movies = $filter("orderBy")(Movies.data.results, "release_date");// Filter in CONTROLLER

            $scope.seeDetails = function (id) {
                $location.path("/movies/details").search({
                    idMovie: id
                });
            };
        }]);