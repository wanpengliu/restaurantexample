(function () {

    console.log('RestaurantsController.js');
    var mod = angular.module('maRestaurants');
    mod.controller('RestaurantsController', RestaurantsController);

    function RestaurantsController(maRestaurantsFactory) {
        var that = this;
        console.log('RestaurantsController.js-controller');
        that.isAdding = false;
        

        maRestaurantsFactory.getData().then(display, displayError);

        that.add = function () {
            var newRestaurant = {
                id: -1,
                name: that.name,
                address: that.address
            };
            maRestaurantsFactory.addData(newRestaurant)
                .then(maRestaurantsFactory.getData)
                .then(display)
                .then(clearForm);
        }

        that.remove = function (id) {
            maRestaurantsFactory.removeData(id)
                .then(maRestaurantsFactory.getData)
                .then(display)
                .then(clearForm);
        }

        that.new = function () {
            that.isAdding = true;
        }

        function display(response) {
            that.restaurants = response.data;
        }

        function displayError(err) {
            that.errorMessage = err;
        }

        function clearForm() {
            that.editForm.$setPristine();
            that.name = '';
            that.address = '';
            that.isAdding = false;
            that.errorMessage = '';
        }
    }
})();