'use strict';

let config = require('config');
let expect = require('chai').expect;
let asyncCheck = require('mue-core/modules/test-helper').asyncCheck;
let testHelper = require('modules/test-helper');
let Interaction = require('modules/interaction');
let Db = require('modules/db');

const API_PREFIX = '/api';

const userData = {
    email: 'example@emailDomain.com',
    favouriteRoutes: [],
    firstName: 'Bonapart',
    lastName: 'Napoleon'
};

let interaction = new Interaction({
    baseUrl: 'http://localhost:' + config.get('network:port')
});

describe('Routes', function () {
    before(function (done) {
        Db.initConnection({
            port: config.get('db:port'),
            name: config.get('db:name'),
            host: config.get('db:host')
        }).then(function () {
            done();
        }, function () {
            done(new Error('Cannot establish connection'));
        });
    });

    beforeEach(function (done) {
        testHelper.db.clear().then(function () {
            done();
        }, function () {
            done(new Error('Cannot establish connection'));
        })
    });

    after(function (done) {
        Db.closeConnection().then(function () {
            done();
        }, function () {
            done(new Error('Cannot close Db connection'));
        });
    });

    // User
    it('should return version', function (done) {
        interaction.request({
            url: API_PREFIX + '/version'
        }).then(function (response) {
            asyncCheck(done, function () {
                expect(response.body).to.be.equal(1);
            });
        }, function () {
            done(new Error('Cannot execute request'));
        });
    });

    it('should create user', function (done) {
        interaction.request({
            url: API_PREFIX + '/user',
            method: 'POST',
            data: userData
        }).then(function (response) {
            asyncCheck(done, function () {
                expect(response.body._id).to.be.ok;
            });
        }, function () {
            done(new Error('Cannot execute request'));
        });
    });

    it('should return all users', function (done) {
        Promise.all([
            interaction.request({
                url: API_PREFIX + '/user',
                method: 'POST',
                data: userData
            }),
            interaction.request({
                url: API_PREFIX + '/user',
                method: 'POST',
                data: userData
            })
        ]).then(function (response) {
            interaction.request({
                url: API_PREFIX + '/user',
                method: 'GET'
            }).then(function (response) {
                asyncCheck(done, function () {
                    expect(response.body.length).to.equal(2);
                });
            }, function () {
                done(new Error('Cannot execute request'));
            });
        }, function () {
            done(new Error('Cannot execute request'));
        });
    });

    it('should find user by id', function (done) {
        interaction.request({
            url: API_PREFIX + '/user',
            method: 'POST',
            data: userData
        }).then(function (response) {
                let userId = response.body._id;

                interaction.request({
                    url: API_PREFIX + '/user/' + userId,
                    method: 'GET'
                }).then(
                    function (response) {
                        asyncCheck(done, function () {
                            expect(response.body._id).to.equal(userId);
                        });
                    }, function () {
                        done(new Error('Cannot execute request'));
                    }
                );
            },
            function () {
                done(new Error('Cannot execute request'));
            });
    });

    it('should update user by id', function (done) {
        interaction.request({
            url: API_PREFIX + '/user',
            method: 'POST',
            data: userData
        }).then(function (response) {
                let userId = response.body._id;

                interaction.request({
                    url: API_PREFIX + '/user/' + userId,
                    method: 'PUT',
                    data: {
                        email: 'newEmail@emailDomain.com'
                    }
                }).then(
                    function (response) {
                        interaction.request({
                            url: API_PREFIX + '/user/' + userId,
                            method: 'GET'
                        }).then(
                            function (response) {
                                asyncCheck(done, function () {
                                    expect(response.body.email).to.equal('newEmail@emailDomain.com');
                                });
                            }, function () {
                                done(new Error('Cannot execute request'));
                            });
                    }, function () {
                        done(new Error('Cannot execute request'));
                    }
                );
            },
            function () {
                done(new Error('Cannot execute request'));
            });
    });

    it('should delete user by id', function (done) {
        interaction.request({
            url: API_PREFIX + '/user',
            method: 'POST',
            data: userData
        }).then(function (response) {
                let userId = response.body._id;

                interaction.request({
                    url: API_PREFIX + '/user/' + userId,
                    method: 'DELETE'
                }).then(
                    function (response) {
                        interaction.request({
                            url: API_PREFIX + '/user',
                            method: 'GET'
                        }).then(
                            function (response) {
                                asyncCheck(done, function () {
                                    expect(response.body.length).to.equal(0);
                                });
                            }, function () {
                                done(new Error('Cannot execute request'));
                            });
                    }, function () {
                        done(new Error('Cannot execute request'));
                    }
                );
            },
            function () {
                done(new Error('Cannot execute request'));
            });
    });
});
