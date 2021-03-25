const express = require('express');
const cors = require('cors');
const routesLoader = require('@src/loaders/routesLoader.js');

function app({ express, cors, routesLoader }) {
    const app = express();
    app.use(cors());
    app.use(express.json());

    routesLoader(app);

    return app;
}

function factory(dependencies) {
    return app.call(null, dependencies);
};

module.exports = factory({ express, cors, routesLoader });
module.exports.factory = factory;
