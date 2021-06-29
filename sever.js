require("dotenv").config();
const express = require("express");
const db = require("./config/config.db");
const Post = require("./models/post.model");
const { postUp } = require("./seeds/seed.post");
const PORT = process.env.APP_PORT || 3333
const app = express();


app.use(express.json())
app.use("/api", require("./routes/post.route"));
app.listen(PORT, async () => {
    // await Post.sync({force:true})
    console.log(`app listening on port : ${PORT}`)
    await db.sync()
    postUp()
})