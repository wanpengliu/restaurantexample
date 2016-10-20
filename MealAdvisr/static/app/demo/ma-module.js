(function () {

    console.log('ma-module.js');
    // execute this code
    // register module ('name', deps)
    var mod = angular.module('maDemo', ['ngRoute']);

    mod.config(function ($routeProvider) {
        console.log('ma-module.js-config');
        $routeProvider.when('/demo', {
            //controller: 'DemoController',
            templateUrl: 'app/demo/ma-demo-view.html'
        });
    });


})();