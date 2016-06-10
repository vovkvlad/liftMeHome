module.exports = function (app) {
    app.get('/routes', function (request, response) {
        response.send([]);
    });
};