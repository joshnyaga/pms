const {createMedicine,getMedicineById, getMedicines,updateMedicine,deleteMedicine} = require("./medicine.controller");
const {verifyToken, verifyTokenAdmin} = require("../../verifyToken");
const router = require("express").Router();

router.post("/", verifyTokenAdmin, createMedicine);
router.get("/", verifyToken,getMedicines);
router.get("/:id", verifyToken,getMedicineById);
router.patch("/", verifyTokenAdmin,updateMedicine);
router.delete("/:id", verifyTokenAdmin,deleteMedicine);

module.exports =router;