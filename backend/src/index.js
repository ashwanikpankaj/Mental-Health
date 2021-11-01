const express = require('express');

const {register, login} = require("./controllers/authController")

var cors = require('cors')

const app = express();

app.use(cors()) 
app.use(express.json());

app.post("/register", register);
app.post("/login", login);

module.exports = app;