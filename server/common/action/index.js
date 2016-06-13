'use strict';

/**
 *
 * Action pattern - for execution logic with hidden implementation
 *
 * How to execute action
 *
 * First variant
 * actionService.execute('name', data);
 *
 * Second variant
 * actionService.getAction('name').execute(data);
 *
 * */

const _ = require('lodash');
const config = require('common/config');
const assert = require('chai').assert;
const fs = require("fs");
const path = require("path");

let actionDescriptors = [];

function registerAction(actionDescriptor) {
    assert.isObject(actionDescriptor);
    assert.isString(actionDescriptor.name);
    assert.isFunction(actionDescriptor.action);

    actionDescriptors.push(actionDescriptor);
}

function getActionDescriptor(name) {
    return _.find(actionDescriptors, {
        name: name
    });
}

function deleteAllActionDescriptors() {
    actionDescriptors = [];
}

function getActionDescriptors() {
    return actionDescriptors;
}

function getAction(name) {
    var actionDescriptor = getActionDescriptor(name);

    assert.isDefined(actionDescriptor);

    var action = new actionDescriptor.action();
    assert.isFunction(action.execute);

    return action;
}

function execute(name, data) {
    return getAction(name).execute(data);
}

// add actions from all services
function initServiceActions() {
    for (var service in config.get('services')) {
        var pathToActions = path.join(__dirname, "../../services/" + config.get('services:' + service).name + config.get('actions:path'));

        try {
            var stats = fs.lstatSync(pathToActions);

            // Is it a directory?
            if (stats.isDirectory()) {
                fs.readdirSync(pathToActions).forEach(function (file) {
                    require(pathToActions + '/' + file);
                });
            }
        }
        catch (e) {
        }
    }
}

exports.execute = execute;
exports.getAction = getAction;
exports.registerAction = registerAction;
exports.getActionDescriptor = getActionDescriptor;
exports.getActionDescriptors = getActionDescriptors;
exports.deleteAllActionDescriptors = deleteAllActionDescriptors;

initServiceActions();