'use strict';

/**
 *
 * This is base action for execution any HTTP request
 *
 * How to use
 *
 * actionService.execute('Request', {
 *  url: 'http://localhost:9100/send',
 *  method: 'GET',
 *  data: {}
 * });
 *
 * */

const assert = require('chai').assert;
const requestPromise = require('common/request-promise');
let ActionBase = require('./action-base');

class ActionRequest extends ActionBase {
    execute(options) {
        assert.isString(options.url);
        assert.isString(options.method);

        if (options.method === 'POST' || options.method === 'PUT') {
            options.data = options.data || {};
        }

        return requestPromise(options);
    }
}

module.exports = ActionRequest;