var mongoose = require('mongoose');

module.exports = mongoose.model('Log', require('./log.schema'));