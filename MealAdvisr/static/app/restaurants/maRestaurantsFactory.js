(function () {
    console.log('maRestaurantsFactory.js');

    var mod = angular.module('maRestaurants');

    mod.factory('maRestaurantsFactory', maRestaurantsFactory);

    function maRestaurantsFactory($http) {
        console.log('maRestaurantsFactory.js-factory');

        return {
            getData: getData,
            getOne: getOne,
            addData: addData,
            removeData: removeData
        };

        function getData() {
            return $http.get('/restaurants');
        }


        function getOne(id) {
            return $http.get('/restaurants/' + id).then(function (response) {
                return response.data;
            });

            //var deferred = $q.defer();


            //$http.get('/restaurants/' + id).then(
            //    function (response) {
            //        deferred.resolve(response.data);
            //    },
            //    function (err) {
            //        deferred.reject(response.data);
            //    });

            //return deferred.promise;
        }

        function addData(item) {
            return $http.post('/restaurants', item);
        }

        function removeData(id) {
            return $http.delete('/restaurants/' + id);
        }
    }


})();