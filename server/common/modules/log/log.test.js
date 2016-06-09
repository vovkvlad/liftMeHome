var chai = require('chai');
var expect = chai.expect;

var log = require('./index');

describe('Log Module', function () {
    it('should exist log method', function () {
        expect(log.log).to.be.ok;
    });
});