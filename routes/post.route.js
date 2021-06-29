const router = require('express').Router();
const { getPosts, createPost, deletePost, updatePost } = require('../controllers/post.controller');



router.get("/", getPosts);
router.post("/create-post", createPost);
router.delete("/delete-post/:id", deletePost);
router.put("/update-post/:id", updatePost);

module.exports = router;