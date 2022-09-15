const express = require("express");
const {
    Post
} = require("./posts.service");
const {validPostKey} = require("../helper/validation");
const router = express.Router();


router.get("/", (req, res) => {
    try {
        const post = new Post();
        res.status(200).send(post.getAllPosts());
    } catch (err) {
        res.status(404).send(err.message);
    }

})

router.get("/:id", (req, res) => {
    try {
        const {
            id
        } = req.params;
        const post = new Post();
        res.status(200).send(post.getPostById(id))
    } catch (err) {
        res.status(404).send(err.message);
    }
})

router.post("/", validPostKey, (req, res) => {
    try {
        const post = new Post();
        res.status(200).send(post.createPost(req.body))
    } catch (err) {
        res.status(404).send(err.message);
    }
})

router.put("/:id", (req, res) => {
    try {
        const {
            id
        } = req.params;
        const post = new Post();
        res.status(200).send(post.updatePostById(id, req.body))
    } catch (err) {
        res.status(404).send(err.message);
    }
});

router.delete("/:id", (req, res) => {
    try {
        const {
            id
        } = req.params;
        const post = new Post();
        res.status(200).send(post.deletePostById(id))
    } catch (err) {
        res.status(404).send(err.message);
    }
});


module.exports = router;