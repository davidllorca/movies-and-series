angular
	.module("myMoviesSeriesApp")
	.directive("genre",["$compile", function ($compile) {

		return{
			restrict: "AE",
			replace: true,
			scope: {
				collection: "="
			},
			link: function(scope, element){
				var view ="<div class=\"box-genres\">";

				for (var f = 0, F = scope.collection.length; f < F; f++) {
					view += "<span class=\"label label-primary\">" + scope.collection[f].name + "</span>";	
				};

				view += "</div>";

				var newElement = angular.element(view);
				var newElementCompiled = $compile(newElement)(scope);

				element.replaceWith(newElementCompiled);
			}
		};
	}]);
