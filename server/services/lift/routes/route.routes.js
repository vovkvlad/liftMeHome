'use strict';

const routeModel = require('../core/models/route.model');
const _ = require('lodash');

module.exports = function (app) {
    app.get('/routes', function (request, response) {
        response.send([]);
    });

};