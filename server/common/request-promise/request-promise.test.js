'use strict';

let expect = require('chai').expect;
let asyncCheck = require('common/test-helper').asyncCheck;

let promiseRequest = require('./index');

describe('Request Promise Module', function () {
    it('should execute GET request and return body, response ', function (done) {
        promiseRequest({
            url: 'http://google.com',
            method: 'GET'
        }).then(function (data) {
            asyncCheck(done, function () {
                expect(data.body).to.be.ok;
                expect(data.response).to.be.ok;
            });
        });
    });

    it('should execute GET request and execute reject', function (done) {
        promiseRequest({
            url: 'http://somefakerequest.com',
            method: 'GET'
        }).catch(function (data) {
            asyncCheck(done, function () {
                expect(data.status).to.be.ok;
                expect(data.message).to.be.ok;
            });
        });
    });
});