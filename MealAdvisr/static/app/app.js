(function () {

    console.log('app.js');

    // execute this code
    // register module ('name', deps)
    var mod = angular.module('maApp', ['ngRoute', 'maRestaurants', 'maReviews']);

    mod.config(function ($routeProvider, $locationProvider) {
        //$locationProvider.html5Mode(true);

        console.log('app.js-config');
        $routeProvider.otherwise({redirectTo:'/'});

    });


})();