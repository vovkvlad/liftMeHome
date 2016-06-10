var config = require('common/config').services['log'];

require('common/api-server')({
    name: config.name,
    routes: require('./routes'),
    port: config.port
});