'use strict';

var nconf = require("nconf");
var path = require("path");

nconf.file('main.main', {file: path.join(__dirname, 'main.json')});
nconf.file('main.secret', {file: path.join(__dirname, 'secret.json')});

module.exports = nconf;