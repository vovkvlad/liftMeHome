'use strict';

let logManager = require('../core/log-manager');
let HttpError = require('common/errors/httpError');
let _ = require('lodash');

module.exports = function (app) {
    app.post('/log', function (request, response, next) {
        var logData = _.pick(request.body, ['code', 'type', 'message', 'data']);

        if (logManager.isValid(logData)) {
            logManager.save(logData);

            response.send({});
        } else {
            next(new HttpError(400, 'Log data invalid'));
        }
    });
};