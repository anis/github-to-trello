module.exports = (payload) => {
    if (payload.action !== 'submitted') {
        return [];
    }

    if (payload.review.state === 'APPROVED') {
        return [
            { action: 'move', to: '✅ PRs validées' }
        ];
    }

    return [
        { action: 'move', to: '🛠 PRs à corriger' }
    ];
};