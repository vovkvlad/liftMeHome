var chai = require('chai');
var expect = chai.expect;
var asyncCheck = require('common/test-helper').asyncCheck;

var BaseLog = require('services/log/core/model/base-log-model');

describe('Base Log Model', function () {
    it('should exist base methods', function () {
        var log = new BaseLog();

        expect(log.isValid).to.be.ok;
        expect(log.save).to.be.ok;

        expect(BaseLog.isValid).to.be.ok;
    });

    it('should validate log', function () {
        expect(BaseLog.isValid({
            code: 1,
            type: 'info',
            data: {}
        })).to.be.ok;

        expect(BaseLog.isValid({
            type: 'info',
            data: {}
        })).to.be.not.ok;

        expect(BaseLog.isValid({
            type: 'info'
        })).to.be.not.ok;
    });
});