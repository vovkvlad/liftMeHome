'use strict';

let mongoose = require('mongoose');

module.exports = mongoose.model('Route', require('./route.schema.js'));