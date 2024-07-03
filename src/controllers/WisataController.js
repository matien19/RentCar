import db from "../config/Database.js";
import path from "path";

export const getWisatas = async (req, res) => {
  try {
    const [response] = await db.query("SELECT * FROM tbl_Wisata");
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getWisataById = async (req, res) => {
  try {
    const id = req.params.id;
    const [response] = await db.query(`SELECT * FROM tbl_Wisata WHERE id = ` + id);
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createWisata = async (req, res) => {
  const { name, deskripsi, noTelp, instagram } = req.body;
  if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });

  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/Wisata/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "invalid Image" });
  if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less then 5 MB" });

  file.mv(`./public/images/Wisata/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await db.query(`INSERT INTO tbl_Wisata (name, foto, deskripsi, no_telp, instagram) values (?, ?, ?, ?, ?)`, [name, url, deskripsi, noTelp, instagram]);
      res.status(201).json({ msg: "Wisata Created successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};
