(function () {
    var mod = angular.module('maRestaurants');
    mod.controller('RestaurantsController', RestaurantsController);

    function RestaurantsController($scope, maRestaurantsFactory) {
        $scope.isAdding = false;
        $scope.restaurants = maRestaurantsFactory.restaurants;
        $scope.firstName = 'Nigel';

        $scope.add = function () {
            $scope.restaurants.push($scope.restaurantName);
            $scope.restaurantName = '';
            $scope.isAdding = false;
        }

        $scope.new = function () {
            $scope.isAdding = true;
        }
    }
})();