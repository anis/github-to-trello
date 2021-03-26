module.exports = (title) => {
    const match = title.match(/^.+\(([0-9]+)\).*/i);
    if (match === null) {
        return null;
    }

    return parseInt(match[1], 10);
};