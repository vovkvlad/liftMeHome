'use strict';

/**
 *
 * This is action for sending email throw email service
 *
 * How to use
 *
 * actionService.execute('SendEmail', {
 *  emails: ['user1@gmail.com', 'user2@gmail.com'],
 *  message: 'Bla bla bla',
 *  subject: 'Reject from route'
 * });
 *
 * */

const assert = require('chai').assert;
const _ = require('lodash');
const actionService = require('../index');

const STANDART_SUBJECT = 'Lift Me Home Notification';

let RequestToServiceAction = require('../action-request-to-service');

class SendEmailAction extends RequestToServiceAction {
    execute(options) {
        assert.isString(options.message);
        assert.isString(options.emails);

        if (_.isString(options.emails)) {
            options.emails = [options.emails];
        }

        return super.execute({
            service: 'email',
            url: '/send',
            method: 'POST',
            data: {
                emails: options.emails,
                message: options.message,
                subject: options.subject || STANDART_SUBJECT
            }
        });
    }
}

actionService.registerAction({
    name: 'sendEmail',
    action: SendEmailAction
});

module.exports = SendEmailAction;