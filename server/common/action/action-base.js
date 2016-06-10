function Action() {

}

Action.prototype = {
    execute: function () {
        throw Error('Execute method must be implemented');
    }
};

module.exports = Action;