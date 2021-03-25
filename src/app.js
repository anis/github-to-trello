// loaders
const app = require('@src/loaders/appLoader');

app.listen(80, () => {
    console.log(`Server is now running on port 80! :)`);
});