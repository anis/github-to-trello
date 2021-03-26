const parsePullRequest = require('./parseActions/pullRequest');
const parsePullRequestReview = require('./parseActions/pullRequestReview');

function factory({ parsePullRequest, parsePullRequestReview }) {
    return (type, payload) => {
        if (type === 'pull_request') {
            return parsePullRequest(payload);
        }

        if (type === 'pull_request_review') {
            return parsePullRequestReview(payload);
        }

        return [];
    };
}

module.exports = factory({ parsePullRequest, parsePullRequestReview });
module.exports.factory = factory;