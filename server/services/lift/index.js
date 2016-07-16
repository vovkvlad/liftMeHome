'use strict';

var mainConfig = require('common/config');
let liftConfig = require('./config');

require('common/api-server')({
    name: mainConfig.get('services:lift:name'),
    routes: require('./routes'),
    port: mainConfig.get('services:lift:port')
});

require('common/db').initConnection({
    port: liftConfig.get('db:port'),
    name: liftConfig.get('db:name'),
    host: liftConfig.get('db:host')
});