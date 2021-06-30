require("dotenv").config();
const express = require("express");
const db = require("./config/config.db");
const Post = require("./models/post.model");
const User = require("./models/user.model");
const { postUp } = require("./seeds/seed.post");
const cors =require("cors")
const PORT = process.env.APP_PORT || 3333
const app = express();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded());
app.use("/api/post", require("./routes/post.route"));
app.use("/api/auth" , require("./routes/user.route"));
app.listen(PORT, async () => {
    // await Post.sync({alter:true}) 
    // await User.sync({alter:true})
    console.log(`app listening on port : ${PORT}`)  
})