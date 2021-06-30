const router = require("express").Router();
const { login, signUp, getUsers } = require("../controllers/user.controller");


 router.post("/login",login );
 router.post("/sign-up",signUp)
 router.get("/users", getUsers)
module.exports = router; 