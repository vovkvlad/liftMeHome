'use strict';

var logModels = {
    1: require('../model/base-log-model'),
    2: require('../model/message-log-model')
};

const logger = require('common/log')(module);
let _ = require('lodash');

function save(data) {
    var LogModel = getModel(data.code);
    var model = new LogModel(data);

    return model.save();
}

function getModel(code) {
    return logModels[code];
}

function isValid(data) {
    var LogModel = getModel(data.code);

    if (LogModel) {
        return LogModel.isValid(data);
    }
}

exports.save = save;
exports.isValid = isValid;