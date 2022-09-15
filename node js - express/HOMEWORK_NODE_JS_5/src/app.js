const express = require("express");
const bodyParser = require("body-parser");
const environment = require("./environment/environment.controller")
const app = express();

app.use(bodyParser.json());

app.use("/environment", environment);

app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

module.exports = app