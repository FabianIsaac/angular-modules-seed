define([
    "angular",
    "ui.router",
    "app/states",
    'app/modules/example/module'
], function (angular, router, states) {
    "use strict";
    var app = angular.module("app", ['ui.router', 'ExampleModule']); //Add module dependencies.
    app
        .config([
            "$stateProvider", "$locationProvider", "$urlRouterProvider",
            function ($stateProvider, $locationProvider, $urlRouterProvider) {
                states.forEach(function (state) {
                    $stateProvider.state(state.name, state.state);//Load states
                });
                $urlRouterProvider.otherwise('/example');
                // Without server side support html5 must be disabled.
                return $locationProvider.html5Mode(false);
            }
        ]);
        /*
         *  Basic example if you want to use authentication
         *
         *  .run(['$state', '$rootScope', 'loginService',function ($state, $rootScope,loginService) {
         *      $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
         *          if (toState.authenticate && !loginService.isAuth) {
         *              $state.go("login");
         *              event.preventDefault();
         *          }
         *      });
         *  }]);
         *
         */

    return app;
});