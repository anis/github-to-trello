const GttError = require('@src/errors/GttError.js');

function factory({ GttError }) {
    return (error) => {
        if (error instanceof GttError) {
            return error;
        } else {
            return new GttError(500, error, 'Une erreur inconnue est survenue');
        }
    };
}

module.exports = factory({ GttError });
module.exports.factory = factory;
