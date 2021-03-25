const verifySignature = require('@src/middlewares/verifySignature');
const postWebhook = require('@src/controllers/postWebhook');

function factory({ verifySignature, postWebhook }) {
    return {
        method: 'post',
        route: '/',
        handlers: [
            verifySignature,
            postWebhook,
        ],
    };
};

module.exports = factory({ verifySignature, postWebhook });
module.exports.factory = factory;
