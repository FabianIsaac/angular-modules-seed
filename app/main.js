require.config({
    baseUrl: "/angular-modules-seed",
    paths: {
        "jquery": "bower_components/jquery/dist/jquery.min",
        "angular": "bower_components/angular/angular.min",
        "ui.router": "bower_components/angular-ui-router/release/angular-ui-router.min"
    },
    shim: {
        "jquery": {
            exports: "$"
        },
        "angular": {
            exports: "angular",
            deps:["jquery"]
        },
        "ui.router": {
            deps: ["angular"]
        }
    },
    deps: ["app/bootstrap"]
});