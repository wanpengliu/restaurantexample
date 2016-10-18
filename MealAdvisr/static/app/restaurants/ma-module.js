(function () {

    console.log('ma-module.js');
    // execute this code
    // register module ('name', deps)
    var mod = angular.module('maRestaurants', ['ngRoute']);

    mod.config(function ($routeProvider) {
        console.log('ma-module.js-config');
        $routeProvider.when('/restaurants', {
            controller: 'RestaurantsController',
            templateUrl: 'app/restaurants/ma-restaurants-view.html'
        });
    });


})();