'use strict';

class Logger {
    constructor(module) {
        this.module = module;
    }

    log(message) {
        console.log(message);
    }
}

// pass module instance to Logger for further manipulation
module.exports = function (module) {
    return new Logger(module);
};