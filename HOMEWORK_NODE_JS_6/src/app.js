const express = require("express");
const envinronment = require("./envinronment/envinronment.controller");
const bodyParser = require("body-parser")
const app = express();

app.use(bodyParser.json());

app.use ("/envinronment", envinronment)

app.use ((err, req, res, next) => {
    res.status(500).send(err.message)
})

module.exports = app;