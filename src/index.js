const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    return res.status(200).send({
        response: 'Everything is working just fine'
    });
});

app.listen(80, () => {
    console.log(`Server is now running on port 80! :)`);
});