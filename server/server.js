require('dotenv').config({path:'./.env'})
const express = require('express');
// const db = require('./db/connection.js');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})

const APP_PORT = process.env.APP_PORT;

app.listen(APP_PORT, () => {
    console.log(`Server is running on port ${APP_PORT}`);
})