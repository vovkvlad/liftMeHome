'use strict';


const userRoutes = require('./user.routes.js');
const routeRoutes = require('./route.routes.js');

module.exports = function (app) {
    userRoutes(app);
    routeRoutes(app);
};
