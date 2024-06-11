import express from "express";
import { createTransaksi, getTransaksi, getTransaksiByNo } from "../controllers/TransaksiController.js";

const router = express.Router();

router.get("/transaksi", getTransaksi);
router.get("/transaksi/:no_transaksi", getTransaksiByNo);
router.post("/transaksi", createTransaksi);

export default router;
