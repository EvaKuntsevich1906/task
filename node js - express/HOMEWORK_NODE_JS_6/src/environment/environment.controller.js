const express = require("express");
const {
    createEnvironment,
    getAllEnvironment,
    getAllEnvironmentByID,
    updateEnvironmentByID,
    deleteEnvironmentByID,
    patchEnvironmentByID
} = require("./environment.service")
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const gotEnvironment = await getAllEnvironment()
        res.status(200).send(gotEnvironment)
    } catch (err) {
        res.status(500).send(err.message)
    }

})

router.get("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const gotEnvironmentByID = await getAllEnvironmentByID(id)
        res.status(200).send(gotEnvironmentByID)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

router.post("/", async (req, res) => {
    try {
        const environment = req.body;
        const createdEnvironment = await createEnvironment(environment)
        res.status(200).send(createdEnvironment)
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.put("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const {
            label,
            category,
            priority
        } = req.body;
        const updatedEnvironmentByID = await updateEnvironmentByID(id, label, category, priority)
        res.status(200).send(updatedEnvironmentByID)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

router.patch("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const patchedEnvironmentByID = await patchEnvironmentByID(id, req.body)
        res.status(200).send(patchedEnvironmentByID)
    } catch (err) {
        res.status(404).send(err.message)
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deletedEnvinronmentByID = await deleteEnvironmentByID(id)
        res.status(200).send(deletedEnvinronmentByID)
    } catch (err) {
        res.status(200).send(err.message)
    }
})
module.exports = router;