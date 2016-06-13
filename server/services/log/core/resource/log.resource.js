'use strict';

let mongoose = require('mongoose');

module.exports = mongoose.model('Log', require('./log.schema'));