var chai = require('chai');
var expect = chai.expect;

var log = require('common/log')(module);

describe('Log Module', function () {
    it('should exist log method', function () {
        expect(log.info).to.be.ok;
        expect(log.debug).to.be.ok;
        expect(log.warning).to.be.ok;
        expect(log.error).to.be.ok;
    });
});