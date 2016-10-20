(function () {


    var mod = angular.module('maCommon');

    mod.directive('maWelcomeMessage', maWelcomeMessage);

    function maWelcomeMessage() {
        return {
            restrict: 'E',
            bindToController: true,
            controller: WelcomeMessageController,
            controllerAs: 'wmc',
            scope: {
                timePeriod: '@',
                timeFormat: '='
            },
            templateUrl: 'app/common/ma-welcome-message-template.html'
        };
    }

    function WelcomeMessageController($interval) {
        var timeFormats = ['longDate', 'shortDate', '', 'yyyy MM dd'];
        var that = this;
        that.cycle = false;
        //that.timePeriod = 'date';
        //that.timeFormat = 'dd MMMM yy';
        if (!that.timeFormat) {
            that.cycle = true;
        }

        var i = 0;
        $interval(function () {
            if (that.cycle) {
                that.timeFormat = timeFormats[i % timeFormats.length];
                i++;
            }


            that.dateTime = new Date();
        }, 1000);
    }



})();