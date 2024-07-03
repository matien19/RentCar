import db from "../config/Database.js";
import path from "path";
// import fs from "fs";

export const getDrivers = async (req, res) => {
  try {
    const [response] = await db.query("SELECT * FROM tbl_driver");
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getDriverById = async (req, res) => {
  try {
    const id = req.params.id;
    const [response] = await db.query(`SELECT * FROM tbl_driver WHERE id = ` + id);
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createDriver = async (req, res) => {
  const { name, deskripsi, noTelp, instagram } = req.body;
  if (req.files === null) return res.status(400).json({ msg: "No File Uploaded" });

  const file = req.files.file;
  const fileSize = file.data.length;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get("host")}/images/driver/${fileName}`;
  const allowedType = [".png", ".jpg", ".jpeg"];

  if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "invalid Image" });
  if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less then 5 MB" });

  file.mv(`./public/images/driver/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
    try {
      await db.query(`INSERT INTO tbl_Driver (name, foto, deskripsi, no_telp, instagram) values (?, ?, ?, ?, ?)`, [name, url, deskripsi, noTelp, instagram]);
      res.status(201).json({ msg: "Driver Created successfuly" });
    } catch (error) {
      console.log(error.message);
    }
  });
};

// export const updateArmada = async (req, res) => {
//   const Armada = await Armada.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   if (!Armada) return res.status(404).json({ msg: "Armada Not Found" });
//   let fileName = "";
//   if (req.files === null) {
//     fileName = Armada.image;
//   } else {
//     const file = req.files.file;
//     const fileSize = file.data.length;
//     const ext = path.extname(file.name);
//     fileName = file.md5 + ext;
//     const allowedType = [".png", ".jpg", ".jpeg"];

//     if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: "invalid Image" });
//     if (fileSize > 5000000) return res.status(422).json({ msg: "Image must be less then 5 MB" });

//     const filepath = `./public/images/${Armada.image}`;
//     fs.unlinkSync(filepath);

//     file.mv(`./public/images/${fileName}`, (err) => {
//       if (err) return res.status(500).json({ msg: err.message });
//     });
//   }
//   const name = req.body.title;
//   const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
//   try {
//     await Armada.update(
//       { name: name, image: fileName, url: url },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//     res.status(200).json({ msg: "Armada Updated Successfuly" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// export const deleteArmada = async (req, res) => {
//   const Armada = await Armada.findOne({
//     where: {
//       id: req.params.id,
//     },
//   });
//   if (!Armada) return res.status(404).json({ msg: "Armada Not Found" });
//   try {
//     const filepath = `./public/images/${Armada.image}`;
//     fs.unlinkSync(filepath);
//     await Armada.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(200).json({ msg: "Armada Deleted Succesfully" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
