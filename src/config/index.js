'use strict';

let config = new (require("nconf").Provider)(),
    path = require("path"),
    environment = require('mue-core/modules/environment'),
    configFile;

switch (true) {
    case environment.isDevelopment():
        configFile = 'development.json';

        break;

    case environment.isProduction():
        configFile = 'production.json';

        break;

    case environment.isTest():
        configFile = 'test.json';

        break;
}

config.file('lift.main', {file: path.join(__dirname, 'main.json')});
config.file('lift.config', {file: path.join(__dirname, configFile)});

module.exports = config;