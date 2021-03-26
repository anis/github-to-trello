const Trello = require('trello');
const { TRELLO_KEY, TRELLO_SECRET } = require('@src/config');

function factory({ Trello, key, secret }) {
    return new Trello(key, secret);
}

module.exports = factory({ Trello, key: TRELLO_KEY, secret: TRELLO_SECRET });
module.exports.factory = factory;