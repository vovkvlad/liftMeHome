'use strict';

let mongoose = require('mongoose');

let Schema = mongoose.Schema,
    ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = new Schema({
    /*userId: {
        type: ObjectId,
        required: true
    },*/
    email: {
        type: String,
        require: true
    },
    favouriteRoutes: {
        type: Array
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    }
});