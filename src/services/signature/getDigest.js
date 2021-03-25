const { createHmac } = require('crypto');
const { GITHUB_SECRET } = require('@src/config');

function factory({ createHmac, secret }) {
    return (payload) => {
        const hmac = createHmac('sha256', secret);
        hmac.update(payload);
        return `sha256=${hmac.digest('hex')}`;
    };
}

module.exports = factory({ createHmac, secret: GITHUB_SECRET });
module.exports.factory = factory;
