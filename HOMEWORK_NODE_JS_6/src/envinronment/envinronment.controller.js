const express = require("express");
const {
    createEnvinronment,
    getAllEnvinronment, 
    getEnvinronmentById,
    updEnvinronmentById
} = require("./envinronment.service");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const gotEnvinronment = await getAllEnvinronment()
        res.status(200).send(gotEnvinronment);
    } catch (err) {
        res.status(500).send(err.message)
    }

});

router.get("/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const gotEnvinronmentByiD = await getEnvinronmentById(id)
        res.status(200).send(gotEnvinronmentByiD);
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.post("/", async (req, res) => {
    try {
        const envinronment = req.body;
        const createdEnvinronment = await createEnvinronment(envinronment)
        res.status(200).send(createdEnvinronment);
    } catch (err) {
        res.status(500).send(err.message)
    }
})

router.put("/:id", async (req,res) => {
    try{
        const {id} = req.params;
        const updateEnvinronmentByIdDB = await updEnvinronmentById(id)
        res.status(200).send(updateEnvinronmentByIdDB);
    } catch  (err) {
        res.status(500).send(err.message)
    }
})

module.exports = router