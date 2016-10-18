(function () {
    console.log('maRestaurantsFactory.js');
    var mod = angular.module('maRestaurants');
    mod.factory('maRestaurantsFactory', maRestaurantsFactory);

    function maRestaurantsFactory($http) {
        console.log('maRestaurantsFactory.js-factory');

        return {
            getData: getDataImpl
        };

        function getDataImpl() {
            return $http.get('/restaurants');
        }
    }


})();