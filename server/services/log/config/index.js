var nconf = require("nconf"),
    config = new nconf.Provider(),
    path = require("path"),
    configFile;

var NODE_ENV = process.env.NODE_ENV;

if ((NODE_ENV == 'development')) {
    configFile = 'development.json'
} else if (NODE_ENV == 'test') {
    configFile = 'test.json'
} else if (NODE_ENV == 'production') {
    configFile = 'production.json'
}

config.file('log.config', {file: path.join(__dirname, configFile)});

module.exports = config;