const { getAccessories, getAccessory, updateAccessory, addAccessory, deleteAccessory } = require("../controllers/accessory.controller");

const router = require("express").Router();
router.get("/" ,getAccessories);
router.get("/:id", getAccessory);
router.put("/:id" , updateAccessory);
router.delete("/:id" , deleteAccessory);
router.post("/add-accessory", addAccessory)

module.exports = router
