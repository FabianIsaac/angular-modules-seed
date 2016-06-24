require.config({
    baseUrl: ".",
    paths: {
        "jquery": "node_modules/jquery/dist/jquery.min",
        "angular": "node_modules/angular/angular.min",
        "ui.router": "node_modules/angular-ui-router/release/angular-ui-router.min"
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