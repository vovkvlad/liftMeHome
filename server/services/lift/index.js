var config = require('./config');

var apiServer = require('common/api-server')({
    name: config.name,
    routes: require('./routes'),
    port: config.port
});