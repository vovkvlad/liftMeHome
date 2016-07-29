'use strict';

let Route = require('modules/route').Route;
let User = require('modules/user').User;

function clear() {
    return Promise.all([
        Route.remove(),
        User.remove()
    ]);
}

exports.db = {
    clear: clear
};