(function () {

    console.log('DemoController.js');
    var mod = angular.module('maDemo');

    //#TODO: Make this work
    mod.controller('DemoController', DemoController);
    mod.controller('ChildController', ChildController);
    mod.controller('GrandChildController', GrandChildController);
    mod.factory('demoFactory', demoFactory);



    function demoFactory() {
        return {
            person: {firstName:'Armstrong'}
        };
    }

    function DemoController($scope, demoFactory) {
        $scope.dc_result = demoFactory.person;


        $scope.someClick = function () {
            demoFactory.person.firstName = 'Nigel';
        }


    }

    function ChildController($scope, filterFilter) {

        var source = ['Aaaaaa', 'Baaaaaa', 'Caaaaaaa'];
        $scope.inputChange = function () {
            $scope.cc_result = filterFilter(source, $scope.input);
        }
    }

    function GrandChildController($scope, demoFactory) {
        $scope.gcc_result = demoFactory.person;



        $scope.otherClick = function () {
            demoFactory.person.firstName = 'William';
        }
    }
})();