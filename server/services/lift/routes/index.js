var log = require('common/modules/log');

module.exports = function (app) {
    app.get('/routes', function (request, response, next) {
        log.log('Got a message');

        response.send([]);
    });
};