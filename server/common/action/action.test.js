'use strict';

let expect = require('chai').expect;
let asyncCheck = require('common/test-helper').asyncCheck;

let actionService = require('common/action');

let validActionDescriptor = {
    name: 'test',
    action: function () {
        this.execute = function () {
            return new Promise(function (resolve, reject) {
                resolve('done');
            });
        }
    }
};

describe('Action Module', function () {
    afterEach(function () {
        actionService.deleteAllActionDescriptors();
    });

    it('should exist base methods', function () {
        expect(actionService.registerAction).to.be.ok;
        expect(actionService.getAction).to.be.ok;
        expect(actionService.getActionDescriptor).to.be.ok;
        expect(actionService.getActionDescriptors).to.be.ok;
        expect(actionService.deleteAllActionDescriptors).to.be.ok;
    });

    it('should register action', function () {
        actionService.registerAction(validActionDescriptor);

        var actionDescriptor = actionService.getActionDescriptor(validActionDescriptor.name);
        var actionDescriptors = actionService.getActionDescriptors();

        expect(actionDescriptor).to.be.ok;
        expect(actionDescriptors.length).to.be.equal(1);
    });

    it('should execute action', function (done) {
        actionService.registerAction(validActionDescriptor);

        actionService.execute(validActionDescriptor.name)
            .then(function (data) {
                asyncCheck(done, function () {
                    expect(data).to.be.equal('done');
                });
            });
    });
});