import db from "../config/Database.js";

export const getTransaksi = async (req, res) => {
  try {
    const [response] = await db.query("SELECT * FROM tbl_transaksi");
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getTransaksiByNo = async (req, res) => {
  try {
    const no_transaksi = req.params.no_transaksi;
    const [response] = await db.query(`SELECT * FROM tbl_transaksi WHERE no_transaksi = ` + no_transaksi);
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getTransaksiSaya = async (req, res) => {
  try {
    const userId = req.params.id;
    const [response] = await db.query(`SELECT * FROM tbl_transaksi WHERE id_user = ?`, [userId]);
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createTransaksi = async (req, res) => {
  const { noTransaksi, idUser, idArmada, idDriver, tglMulai, durasi, price, alamat } = req.body;
  const total = price * durasi;

  try {
    await db.query(`INSERT INTO tbl_transaksi (no_transaksi, id_user, id_armada, id_driver, tgl_mulai, durasi, total, alamat) values (?, ?, ?, ?, ?, ?, ?, ?)`, [noTransaksi, idUser, idArmada, idDriver, tglMulai, durasi, total, alamat]);
    res.status(201).json({ msg: "Transaksi Created successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
