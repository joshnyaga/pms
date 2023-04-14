const {createHospital,getHospitalById, getHospitals,updateHospital,deleteHospital} = require("./hospital.controller");
const {verifyToken} = require("../../verifyToken");
const router = require("express").Router();

router.post("/", verifyToken, createHospital);
router.get("/", verifyToken,getHospitals);
router.get("/:id", verifyToken,getHospitalById);
router.patch("/", verifyToken,updateHospital);
router.delete("/:id", verifyToken,deleteHospital);

module.exports =router;