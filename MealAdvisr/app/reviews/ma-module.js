(function () {
    // execute this code
    // register module ('name', deps)
    var mod = angular.module('maReviews', []);

    mod.config(function ($routeProvider) {
        $routeProvider.when('/reviews', {
            controller: 'ReviewsController',
            templateUrl: 'app/reviews/ma-reviews-view.html'
        });

    });

})();