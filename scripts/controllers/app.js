/**
 * Created by david on 9/22/15.
 */

/* Define module */
angular.module("myMoviesSeriesApp", ["ngRoute", "route-segment", "view-segment", "tmh.dynamicLocale", "pascalpretch.translate"]);
/* Inject these dependencies */

/* Routing */
/* Define segments */
angular.module("myMoviesSeriesApp").config(["$routeSegmentProvider", "$routeProvider", "tmhDynamicLocaleProvider", "$translateProvider", 
    function ($routeSegmentProvider, $routeProvider, tmhDynamicLocaleProvider, $translateProvider) {

        // When we go to movies tab... assign this segment
        $routeSegmentProvider.when("/movies", "movies");
        $routeSegmentProvider.when("/series", "series");
        $routeSegmentProvider.when("/movies/comingsoon", "movies.comingsoon");// Segment lower level with dot(parent.segment)
        $routeSegmentProvider.when("/movies/movielistings", "movies.movielistings");
        $routeSegmentProvider.when("/movies/details", "movies.details");
        // Route by default
        $routeProvider.otherwise({
            redirectTo: "/movies/comingsoon"
        });

        // Define segments
        $routeSegmentProvider.segment("movies", {
            controller: "moviesCtrl",
            templateUrl: "views/movies.html"
        });

        // How to define segment into another segment
        $routeSegmentProvider.within("movies").segment("comingsoon", {
            controller: "moviesComingSoonCtrl",
            templateUrl: "views/moviesComingSoon.html",
            resolve: {
                // Dependencies of view
                Movies: ["ApiService", function (ApiService) {
                    // return promise
                    return ApiService.requestApi("movie/upcoming");
                }]
            }
        });

        $routeSegmentProvider.within("movies").segment("details", {
            controller: "moviesDetailsCtrl",
            templateUrl: "views/moviesDetails.html",
            resolve: {
                // Dependencies of view
                Movie: ["ApiService", "$routeParams", function (ApiService, $routeParams) {
                    // return promise
                    return ApiService.requestApi("movie/" + $routeParams.idMovie);
                }]
            }
        });

        $routeSegmentProvider.within("movies").segment("movielistings", {
            controller: "moviesMovieListingsCtrl",
            templateUrl: "views/moviesMovieListings.html",
            resolve: {
                // Dependencies of view
                Movies: ["ApiService", function (ApiService) {
                    // return promise
                    return ApiService.requestApi("movie/now_playing");
                }]
            }
        });


        // Define segment
        $routeSegmentProvider.segment("series", {
            controller: "seriesCtrl",
            templateUrl: "views/series.html"
        });

        /******************************* i18n locale ***************************************/
        tmhDynamicLocaleProvider.localeLocationPattern("vendor/angular-locale_{{ locale }}.js");

        /** Use in Controllers **/
        /*
            Inject dependeces: tmyDynamicLocale
            E.g.: tmhDynamicLocale.set("es-es")

                



        */

        /******************************** Translations **************************************/
        $translateProvider.translations("es-es", {
            "titleh1": "Jugando con i18n",
            "titleh2": "Subtitulo",
            "titleh3": "Segundo Subtitulo"
        });

        $translateProvider.translations("es-us", {
            "titleh1": "Playing with i18n",
            "titleh2": "Subtitle",
            "titleh3": "Second Subtitle"
        });

        // By default
        $translateProvider.preferredLanguage("es-es");

        // In controler inject service $translate
        // $translate.use("locale");

        // Like filter
        //<h1> {{ ' tituloh1' | translate}}</h1>
        
        // like directive
        //<h2 translate> tituloh2</h2>

        // Like service (more complex) (Inject in controler)
        /* angular.module().controler...

                $translate("titleh3").then( function( traduction){

                    $scope.lastTitle = traduction;
                });

        <h3> {{ 'lastTitle' }}</h3>*/
    }]);