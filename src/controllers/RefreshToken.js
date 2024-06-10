import db from "../config/Database.js";
import jwt from "jsonwebtoken";

export const refreshToken = async (req, res) => {
  const ACCES_TOKEN_SECRET = "tien123";
  const REFRESH_TOKEN_SECRET = "matien";
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) return res.sendStatus(401);
    const [user] = await db.query(`SELECT * FROM tbl_users where refresh_token = ?`, [refreshToken]);
    if (!user[0]) return res.sendStatus(401);
    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, decoded) => {
      if (err) return res.sendStatus(401);
      const userId = user[0].id_user;
      const name = user[0].name;
      const email = user[0].email;
      const noTelp = user[0].no_telp;
      const accessToken = jwt.sign({ userId, name, email, noTelp }, ACCES_TOKEN_SECRET, {
        expiresIn: "1day",
      });
      res.json({ accessToken });
    });
  } catch (error) {
    console.log(error);
  }
};
