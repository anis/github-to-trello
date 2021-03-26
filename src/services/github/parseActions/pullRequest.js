module.exports = (payload) => {
    if (payload.action === 'opened') {
        if (payload.pull_request.draft) {
            return [
                { action: 'move', to: '👷🏼‍♂️ En cours de développement' }
            ];
        } else {
            return [
                { action: 'move', to: '🔍 PR en attente' }
            ];
        }
    }

    if (payload.action === 'closed' && payload.pull_request.merged) {
        return [
            { action: 'move', to: '✅ PRs mergées' }
        ];
    }

    if (payload.action === 'ready_for_review') {
        return [
            { action: 'move', to: '🔍 PR en attente' }
        ];
    }

    if (payload.action === 'converted_to_draft') {
        return [
            { action: 'move', to: '👷🏼‍♂️ En cours de développement' }
        ];
    }

    if (payload.action === 'reopened') {
        return [
            { action: 'move', to: '🔍 PR en attente' }
        ];
    }

    return [];
};