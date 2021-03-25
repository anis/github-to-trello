const GttError = require('@src/errors/GttError');
const getDigest = require('@src/services/signature/getDigest');

function factory({ GttError, getDigest }) {
    return (payload, signature) => {
        if (getDigest(payload) !== signature) {
            throw new GttError(403, new Error('The signature is invalid.'));
        }
    };
}

module.exports = factory({ GttError, getDigest });
module.exports.factory = factory;
