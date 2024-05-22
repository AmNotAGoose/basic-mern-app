// Connect to database
require('dotenv').config();
const { mongoose } = require('mongoose');

console.log(`Attempting to connect to DB at ${process.env.MONGO_URI}`)

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connected to DB"))
.catch((err) => console.log(err));

const db = mongoose.connection;

module.exports = db;