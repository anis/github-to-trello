const verifySignature = require('@src/services/signature/verify');

function factory({ verifySignature }) {
    return (req, res, next) => {
        verifySignature(
            req.rawBody,
            req.headers && req.headers['x-hub-signature-256'],
        );
        next();
    };
}

module.exports = factory({ verifySignature });
module.exports.factory = factory;
