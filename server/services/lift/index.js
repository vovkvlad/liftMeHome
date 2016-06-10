var config = require('common/config').services['lift'];

require('common/api-server')({
    name: config.name,
    routes: require('./routes'),
    port: config.port
});