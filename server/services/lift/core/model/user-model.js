'use strict';

const userResource = require('../resource/user.resource');
const _ = require('lodash');
const assert = require('chai').assert;

class User {
    constructor(data) {
        if (User.isValid(data)) {
            this.data = data;
            this.model = new userResource(data);
        } else {
            throw new Error({msg: 'Data passed to user model is invalid'})
        }
    }

    static isValid(data) {
        try {
            assert.isDefined(data.email, 'Email of the user needs to be defined');
            assert.isString(data.email, 'Email of the user needs to be a string');
        } catch (e) {
            console.error('\n'+ e.message);
            return false;
        }

        return true;
    }

    static find(query) {
        return userResource.find(query).then(function (foundUser) {
            new User(foundUser);
        })
    }

    // save log using resource
    save() {
        return this.model.save();
    }
}

module.exports = User;