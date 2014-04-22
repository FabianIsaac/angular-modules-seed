define([
    "app/modules/example/config"
], function () {
    "use strict";
    var states = [], i,j;

    for (i = 0; i < arguments.length; i = i + 1) {
        if (!(arguments[i].state instanceof Array)) {
            states.push(arguments[i].state);
        } else {
            for (j = 0; j < arguments[i].state.length; j = j + 1) {
                states.push(arguments[i].state[j]);
            }
        }
    }
    return states;
});