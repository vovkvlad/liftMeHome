let logManager = require('../core/log-manager');

module.exports = function (app) {
    app.post('/log', function (request, response, next) {
        response.send({});

        // TODO: need to define effective approach for validation
        logManager.log(request.body);
    });
};