/**
 * Created by david on 9/26/15.
 */
angular.module("myMoviesSeriesApp").service("ApiService", ["$http", "settings", function ($http, settings) {

    this.requestApi = function (service) {

        return $http.get(settings.urlApi + settings.apiVersion + "/" + service + "?api_key=" + settings.apiKey + "&language=en");
    };

    this.getImagePath = function(size, path){

        return path == null ? null : settings.imagePathUrlApi + size + path;
    }
}]);