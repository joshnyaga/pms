const {createUser , updateUsers, login, checkLogIn, logout, getAdmin} = require("./admin.controller");
const { verifyTokenAdmin} = require("../../verifyToken");
const router = require("express").Router();

router.post("/", verifyTokenAdmin, createUser);
router.post("/logged", verifyTokenAdmin, checkLogIn);
router.get("/logout*", logout);
router.get("/admin*",verifyTokenAdmin, getAdmin);
router.post("/login", login);
router.put("/",verifyTokenAdmin, updateUsers);

module.exports =router;