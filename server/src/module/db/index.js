'use strict';

let mongoose = require('mongoose');
let log = require('mue-core/modules/log')(module);

// use native Promise
mongoose.Promise = global.Promise;

exports.initConnection = function (db) {
    return new Promise(function (resolve, reject) {
        log.info('DB connecting to ' + db.name + ' db');

        mongoose.connect('mongodb://' + db.host + '/' + db.name);

        mongoose.connection.on('error', function (err) {
            log.error(err);

            reject('Cannot establish connection');
        });

        mongoose.connection.on('open', function () {
            log.info('Connection was established, database: ' + db.name);
            resolve();
        });
    });
};

exports.closeConnection = function () {
    return new Promise(function (resolve, reject) {
        mongoose.connection.close();

        resolve();
    });
};