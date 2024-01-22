// const bodyParser = require("body-parser");
const express = require("express");
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World! Am I live yet?')
  })
  module.exports = app;