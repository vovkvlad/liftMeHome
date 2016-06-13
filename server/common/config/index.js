'use strict';

module.exports = {
    services: {
        lift: {
            host: '127.0.0.1',
            port: 9101,
            name: 'lift',
            description: 'Lift Service'
        },
        log: {
            host: '127.0.0.1',
            port: 9102,
            name: 'log',
            description: 'Log Service',
            db: {
                host: '127.0.0.1',
                post: '27017',
                name: 'log'
            }
        },
        email: {
            host: '127.0.0.1',
            port: 9103,
            name: 'email',
            description: 'Email Service'
        }
    },

    actions: {
        path: '/core/action/actions'
    }
};