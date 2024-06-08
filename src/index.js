import Express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors module
import router from "./routes/userRoute.js";
import cookieParser from "cookie-parser";
import db from "./config/Database.js";
const PORT = 3000;
const app = Express();
dotenv.config();

// try {
//   await db.authenticate();
//   console.log("Database conected");

// } catch (error) {
// console.error(error)
// }

app.use(cookieParser());
app.use(cors());
app.use(Express.json());
app.use(router);

// app.use((req, res, next) => {
//   req.refresh_token = req.body.refreshToken; // Adjust based on how you send the refresh token
//   next();
// });


app.listen(PORT, ()=>{
    console.log(`server berhasil diruning ${PORT}`);
});
