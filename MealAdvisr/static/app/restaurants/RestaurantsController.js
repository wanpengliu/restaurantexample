(function () {

    console.log('RestaurantsController.js');
    var mod = angular.module('maRestaurants');
    mod.controller('RestaurantsController', RestaurantsController);

    function RestaurantsController($scope, maRestaurantsFactory) {

        console.log('RestaurantsController.js-controller');
        $scope.isAdding = false;
        

        maRestaurantsFactory.getData().then(display)

        $scope.add = function () {
            $scope.restaurants.push($scope.restaurantName);
            $scope.restaurantName = '';
            $scope.isAdding = false;
        }

        $scope.new = function () {
            $scope.isAdding = true;
        }

        function display(response) {
            $scope.restaurants = response.data;
        }
    }
})();