const express = require("express");
const environment = require("./environment/environment.controller")
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json())
app.use("/environment", environment)

app.use ("/", (err, req, res, next) => {
    res.status(500).send(err.message);
})


module.exports = app;
