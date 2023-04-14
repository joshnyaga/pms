const {createPharmacist,getPharmacistById, getPharmacists,updatePharmacists,deletePharmacist,login} = require("./pharmacist.controller");
const {verifyToken, verifyTokenAdmin} = require("../../verifyToken");
const router = require("express").Router();

router.post("/", verifyTokenAdmin, createPharmacist);
router.get("/", verifyToken,getPharmacists);
router.get("/:id", verifyToken,getPharmacistById);
router.patch("/", verifyToken,updatePharmacists);
router.delete("/:id", verifyTokenAdmin,deletePharmacist);
router.post("/login",login);

module.exports =router;