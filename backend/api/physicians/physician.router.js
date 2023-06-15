const {createPhysician,getPhysicianById, getPhysicians,updatePhysician,deletePhysician} = require("./physician.controller");
const {verifyToken} = require("../../verifyToken");
const router = require("express").Router();

router.post("/", verifyToken, createPhysician);
router.get("/", verifyToken,getPhysicians);
router.get("/:id", verifyToken,getPhysicianById);
router.patch("/", verifyToken,updatePhysician);
router.delete("/:id", verifyToken,deletePhysician);

module.exports =router;