(function () {
    var mod = angular.module('maReviews');
    mod.controller('ReviewsController', ReviewsController);

    function ReviewsController($scope, maRestaurantsFactory) {
        $scope.isAdding = false;
        $scope.reviews = [{ r: 0, d: '2016-10-17' }, { r: 2, d: '2016-10-09' }];
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