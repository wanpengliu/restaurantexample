(function () {

    var mod = angular.module('maReviews');
    mod.service('maReviewsService', ReviewsService);

    function ReviewsService() {
        this.reviews = [{ r: 0, d: '2016-10-17' }, { r: 2, d: '2016-10-09' }];
    }

})();