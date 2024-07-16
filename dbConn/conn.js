const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://bisolaodusanwo:odusanwo@schoolapp.rsqd2x0.mongodb.net/sgt?retryWrites=true&w=majority&appName=Schoolapp/sgt"
);

const db = mongoose.connection;

module.exports = db;
