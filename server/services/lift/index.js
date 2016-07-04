'use strict';

let mainConfig = require('common/config'),
    liftConfig = require('./config');

require('common/api-server')({
    name: mainConfig('services:lift:name'),
    routes: require('./routes'),
    port: mainConfig('services:lift:port')
});

require('common/db').initConnection({
    port: liftConfig.get('db:port'),
    name: liftConfig.get('db:name'),
    host: liftConfig.get('db:host')
});