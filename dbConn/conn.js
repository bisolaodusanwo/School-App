const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

console.log(process.env.MONGODB_CONNECTION_STRING);
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

const db = mongoose.connection;

module.exports = db;
