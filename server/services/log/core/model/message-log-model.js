'use strict';

let BaseLog = require('./base-log-model');
let CODE = 2;
let _ = require('lodash');

function isValidData(data) {
    return BaseLog.isValid(data) && data.code === CODE && _.isString(data.data.message);
}

class MessageLog extends BaseLog {
    isValid() {
        return isValidData(this.data);
    }
}

MessageLog.isValid = isValidData;

module.exports = MessageLog;