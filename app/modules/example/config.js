define([], function () {
    "use strict";

    var states = [{
        name: "example",
        state: {
            url: "/example",
            templateUrl: 'app/modules/example/views/example.html',
            controller: 'exampleController'
            //authenticate: false //use it if you need authenticate
        }
    }, {
        name: "directive",
        state: {
            url: "/directive",
            templateUrl: 'app/modules/example/views/directive.html',
            controller: 'exampleController'
            //authenticate: false //use it if you need authenticate
        }
    }];

    return {
        state: states
    };
});
