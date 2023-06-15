const {createPrescription,getPrescriptionById, getPrescriptions,updatePrescription,deletePrescription} = require("./prescription.controller");
const {verifyToken} = require("../../verifyToken");
const router = require("express").Router();

router.post("/", verifyToken, createPrescription);
router.get("/customer/:cid", verifyToken,getPrescriptions);
router.get("/:id", verifyToken,getPrescriptionById);
router.patch("/", verifyToken,updatePrescription);
router.delete("/:id", verifyToken,deletePrescription);

module.exports =router;