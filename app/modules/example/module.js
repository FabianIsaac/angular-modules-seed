define([
    "angular",
    "app/modules/example/controllers/exampleController",
    "app/modules/example/directives/exampleDirective"
], function (angular, exampleController, exampleDirective) {
    "use strict";
    return angular.module("ExampleModule", [])
        .controller("exampleController", exampleController)
        .directive("exampleDirective", exampleDirective);
});

