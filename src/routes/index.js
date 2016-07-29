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

    // User
    app.get(API_PREFIX + '/user', function (request, response, next) {
        User.find({}).then(function (allUsers) {
                response.send(allUsers);
            },
            function () {
                next(error.getHttpError(400, 'Can not get users'));
            });
    });

    app.get(API_PREFIX + '/user/:id', function (request, response, next) {
        User.findById(request.params.id).then(function (foundUser) {
                response.send(foundUser);
            },
            function () {
                next(error.getHttpError(400, 'Can not find user with such id'));
            });
    });

    app.post(API_PREFIX + '/user', function (request, response, next) {
        User.create(request.body).then(function (user) {
                response.send({ _id: user._id });
            },
            function () {
                next(error.getHttpError(400, 'Can not create user'));
            });
    });

    app.put(API_PREFIX + '/user/:id', function (request, response, next) {
        User.update({ _id: request.params.id }, request.body).then(function () {
                response.send();
            },
            function () {
                next(error.getHttpError(400, 'Could not update user'));
            });
    });

    app.delete(API_PREFIX + '/user/:id', function (request, response, next) {
        User.remove({ _id: request.params.id }).then(function () {
                response.send();
            },
            function () {
                next(error.getHttpError(400, 'Could not remove user with such id'));
            });
    });
};