const Post = require("../models/post.model");

exports.getPosts = async (req, res) => {
    const posts = await  Post.findAll();
    // if(posts){
    //     console.log(posts)
    //     res.send("atigh data")

    // }
    

    // return res.json(posts)
    res.json(posts)

}
exports.getPost = async (req, res) => {

    res.send("get Post")
};
exports.createPost = async (req, res) => {
    res.send("create post ")
}
exports.deletePost = async (req, res) => {
    res.send("delte post")

};
exports.updatePost = async (req, res) => {
    res.send("update post")

}