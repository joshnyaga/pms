const {createItem,getItemById, getItems,updateItem,deleteItem} = require("./item.controller");
const {verifyToken} = require("../../verifyToken");
const router = require("express").Router();

router.post("/", verifyToken, createItem);
router.get("/prescription/:id", verifyToken,getItems);
router.get("/:id", verifyToken,getItemById);
router.patch("/", verifyToken,updateItem);
router.delete("/:id", verifyToken,deleteItem);

module.exports =router;