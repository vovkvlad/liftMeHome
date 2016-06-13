console.log('send http error file');

module.exports = function (error, request, response, next) {
    response.sendHttpError = function (error) {
        response.status(error.status || 500);

        response.send({
            message: error.message
        });
    };

    next(error);
};