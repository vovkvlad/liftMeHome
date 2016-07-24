'use strict';

const userResource = require('../resource/user.resource');
const _ = require('lodash');
const assert = require('chai').assert;
var ObjectId = require('mongoose').Types.ObjectId;

class User {
    constructor(data, model) {
        if (data) {
            if (User.isValid(data)) {
                this.model = new userResource(data);
            } else {
                throw new Error({ msg: 'Data passed to user model is invalid' })
            }
        } else if (model) {
            // if we want to create instance from existing mongoose document we do not need to call new userResource(data);
            this.model = model;
        }
    }

    static isValid(data) {
        if (_.isUndefined(data.email) || !_.isString(data.email)) {
            return false;
        } else {
            return true;
        }
    }

    static find(query) {
        return userResource.findOne({'_id': '578d585541197365105f13d5'}).exec().then(function (doc) {
            return new User(null, doc);
        });
        /*userResource.findOne({'_id': new ObjectId('578d585541197365105f13d5')}, function (err, data) {
            return new User(data);
        });*/
    }

    // save log using resource
    save() {
        return this.model.save();
    }
}

module.exports = User;