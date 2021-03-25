const defaultRoutes = require('@src/routes');

module.exports = (app, routes = defaultRoutes) => {
    Object.values(routes).forEach(({ method, route, handlers }) => {
        app[method](route, handlers);
    });
};
