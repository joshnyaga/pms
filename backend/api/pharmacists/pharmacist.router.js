const {createPharmacist,getPharmacistById, getPharmacists,updatePharmacists,deletePharmacist,login, checkLogIn, getPharmacist, logout} = require("./pharmacist.controller");
const {verifyToken, verifyTokenAdmin} = require("../../verifyToken");
const router = require("express").Router();

router.post("/", verifyTokenAdmin, createPharmacist);
router.get("/", verifyToken,getPharmacists);
router.get("/:id", verifyToken,getPharmacistById);
router.patch("/", verifyToken,updatePharmacists);
router.delete("/:id", verifyTokenAdmin,deletePharmacist);
router.post("/login",login);
router.post("/logged", verifyToken, checkLogIn);
router.get("/logout/user", logout);
router.get("/pharmacist/user",verifyToken, getPharmacist);

module.exports =router;