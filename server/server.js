const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
    origin: ['192.168.0.165']
}));

app.get('/', (req, res) => {
    console.log("asdsad");
    res.send('Hello World!');
});
app.get('/apps', (req, res) => res.send('apps!'));

// node --env-file=.env .
app.listen(37373, () => console.log(`Example app listening on port ${process.env.EXPRESS_PORT}!`));
