/**
 * Created by david on 10/18/15.
 */
angular
    .module("myMoviesSeriesApp")
    .directive("vote",["$compile", function ($compile) {

    return {
        restrict: "AE",
        replace: true, // No tiene efecto pq se remplaza en la ultima orden ln34
        scope:{
            avg: "@"
        },
        link: function (scope, element) {
            var avgNumber = parseFloat(scope.avg);
            var avgRound = Math.round(avgNumber);

            // Template
            var view = "<div>";

            // Stars
            for( var f = 0; f < avgRound; f++){
                view += "<span class='glyphicon glyphicon-star'></span>";
            }
            // Stars empty
            for( var f = 0, F = 10 - avgRound; f < F; f++ ){
                view += "<span class='glyphicon glyphicon-star-empty'></span>";
            }

            // Close template
            view += "</div>";

            var newElement = angular.element(view);
            var newElementCompiled = $compile(newElement)(scope);

            element.replaceWith(newElementCompiled);
        }
    }
}]);

