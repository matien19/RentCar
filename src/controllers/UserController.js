import db from "../config/Database.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const [users] = await db.query("SELECT * FROM tbl_users");
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

export const Register = async (req, res) => {
  const { name, email, password, no_telp } = req.body;
  //   if (password !== rePassword) return res.status(400).json({ msg: "Password dan RePasword tidak sama" });
  const [user] = await db.query(`SELECT * FROM tbl_users where email = ?`, [email]);
  if (user.length > 0) {
    return res.status(400).json({ msg: "Email sudah terdaftar" });
  } else {
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
      await db.query("INSERT INTO tbl_users (name, email, password, no_telp) VALUES (?,?,?,?) ", [name, email, hashPassword, no_telp]);
      res.json({ msg: "Register berhasil" });
    } catch (error) {
      console.log(error);
    }
  }
};

export const Login = async (req, res) => {
  const ACCES_TOKEN_SECRET = "tien123";
  const REFRESH_TOKEN_SECRET = "matien";
  try {
    let { email, password } = req.body;
    const [user] = await db.query(`SELECT * FROM tbl_users where email = ?`, [email]);
    const match = await bcrypt.compare(password, user[0].password);
    if (!match) return res.status(400).json({ msg: "Password Salah" });
    const userId = user[0].id_user;
    const name = user[0].name;
    email = user[0].email;
    const noTelp = user[0].no_telp;
    const accessToken = jwt.sign({ userId, name, email, noTelp }, ACCES_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    const refreshToken = jwt.sign({ userId, name, email, noTelp }, REFRESH_TOKEN_SECRET, {
      expiresIn: "1d",
    });
    await db.query("UPDATE tbl_users SET refresh_token = ? where id_user = ?", [refreshToken, userId]);
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 48 * 60 * 60 * 1000,
    });
    res.json({ accessToken });
  } catch (error) {
    res.status(404).json({ msg: "Email tidak ditemukan" });
  }
};

export const Logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  if (!refreshToken) return res.sendStatus(204);
  const [user] = await db.query(`SELECT * FROM tbl_users where refresh_token = ?`, [refreshToken]);
  if (!user[0]) return res.sendStatus(204);
  const userId = user[0].id_user;
  await db.query("UPDATE tbl_users SET refresh_token = ? where id_user = ?", [null, userId]);
  res.clearCookie("refreshToken");
  return res.sendStatus(200);
};
