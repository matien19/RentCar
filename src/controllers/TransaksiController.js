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

export const createTransaksi = async (req, res) => {
  const { idUser, idArmada, idDriver, tglMulai, durasi, price } = req.body;
  const total = price * durasi;
  const currentTimestamp = Date.now();
  const date = new Date(currentTimestamp);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const noTransaksi = idUser + idArmada + idDriver + durasi + year + month + day + hours + minutes;

  try {
    await db.query(`INSERT INTO tbl_transaksi (no_transaksi, id_user, id_armada, id_driver, tgl_mulai, durasi, total) values (?, ?, ?, ?, ?, ?, ?)`, [noTransaksi, idUser, idArmada, idDriver, tglMulai, durasi, total]);
    res.status(201).json({ msg: "Transaksi Created successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
