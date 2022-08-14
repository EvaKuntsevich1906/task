const express = require("express");
const {
    getDataById,
    createData,
    updateData,
    deleteApi
} = require("./api.service")
const router = express.Router();
const fs = require("fs")
router.get("/", (req, res) => {
    res.status(200).send(`Hello world`);
})

router.get("/:id", (req, res) => {
    try {
        const {
            id
        } = req.params;
        const user = getDataById(id);
        res.status(200).send(user)
    } catch (err) {
        res.status(404).send(err.message)
    }
});

router.post("/", (req, res) => {
    try {
        const obj = req.body
        console.log(obj);
        const user = createData(obj)
        res.status(200).send(user)
    } catch (err) {
        res.status(404).send(err.message);
    }
})
router.put("/:id", (req, res) => {
    try {
        const {
            id
        } = req.params;
        const user = updateData(id, req.body);
        res.status(200).send(user)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

router.delete("/:id", (req, res) => {
    try {
        const {
            id
        } = req.params;
        const deletedApi = deleteApi(id);
        res.status(200).send(deletedApi)
    } catch (err) {
        res.status(404).send(err.message)
    }
})

module.exports = router;