const express = require('express');
const cors = require('cors');
const routesLoader = require('@src/loaders/routesLoader');
const errorHandler = require('@src/middlewares/handleError');

function rawBodySaver(req, res, buf, encoding) {
    if (buf && buf.length) {
        req.rawBody = buf.toString(encoding || 'utf8');
    }
}

function app({ express, cors, routesLoader, errorHandler }) {
    const app = express();
    app.use(cors());
    app.use(express.json({ verify: rawBodySaver }));

    routesLoader(app);

    app.use(errorHandler);

    return app;
}

function factory(dependencies) {
    return app.call(null, dependencies);
};

module.exports = factory({ express, cors, routesLoader, errorHandler });
module.exports.factory = factory;
