module.exports = function (app) {
    app.get('/log', function (request, response) {
        response.send({});
    });
};