import express from "express";
import { getDrivers, getDriverById, createDriver } from "../controllers/DriverController.js";

const router = express.Router();

router.get("/Drivers", getDrivers);
router.get("/Drivers/:id", getDriverById);
router.post("/Drivers", createDriver);

export default router;
