var chai = require('chai');
var expect = chai.expect;
let asyncCheck = require('common/test-helper').asyncCheck;
let config = require('common/config');

var actionService = require('common/action');

describe('Test Log API', function () {
    before(function (done) {
        // database connection
        require('common/db').initConnection(config.services.log.db).then(function () {
            done();
        });
    });

    it('should send message.log', function (done) {
        actionService.execute('message.log', {
            message: 'Test'
        }).then(function () {
            done()
        }, function (err) {
            done(err.message);
        });
    });

    it('should not send message.log', function (done) {
        actionService.execute('message.log', {
            type: 'WRONG_TYPE',
            message: 'Test'
        }).then(function () {
            done('Something wrong');
        }, function (err) {
            done();
        });
    });
});