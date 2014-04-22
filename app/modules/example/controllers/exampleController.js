define([], function () {
    "use strict";

    function exampleController($scope) {
        $scope.exampleTitle = "Test Module!";
    }

    return ['$scope', exampleController];
});
