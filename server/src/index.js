'use strict';

/*CONFIG STAGE*/
if (process.env.NODE_ENV == 'development') {
    let path = require('path');

    // add another folder
    console.warn('Takes local mue-core package');
    require('app-module-path').addPath(path.join(__dirname + './../../'));
}

/*RUN STAGE*/
let config = require('config');

// start api server
require('mue-core/modules/api-server')({
    name: config.get('name'),
    port: config.get('network:port'),

    init: function (app) {
        // initialize routes
        require('./routes')(app);

        console.log('On init callback');
    },

    beforeStart: function () {
        console.log('Before start callback');
    }
});

// connect to DB
require('modules/db').initConnection({
    port: config.get('db:port'),
    name: config.get('db:name'),
    host: config.get('db:host')
});