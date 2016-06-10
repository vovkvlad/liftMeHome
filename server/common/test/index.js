"use strict";

exports.asyncCheck = function(done, fn){
    try {
        fn();
        done();
    } catch (e) {
        done(e);
    }
};