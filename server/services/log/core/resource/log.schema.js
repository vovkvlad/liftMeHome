'use strict';

let mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    code: {
        type: Number,
        requre: true
    },
    type: {
        type: String,
        enum: ['info', 'warning', 'error'],
        require: true
    },
    data: {
        type: Object,
        default: {}
    }
});