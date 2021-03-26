const GttError = require('@src/errors/GttError');
const trello = require('@src/services/trello/trello');
const getListId = require('@src/services/trello/getListId');
const getCardId = require('@src/services/trello/getCardId');

function factory({ trello, getCardId, getListId, GttError }) {
    return async (action, shortId) => {
        // get full card id
        const cardId = await getCardId(shortId);
        if (cardId === null) {
            throw new GttError(400, error, 'La carte à déplacer n\'existe pas');
        }

        // get destination list id
        const listId = await getListId(action.to);
        if (listId === null) {
            throw new GttError(400, error, 'La liste de destination n\'existe pas');
        }

        // move card
        try {
            await trello.updateCardList(cardId, listId);
        } catch (error) {
            throw new GttError(500, error, 'Échec lors de la mise à jour de la carte Trello');
        }
    };
}

module.exports = factory({ trello, getCardId, getListId, GttError });
module.exports.factory = factory;