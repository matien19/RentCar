import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { Link, useParams } from "react-router-dom";
import "../../css/AfterLogin/FormDetailPesanan.css";
import Footer from "../../components/Footer";
import Header from "../../components/NavBarAfterLogin";

function DetailPesanan() {
  const [, setIdArmada] = useState("");
  const [nameArmada, setNameArmada] = useState("");
  const [seats, setSeats] = useState("");
  const [luggage, setLuggage] = useState("");
  const [imgArmada, setImgArmada] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [noTelp, setNoTelp] = useState("");
  const [, setIdDriver] = useState("");
  const [nameDriver, setNameDriver] = useState("");
  const [noDriver, setNoDriver] = useState("");
  const [tglMulai, setTglMulai] = useState("");
  const [durasi, setDurasi] = useState("");
  // const [price, setPrice] = useState("");
  const [total, setTotal] = useState("");
  const [alamat, setAlamat] = useState("");
  const { no_transaksi } = useParams();

  useEffect(() => {
    const initializeData = async () => {
      await refreshToken();
      await getTransaksiByNo();
    };

    initializeData();
  }, []);

  const refreshToken = async () => {
    try {
      const response = await axios.get("http://localhost:5000/token", { withCredentials: true });
      const decoded = jwtDecode(response.data.accessToken);
      setName(decoded.name);
      setEmail(decoded.email);
      setNoTelp(decoded.noTelp);
    } catch (error) {
      console.log(error);
    }
  };

  const getTransaksiByNo = async () => {
    try {
      const response = await axios.get("http://localhost:5000/transaksi/" + no_transaksi);
      const data = response.data[0];

      setIdArmada(data.id_armada);
      setIdDriver(data.id_driver);
      setDurasi(data.durasi);
      setAlamat(data.alamat);
      setTglMulai(data.tgl_mulai);
      // setPrice(data.price);
      setTotal(data.total);
      getDetails(data.id_driver, data.id_armada); // Pass ids to getDetails
    } catch (error) {
      console.log(error.message);
    }
  };

  const getDetails = async (idDriver, idArmada) => {
    try {
      const [driverResponse, armadaResponse] = await Promise.all([axios.get(`http://localhost:5000/Drivers/${idDriver}`), axios.get(`http://localhost:5000/Armadas/${idArmada}`)]);

      const driverData = driverResponse.data[0];
      const armadaData = armadaResponse.data[0];

      setNameDriver(driverData.name);
      setNoDriver(driverData.no_telp);

      setNameArmada(armadaData.name);
      setSeats(armadaData.seats);
      setLuggage(armadaData.luggage);
      setImgArmada(armadaData.image);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      <div className='DetailContainer'>
        <div className='gridSatuDetail'>
          <div className='formLokasi'>
            <h5>Lokasi Penjemputan</h5>
            <div className='mt-3'>
              <h6>
                <h6>{new Date(tglMulai).toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric" })}</h6>
              </h6>
              <h6> {alamat}</h6>
            </div>
          </div>

          <div className='formDetailKontak'>
            <h3>Detail Kontak</h3>
            <h4>{name}</h4>
            <h5>{email}</h5>
            <h4>{noTelp}</h4>

            <br />

            <h3>Detail Pengemudi</h3>
            <h4>{nameDriver}</h4>
            <h5>{noDriver}</h5>
          </div>

          <div className=''>
            <div className='card-informasi-layanan'>
              <h4 className='mb-3 text-informasi'>Informasi Layanan</h4>
              <div className='d-flex justify-content-between align-items-center'>
                <div>
                  <p>
                    <i className='fas fa-clock' /> 24 Jam Layanan Darurat
                  </p>
                  <p>
                    <i className='fas fa-car' /> Pengganti Mobil Rusak
                  </p>
                  <p>
                    <i className='fas fa-shield-alt' /> Asuransi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='formDetailPesanan1'>
          <div className='formMerkMobil'>
            <h2>{nameArmada}</h2>
          </div>

          <div className='FormPesanan'>
            <div>
              <img src={imgArmada} alt='' />
            </div>

            <div className='dataInteriorMobil'>
              <div className='kursi'>
                <div className='icon'>
                  <i className='fas fa-car' />
                </div>

                <div className='title'>
                  <h5>{seats} kursi </h5>
                </div>
              </div>

              <div className='asuransi'>
                <div className='icon'>
                  <i className='fas fa-shield-alt ' />
                </div>

                <div className='title'>
                  <h5>Asuransi </h5>
                </div>
              </div>

              <div className='koper'>
                <div className='icon'>
                  <i className='fas fa-suitcase' />
                </div>

                <div className='title'>
                  <h5>{luggage} koper </h5>
                </div>
              </div>

              <div className='pengemudi'>
                <div className='icon'>
                  <i className='fas fa-user' />
                </div>

                <div className='title'>
                  <h5>Pengemudi </h5>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className='FormPesanan'>
            <div className='dataHarga'>
              <h5>Harga</h5>
              <h5>{nameArmada}</h5>
              <h5>{durasi} HARI</h5>
            </div>

            <div className='hargaSewa'>
              <h5>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(total)}</h5>
            </div>
          </div>

          <hr />

          <div className='FormPesanan'>
            <div className='dataPembayaran'>
              <h5>Total Pembayaran</h5>
            </div>

            <div className='hargaSewa'>
              <h5>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(total)}</h5>
            </div>
          </div>
          <div className='ButtonDetailPesanan'>
            <Link to={`/MetodePembayaran/${no_transaksi}`} className='btn btn-warning rounded-5 text-white'>
              Lanjut Pesanan
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DetailPesanan;
