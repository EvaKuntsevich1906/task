const express = require("express");
const router = express.Router();
const {
    Environment
} = require("./environment.service");


router.get("/", (req, res) => {
    try {
        const environment = new Environment();
        res.status(200).send(environment.getAllEnvironment(req.body));
    } catch (err) {
        res.status(404).send(err.message)
    }
})

router.get("/:id", (req, res) => {
    try {
        const environment = new Environment();
        const {
            id
        } = req.params
        res.status(200).send(environment.getEnvironmentById(id));
    } catch (err) {
        res.status(404).send(err.message)
    }
})

router.post("/", (req, res) => {
    try {
        const obj = req.body
        const environment = new Environment();
        res.status(200).send(environment.createEnvironments(obj))
    } catch (err) {
        res.status(404).send(err.message)
    }
})

router.put("/", (req, res) => {
    try {
        const {
            id
        } = req.params;
        const environment = new Environment();
        res.status(200).send(environment.updateEnvinronment(id, req.body))
    } catch (err) {
        res.status(404).send(err.message)
    }
})

router.delete("/:id", (req, res) => {
    try {
        const {
            id
        } = req.params;
        const environment = new Environment();
        res.status(200).send(environment.deleteEnvironmentById(id))
    } catch (err) {
        res.status(404).send(err.message)
    }
})


module.exports = router;