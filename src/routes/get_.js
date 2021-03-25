module.exports = {
    method: 'get',
    route: '/',
    handlers: [(req, res) => {
        return res.status(200).send({
            response: 'All clear',
        });
    }],
};
