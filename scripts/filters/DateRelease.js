angular.module("myMoviesSeriesApp").filter("dateRelease", function() {

    /* always return a funtion */
    return function( data ){
        return "Release: " + data;
    };
});