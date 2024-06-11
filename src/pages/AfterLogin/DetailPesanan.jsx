import "../../css/AfterLogin/FormDetailPesanan.css";
import Footer from "../../components/Footer";
import Header from "../../components/NavBarAfterLogin";
import Button from "react-bootstrap/Button";

function DetailPesanan() {
  return (
    <>
      <Header />
      <div className="DetailContainer">
        <div className="gridSatuDetail">
          <div className="formLokasi">
            <h5>Lokasi Penjemputan</h5>
            <div className="mt-3">
              <h6>Rabu,24 Mei 2024</h6>
              <h6> Jl. Kenanga Terusan No.32, RT.4/RW.3, Cilandak Tim., Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12560</h6>
            </div>
          </div>

          <div className="formDetailKontak">
            <h3>Detail Kontak</h3>
            <h4>Angga Arya Nugraha</h4>
            <h5>Angga88@gmail.com</h5>

            <br />

            <h3>Detail Pengemudi</h3>
            <h4>Zidan Pandu Prasetya</h4>
            <h5>08956743871</h5>
          </div>

          <div className="">
            <div className="card-informasi-layanan">
              <h4 className="mb-3 text-informasi">Informasi Layanan</h4>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <p>
                    <i className="fas fa-clock" /> 24 Jam Layanan Darurat
                  </p>
                  <p>
                    <i className="fas fa-car" /> Pengganti Mobil Rusak
                  </p>
                  <p>
                    <i className="fas fa-shield-alt" /> Asuransi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="formDetailPesanan1">
          <div className="formMerkMobil">
            <h2>TOYOTA NEW INNOVA</h2>
          </div>

          <div className="FormPesanan">
            <div>
              <img src="/assets/img/DetailPesanan/avanzaDetailPesanan.png" alt="" />
            </div>

            <div className="dataInteriorMobil">
              <div className="kursi">
                <div className="icon">
                  <i className="fas fa-car" />
                </div>

                <div className="title">
                  <h5>6 kursi </h5>
                </div>
              </div>

              <div className="asuransi">
                <div className="icon">
                  <i className="fas fa-shield-alt " />
                </div>

                <div className="title">
                  <h5>Asuransi </h5>
                </div>
              </div>

              <div className="koper">
                <div className="icon">
                  <i className="fas fa-suitcase" />
                </div>

                <div className="title">
                  <h5>3 koper </h5>
                </div>
              </div>

              <div className="pengemudi">
                <div className="icon">
                  <i className="fas fa-user" />
                </div>

                <div className="title">
                  <h5>Pengemudi </h5>
                </div>
              </div>
            </div>
          </div>

          <hr />

          <div className="FormPesanan">
            <div className="dataHarga">
              <h5>Harga</h5>
              <h5>TOYOTA NEW INOVA</h5>
              <h5>1 HARI</h5>
            </div>

            <div className="hargaSewa">
              <h5>Rp. 5000.000</h5>
            </div>
          </div>

          <hr />

          <div className="FormPesanan">
            <div className="dataPembayaran">
              <h5>Total Pembayaran</h5>
            </div>

            <div className="hargaSewa">
              <h5>Rp. 5000.000</h5>
            </div>
          </div>
          <div className="ButtonDetailPesanan">
            <a href="/MetodePembayaran" className="btn btn-warning rounded-5  text-white ">
              Lanjut Pesanan
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default DetailPesanan;
