(function () {

    var mod = angular.module('maRestaurants');


    mod.factory('maRestaurantsFactory', maRestaurantsFactory);

    var restaurants = ['Som Saa', 'Barbary', 'Tim Spedding @ p-franco', 'Hilton'];

    function save(list) {
        localStorage.setItem('restaurants', JSON.stringify(list));
    }

    function load() {
        restaurants.length = 0;
        localList = JSON.parse(localStorage.getItem('restaurants'));
        localList.forEach(function (item) {
            restaurants.push(item);
        });
    }

    function save(restaurants) {
        localStorage.setItem('restaurants', JSON.stringify(restaurants));
    }

    function maRestaurantsFactory() {
        return {
            load: load,
            restaurants: restaurants,
            add: function (item) {
                restaurants.push(item);
                save(restaurants);
            },
            remove: function (item) {
                restaurants.splice(restaurants.indexOf(item), 1);
                save(restaurants);
            }
        };
    }

})();