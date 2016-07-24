'use strict';

let mongoose = require('mongoose');

let userSchema = require('../user/user.schema.js');

let Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = new Schema({
    routeId: {
        type: ObjectId,
        required: true
    },
    userId: {
        type: userSchema,
        required: true
    },
    path: {
        // TODO decide on internal presentation of route's path
        type: String,
        required: true
    },
    isFree: {
        type: Boolean
    },
    startFromTime: {
        type: Date
    },
    startUntilTime: {
        type: Date
    },
    numberOfSeats: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    passengers: [{
        userId: {
            type: userSchema
        },
        status: {
            type: String,
            enum: ['pending', 'approved']
        }
    }],
    messages: [{
        userId: {
            type: userSchema
        },
        message: {
            type: String
        }
    }],
    carType: {
        type: String
    },
    // route type can be regular, one time trip, etc
    routeType: {
        type: String
        //TODO consider using enum
        // enum: []
    }
});