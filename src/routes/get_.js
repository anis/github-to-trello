module.exports = {
    method: 'get',
    route: '/',
    handler(req, res) {
        return res.status(200).send({
            response: 'All clear',
        });
    },
};
