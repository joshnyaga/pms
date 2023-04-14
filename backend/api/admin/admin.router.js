const {createUser , updateUsers, login} = require("./admin.controller");
const { verifyTokenAdmin} = require("../../verifyToken");
const router = require("express").Router();

router.post("/", verifyTokenAdmin, createUser);
router.post("/login", login);
router.put("/",verifyTokenAdmin, updateUsers);

module.exports =router;