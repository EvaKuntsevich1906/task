const express = require("express");
const {
    taskById,
    createTask,
    updateById, 
    deleteById
} = require("./src/service");
const app = express();
app.use(express.json())


app.get("/:id", (req, res) => {
    try {
        const result = taskById(req.params.id)
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send(error.message)
    }
});

app.post("/", (req, res) => {
    try {
        const resultat = createTask(req.body)
        res.status(200).send(resultat)
    } catch (error) {
        res.status(404).send(error.message)
    }

})

app.put("/:id", (req, res) => {
    try {
        const resultation = updateById(req.params.id);
        res.status(200).send(resultation);
    } catch (error) {
        res.status(404).send(error.message)
    }
})

app.delete("/:id", (req, res) => {
            try {
                res.status(200).send(delete(req.params.id));
            } catch (error) {
                res.status(404).send(error.message)
            }
        });
        const port = 3000; app.listen(port, () => {
            console.log(`Server is working`);
        });