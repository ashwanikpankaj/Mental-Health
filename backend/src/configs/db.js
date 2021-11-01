const mongoose = require("mongoose");

const env = require("dotenv").config();

let connect = () => {
  return mongoose.connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ekhq7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
  );
};

module.exports = connect;


