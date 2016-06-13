var http = require('http'),
    express = require('express'),
    bodyParser = require('body-parser'),
    HttpError = require('common/errors/httpError'),
    log = require('common/log')(module);

module.exports = function (options) {
    var app = express();

    app.use(bodyParser.json({
        strict: false
    }));

    // initialize routes
    options.routes(app);

    app.use(require("common/middlewares/sendHttpError"));

    app.use(function (err, request, response, next) {
        if (typeof err == "number") {
            err = new HttpError(err);
        } else if (err instanceof HttpError) {

        } else {
            err = new HttpError(500, 'Fatal server error');
        }

        response.sendHttpError(err);
    });

    http.createServer(app).listen(options.port);

    log.info(options.name + ' listening ' + options.port + ' port.');

    return app;
};