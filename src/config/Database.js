import dotenv from "dotenv";
import mysql from "mysql2";

dotenv.config();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  database: "db_rentcar",
  password: "",
}).promise();

export default db;
