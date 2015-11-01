angular.module("myMoviesSeriesApp").directive("mediaItem", ["ApiService",
    function(ApiService){
    // Always returns JSON Object
    return {
        restrict: "AE", // Default value
        replace: true, // Default false
        templateUrl: "views/MediaItem.html",
        scope: {
            data: "=",
            onSelect:"&"
        },
        link: function(scope){

            /** Image of item */
            scope.imagePath = function( path ){
                return ApiService.getImagePath(45, path );
            };

            // Notify out(Parent controller)
            scope.clickOnMedia = function(id){
                scope.onSelect({ mediaId: id });
            };
        }
    };
}]);