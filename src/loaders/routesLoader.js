const routes = require('@src/routes');

function factory({ routes }) {
    return (app) => {
        Object.values(routes).forEach(({ method, route, handlers }) => {
            app[method](route, handlers);
        });
    };
}

module.exports = factory({ routes });
module.exports.factory = factory;
