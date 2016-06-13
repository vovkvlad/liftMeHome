var mainConfig = require('common/config');
let logConfig = require('./config');

require('common/api-server')({
    name: mainConfig.get('services:log:name'),
    routes: require('./routes'),
    port: mainConfig.get('services:log:port')
});

require('common/db').initConnection({
    port: logConfig.get('db:port'),
    name: logConfig.get('db:name'),
    host: logConfig.get('db:host')
});

require('common/action');