import express from "express";
import { getArmadas, getArmadaById, createArmada } from "../controllers/ArmadaController.js";

const router = express.Router();

router.get("/Armadas", getArmadas);
router.get("/Armadas/:id", getArmadaById);
router.post("/Armadas", createArmada);

export default router;
