const Post = require("../models/post.model");

exports.getPosts = async (req, res) => {
    const posts = await  Post.findAll();
   
    res.json(posts)

}
exports.getPost = async (req, res) => {
    res.send("get Post" , req.user)
};
exports.createPost = async (req, res) => {
    try {
        const {title  , image ,content, userId} = req.body;
        console.log(req.body ,"req.body ,111111111111" )
        const post = new Post({title, image ,content ,userId:req.userId})
        const savedPost =   await post.save();
        return res.status(201).json({savedPost , message:"post was created successfuly"})
    } catch (error) {
        return res.status(401).json({message:"unauthorized"})
        
    }
   
}
exports.deletePost = async (req, res) => {
    res.send("delte post")

};
exports.updatePost = async (req, res) => {
    res.send("update post")

}