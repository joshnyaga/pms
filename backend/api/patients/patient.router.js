const {createPatient,getPatientById, getPatients,updatePatient,deletePatient} = require("./patient.controller");
const {verifyToken} = require("../../verifyToken");
const router = require("express").Router();

router.post("/", verifyToken, createPatient);
router.get("/", verifyToken,getPatients);
router.get("/:id", verifyToken,getPatientById);
router.patch("/", verifyToken,updatePatient);
router.delete("/:id", verifyToken,deletePatient);

module.exports =router;