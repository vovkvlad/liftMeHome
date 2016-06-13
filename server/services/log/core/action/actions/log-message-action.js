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

const assert = require('chai').assert;
const actionService = require('common/action');

let LogAction = require('../log-action');

class MessageLogAction extends LogAction {
    execute(options) {
        assert.isString(options.message);

        options.data = {
            message: options.message
        };

        delete options.message;

        options.code = 2;

        return super.execute(options);
    }
}

actionService.registerAction({
    name: 'message.log',
    action: MessageLogAction
});

module.exports = MessageLogAction;