require("dotenv").config();
const express = require("express");
const cors =require("cors");
const { phonesUp } = require("./seeds/seed.post");
const PORT = process.env.APP_PORT || 3333  
const app = express(); 
  
app.use(cors());
app.use(express.json())
app.use(express.urlencoded());
app.use("/api/v1/phones", require("./routes/phone.routes"));
app.use("/api/v1/auth" , require("./routes/user.routes"));
app.use("/api/v1/accesories" , require("./routes/accessory.routes"))
app.listen(PORT, async () => {
    phonesUp()
    console.log(`app listening on port : ${PORT}`)  
})