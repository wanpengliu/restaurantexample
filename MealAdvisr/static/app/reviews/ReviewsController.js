(function () {
    var mod = angular.module('maReviews');

    mod.controller('ReviewsController', ReviewsController);

    function ReviewsController($scope, $http, maRestaurantsFactory) {
        $scope.isAdding = false;

        $http.get('/reviews').success(function (data) {
            $scope.reviews = data;
        });

        $scope.restaurants = maRestaurantsFactory.restaurants;
        $scope.firstName = 'Nigel';

        $scope.add = function () {
            $scope.reviews.push({r:$scope.r, d:$scope.d});
            $scope.visitDate = '';
            $scope.isAdding = false;
        }

        $scope.new = function () {
            $scope.isAdding = true;
        }
    }
})();