const Post = require("../models/post.model");

exports.postUp = async (req, res) => {
     await Post.drop();
    const post = await Post.create({ title:"title",image: "atigh image" , content:"Content" });
    console.log("Post seedm")
}