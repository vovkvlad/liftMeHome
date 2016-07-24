'use strict';
module.exports = function (request, response, next) {
    let userId = request.headers['mue-user-id'];

    if (userId) {
        // TODO: make request and get user info
    }

    next();
};