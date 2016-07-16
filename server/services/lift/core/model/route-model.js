'use strict';

const routeResource = require('../resource/route.resource');
const _ = require('lodash');

// TODO consider generaliztiion of all models to base class as they have many things incommon
class Route {
    constructor(data) {
        if (Route.isValid(data)) {
            this.data = data;
            this.model.title = new routeResource(data);
        } else {
            throw new Error({msg: 'Data passed to route model is invalid'})
        }
    }

    static isValid(data) {
        return true;
    }

    static find (query) {
        return routeResource.find(query).then(function (foundRoute) {
            new Route(foundRoute);
        });
    }

    // save log using resource
    save() {
        return this.model.save();
    }
}

module.exports = Route;