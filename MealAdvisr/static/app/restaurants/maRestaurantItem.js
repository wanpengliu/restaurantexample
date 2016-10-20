(function () {


    var mod = angular.module('maRestaurants');

    mod.directive('maRestaurantItem', maRestaurantItem);

    function maRestaurantItem() {
        return {
            restrict: 'E',
            bindToController: true,
            controller: RestaurantItemController,
            controllerAs: 'ric',
            scope: {
                restaurant: '=',
                removeItem: '&'
            },
            templateUrl: 'app/restaurants/ma-restaurant-item-template.html'
        };
    }

    function RestaurantItemController() {
        
    }



})();