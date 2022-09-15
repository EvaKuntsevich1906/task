const {
    post
} = require("../storage/post");

class Post {
    constructor() {
        this.post = post
    }
    getAllPosts = () => {
        if (this.post.length === 0) throw new Error("Not Found");
        return this.post;
    }

    getPostById = (id) => {
        const filtredPost = this.post.filter((el) => el.id === +id);
        if (filtredPost.length === 0) throw new Error("Not Found");
        return filtredPost;
    }

    createPost = (postFromClient) => {
        this.post.push(postFromClient)
        return this.post;
    }

    updatePostById = (id, postFromClient) => {
    const filtredPost = this.post.filter((el) => el.id != +id);
    if (filtredPost.length === this.post.length) throw new Error("Not Found");
    filtredPost.push({ ...id, ...postFromClient })
    return filtredPost
    }

    deletePostById = (id) => {
        const filtredPost = this.post.filter((el) => el.id != +id);
        if (filtredPost.length === this.post.length) throw new Error("Not Found");
        return filtredPost
    }
}

module.exports = {
    Post
}