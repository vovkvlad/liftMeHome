'use strict';

const LogResource = require('../resource/log.resource');
const LOG_TYPES = require('../config').LOG_TYPES;
const _ = require('lodash');

function isValidData(data) {

    return _.isInteger(data.code) && _.includes(LOG_TYPES, data.type);
}

class BaseLog {
    constructor(data) {
        this.data = data;

        this.model = new LogResource(this.data);
    }

    // validate data
    isValid() {
        return isValidData(this.data);
    }

    // save log using resource
    save() {
        return this.model.save();
    }
}

BaseLog.isValid = isValidData;

module.exports = BaseLog;