require("dotenv").config()
const express = require("express");
const logger = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const adminRouter = require("./api/admin/admin.router");
const hospitalRouter = require("./api/hospitals/hospital.router");
const itemRouter = require("./api/item/item.router");
const medicineRouter = require("./api/medicine/medicine.router");
const patientRouter = require("./api/patients/patient.router");
const pharmacistRouter = require("./api/pharmacists/pharmacist.router");
const physicianRouter = require("./api/physicians/physician.router");
const prescriptionRouter = require("./api/prescription/prescription.router");
const app = express();


//middleware to convert in to javascript all the json
app.use(express.json());
app.use(logger("dev"));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));
app.options("*", cors({ credentials: true, origin: "http://localhost:3000" }));
app.disable('etag');
//middlewware for routers
app.use("/api/pms/v1/admin", adminRouter);
app.use("/api/pms/v1/hospital", hospitalRouter);
app.use("/api/pms/v1/item", itemRouter);
app.use("/api/pms/v1/medicine", medicineRouter);
app.use("/api/pms/v1/patients", patientRouter);
app.use("/api/pms/v1/pharmacists", pharmacistRouter);
app.use("/api/pms/v1/physicians", physicianRouter);
app.use("/api/pms/v1/prescription", prescriptionRouter);








app.listen(process.env.APP_PORT,()=>{
    console.log("Server app is learning")
})