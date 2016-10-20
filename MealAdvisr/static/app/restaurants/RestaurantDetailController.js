(function () {

    console.log('RestaurantsController.js');
    var mod = angular.module('maRestaurants');
    mod.controller('RestaurantDetailController', RestaurantDetailController);


    RestaurantDetailController.$inject = ['$routeParams', 'maRestaurantsFactory'];

    function RestaurantDetailController($routeParams, maRestaurantsFactory) {

        console.log('RestaurantDetailController.js-controller');
        var that = this;
        console.log(self);

        maRestaurantsFactory.getOne($routeParams.id)
            .then(display.bind(this), displayError.bind(this));


        function display(data) {
            console.log(this);
            this.restaurant = data;
        }

        function displayError(err) {
            this.errorMessage = err;
        }

    }
})();