const parseActions = require('@src/services/github/parseActions');
const getTrelloCardId = require('@src/services/github/getTrelloCardId');
const executeAction = require('@src/services/trello/executeAction');

function factory({ parseActions, getTrelloCardId, executeAction }) {
    return async (req, res, next) => {
        const actions = parseActions(req.headers['x-github-event'], req.body);
        if (actions.length === 0) {
            return res.status(200).send({
                ignored: true,
                message: 'No actions triggered',
            });
        }

        const trelloShortId = getTrelloCardId(req.body.pull_request.title);
        if (trelloShortId === null) {
            return res.status(200).send({
                ignored: true,
                message: 'No matching Trello Card ID was found',
            });
        }

        try {
            await Promise.all(actions.map(action => executeAction(action, trelloShortId)));
        } catch (error) {
            next(error);
        }

        return res.status(200).send({
            actions,
        });
    };
}

module.exports = factory({ parseActions, getTrelloCardId, executeAction });
module.exports.factory = factory;
