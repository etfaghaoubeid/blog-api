const router = require("express").Router();
const { login, signUp, getUsers, logOut } = require("../controllers/user.controller");


 router.post("/login",login );
 router.post("/sign-up",signUp);
 router.get("/users", getUsers);
 router.get("/logout", logOut);
 router.get("/logout", logOut);
module.exports = router; 