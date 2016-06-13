'use strict';

/**
 *
 * This is base action for execution request to inner services
 *
 * How to use
 *
 * actionService.execute('RequestToService', {
 *  service: 'email',
 *  url: '/send',
 *  method: 'POST',
 *  data: {}
 * });
 *
 * */

const assert = require('chai').assert;
const config = require('common/config');

let RequestAction = require('./action-request');

class RequestToService extends RequestAction {
    execute(options) {
        assert.isString(options.service);
        assert.isString(options.url);
        assert.isString(options.method);

        var serviceConfig = config.get('services:' + options.service);

        assert.isString(serviceConfig.host);
        assert.isNumber(serviceConfig.port);

        return super.execute({
            url: 'http://' + serviceConfig.host + ':' + serviceConfig.port + options.url,
            method: options.method,
            data: options.data
        });
    }
}

module.exports = RequestToService;