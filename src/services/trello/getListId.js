const { TRELLO_BOARD_ID } = require('@src/config');
const GttError = require('@src/errors/GttError');
const trello = require('@src/services/trello/trello');

function factory({ trello, boardId, GttError }) {
    return async (searchedName) => {
        let lists = [];
        try {
            lists = await trello.getListsOnBoard(boardId);
        } catch (error) {
            throw new GttError(500, error, 'Erreur lors de la collecte des listes Trello');
        }

        const list = lists.find(({ name }) => name === searchedName);
        if (list === undefined) {
            return null;
        }

        return list.id;
    };
}

module.exports = factory({ boardId: TRELLO_BOARD_ID, trello, GttError });
module.exports.factory = factory;