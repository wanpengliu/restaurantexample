(function () {

    console.log('ma-module.js');
    // execute this code
    // register module ('name', deps)
    var mod = angular.module('maRestaurants', ['ngRoute']);

    mod.config(function ($routeProvider) {
        console.log('ma-module.js-config');
        $routeProvider.when('/restaurants/:id', {
            controller: 'RestaurantDetailController',
            controllerAs: 'rc',
            templateUrl: 'app/restaurants/ma-restaurant-detail-view.html'
        }).when('/restaurants', {
            controller: 'RestaurantsController',
            controllerAs: 'rc',
            templateUrl: 'app/restaurants/ma-restaurants-view.html'
        });
    });


})();