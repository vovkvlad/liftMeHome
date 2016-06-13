'use strict';

/**
 *
 * This is action for logging message
 *
 * How to use
 *
 * actionService.execute('message.log', {
 *      type: 'warning', // info by default
 *      data: {
 *          message: 'Bla bla bla'
 *      }
 * });
 *
 * */

const LOG_TYPES = require('../config').LOG_TYPES;
const assert = require('chai').assert;
const _ = require('lodash');

let RequestToServiceAction = require('common/action/action-request-to-service');

class LogAction extends RequestToServiceAction {
    execute(options) {
        options.type = options.type || LOG_TYPES[0];

        assert.isNumber(options.code);

        return super.execute({
            service: 'log',
            url: '/log',
            method: 'POST',
            data: {
                type: options.type,
                code: options.code,
                data: options.data || {}
            }
        });
    }
}

module.exports = LogAction;