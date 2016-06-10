'use strict';

class BaseAction {
    execute() {
        throw Error('Execute method must be implemented');
    }
}

module.exports = BaseAction;