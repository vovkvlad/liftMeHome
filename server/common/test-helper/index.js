"use strict";

// helper function for executions asynchronous test
exports.asyncCheck = function (done, fn) {
    try {
        fn();
        done();
    } catch (e) {
        done(e);
    }
};