define([
    "angular",
    "jquery",
    "app/app"
], function (angular, $) {
    $(document).ready(function () {
        angular.bootstrap(document, ["app"]);
    });
});
