'use strict';

class Logger {
    constructor(module) {
        this.module = module;
    }

    error(message) {
        console.error(message);
    }

    info(message) {
        console.log(message);
    }

    // only should be visible on development mode
    debug(message) {
        console.debug(message);
    }

    warning(message) {
        console.warn(message);
    }
}

// pass module instance to Logger for further manipulation
module.exports = function (module) {
    return new Logger(module);
};