'use strict';

let error = require('mue-core/modules/error');

let getUser = require('../middlewares/get-user');

let User = require('../modules/user/index').User;
let Route = require('../modules/route/index').Route;

const API_PREFIX = '/api';
const VERSION = '1';

module.exports = function (app) {
    app.use(getUser);

    app.get(API_PREFIX + '/version', function (request, response, next) {
        response.send(VERSION);
    });
};