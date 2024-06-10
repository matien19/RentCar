import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import FileUpload from "express-fileupload";
import cookieParser from "cookie-parser";
import UserRoute from "./routes/UserRouter.js";
import ArmadaRouter from "./routes/ArmadaRouter.js";
import DriverRouter from "./routes/DriverRouter.js";

const PORT = 5000;
const app = express();

dotenv.config();

app.use(FileUpload());
app.use(express.static("public"));
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(UserRoute);
app.use(ArmadaRouter);
app.use(DriverRouter);

app.listen(PORT, () => {
  console.log(`server berhasil diruning http://localhost:${PORT}`);
});
