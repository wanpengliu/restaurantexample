(function () {
    // execute this code
    // register module ('name', deps)
    var mod = angular.module('maRestaurants', []);

    mod.config(function ($routeProvider) {

        $routeProvider.when('/restaurants', {
            controller: 'RestaurantsController',
            templateUrl: 'app/restaurants/ma-restaurants-view.html'
        });

    });


})();