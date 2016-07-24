'use strict';

/**
 *
 * Base class for executing requests to service
 *
 * Usage:
 * var interaction = new Interaction();
 *
 * interaction.request({
 *  url: 'read-hub/version',
 *  method: 'POST',
 *  data: {}
 * });
 *
 * */

const DEFAULT_METHOD = 'GET';

let _ = require('lodash');
let requestPromise = require('mue-core/modules/request-promise');

let defaultOptions = {
    baseUrl: 'http://hub.mue.in.ua'
};

class Interaction {
    constructor(options) {
        let defaultOptionsCopy = _.cloneDeep(defaultOptions);

        this.options = Object.assign(defaultOptionsCopy, options);
    }

    request(options) {
        let url = options.url;
        let data = options.data;
        let method = options.method;

        return requestPromise(this.getRequestOptions(url, data, method));
    }

    getRequestOptions(url, data, method) {
        return {
            url: this.getRequestUrl(url),
            method: method || DEFAULT_METHOD,
            data: data
        }
    }

    getRequestUrl(url) {
        return this.options.baseUrl + url;
    }
}

module.exports = Interaction;