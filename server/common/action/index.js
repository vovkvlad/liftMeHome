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
const assert = require('chai').assert;

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

exports.execute = execute;
exports.getAction = getAction;
exports.registerAction = registerAction;
exports.getActionDescriptor = getActionDescriptor;
exports.getActionDescriptors = getActionDescriptors;
exports.deleteAllActionDescriptors = deleteAllActionDescriptors;