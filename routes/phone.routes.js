const router = require('express').Router();
const { getPhones, addPhone, deletePhone, updatePhone, getPhone } = require('../controllers/phone.controller');
const { /*authanticateToken*/ atighMiddleware} = require('../utils/auth');


 
router.get("/", getPhones);
router.get("/:id", getPhone);
router.post("/add-phone",addPhone);
router.delete("/delete-phone/:id", deletePhone);
router.put("/update-phone/:id", updatePhone);

module.exports = router;