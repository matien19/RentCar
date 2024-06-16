import express from "express";
import { getTransaksiSaya, createTransaksi, getTransaksi, getTransaksiByNo } from "../controllers/TransaksiController.js";

const router = express.Router();

router.get("/transaksi", getTransaksi);
router.get("/transaksi/:no_transaksi", getTransaksiByNo);
router.post("/transaksi", createTransaksi);
router.get("/transaksi_saya/:id", getTransaksiSaya);

export default router;
