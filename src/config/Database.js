// import { Sequelize } from "sequelize";
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
//   host: process.env.DB_HOST,
//   dialect: process.env.DB_DIALECT,
// });

// export default db;

import mysql from 'mysql2';

const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	port: "3306",
	database: "Rental",
	password: "",
});



  export default db
