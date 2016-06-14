'use strict';

let expect = require('chai').expect;
let MessageLog = require('services/log/core/model/message-log-model');

describe('Message Log Model', function () {
    it('should validate log', function () {
        expect(MessageLog.isValid({
            code: 2,
            type: 'info',
            data: {
                message: 'test'
            }
        })).to.be.ok;

        expect(MessageLog.isValid({
            code: 2,
            type: 'info',
            data: {}
        })).to.be.not.ok;

        expect(MessageLog.isValid({
            code: 9999,
            type: 'info',
            data: {
                message: 'test'
            }
        })).to.be.not.ok;
    });
});