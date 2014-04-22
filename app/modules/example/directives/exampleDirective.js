define([], function () {
    "use strict";
    return function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'app/modules/example/views/exampleDirective.html',
            scope: {
                message: "@"
            }
        };
    };
});
