const { TRELLO_BOARD_ID } = require('@src/config');
const GttError = require('@src/errors/GttError');
const trello = require('@src/services/trello/trello');

function factory({ boardId, trello, GttError }) {
    return async (shortId) => {
        let card;
        try {
            card = await trello.getCard(boardId, shortId);
        } catch (error) {
            throw new GttError(500, error, 'Erreur lors de la collecte de la carte Trello');
        }

        if (!card) {
            return null;
        }

        return card.id;
    };
}

module.exports = factory({ boardId: TRELLO_BOARD_ID, trello, GttError });
module.exports.factory = factory;