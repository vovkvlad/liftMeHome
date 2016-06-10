const LogModel = require('../models/log.model');
const logger = require('common/log')(module);

exports.log = function (data) {
    logger.log(data.type);
    logger.log(data.message);

    // TODO: need to define how return promise with Mongoose Model
    var log = new LogModel(data);
    return log.save();
};