import express from "express";
import { Login, Logout, Register, getUsers } from "../controllers/UserController.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { verfyToken } from "../middleware/VerifyToken.js";

const router = express.Router();

router.get("/users", verfyToken, getUsers);
router.post("/register", Register);
router.post("/login", Login);
router.get("/token", refreshToken);
router.delete("/logout", Logout);

export default router;
