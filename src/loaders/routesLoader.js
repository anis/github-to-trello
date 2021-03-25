const defaultRoutes = require('@src/routes');

module.exports = (app, routes = defaultRoutes) => {
    Object.values(routes).forEach(({ method, route, handler }) => {
        app[method](route, handler);
    });
};
