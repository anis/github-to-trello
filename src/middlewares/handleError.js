const wrapError = require('@src/errors/wrapError');

function factory({ wrapError }) {
    return (err, req, res, next) => {
        const error = wrapError(err);
        return res.status(error.httpCode).send(error.response);
    };
}

module.exports = factory({ wrapError });
module.exports.factory = factory;
