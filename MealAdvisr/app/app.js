(function () {
    // execute this code
    // register module ('name', deps)
    var mod = angular.module('maApp', ['ngRoute', 'maRestaurants', 'maReviews']);

    mod.config(function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);

        $routeProvider.otherwise({redirectTo:'/'});

    });


})();