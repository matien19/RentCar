import Form from "react-bootstrap/Form";
import "../../css/AfterLogin/MetodePembayaran.css";
import Header from "../../components/NavBarAfterLogin";
import Footer from "../../components/Footer";

function MetodePembayaran() {
  const bank = [
    {
      imgBank: "/assets/img/logo_bank/bca.png",
      NamaBank: "BCA",
    },

    {
      imgBank: "/assets/img/logo_bank/bni.png",
      NamaBank: "BNI",
    },

    {
      imgBank: "/assets/img/logo_bank/dana.png",
      NamaBank: "DANA",
    },

    {
      imgBank: "/assets/img/logo_bank/bri.png",
      NamaBank: "BRI",
    },

    {
      imgBank: "/assets/img/logo_bank/mandiri.png",
      NamaBank: "MANDIRI",
    },
  ];

  return (
    <>
      <Header />
      <div className="SectionContainer">
        <div className="gridSatu">
          <div className="metode">
            <div className="Teks">
              <h4>Metode Pembayaran</h4>
              <br />

              <div className="virtualAccount">
                <h6>Virtual Account</h6>
              </div>
            </div>
            <div className="CheckboxBank">
              <h4>Virtual Account</h4>
              <br />

              <Form>
                {bank.map((type) => (
                  <div key={`default-${type}`} className="mb-3 d-flex">
                    <Form.Check // prettier-ignore
                      type={"checkbox"}
                      id={`${type}`}
                    />

                    <img src={type.imgBank} alt="" className="ms-3" />
                  </div>
                ))}
              </Form>
            </div>
          </div>
        </div>

        <div className="formDetailPesanan">
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

          <div className="ButtonMetodePembayaran">
            <a href="/Pembayaran" className="btn  btn-warning rounded-5 text-white ">
              Buat Pesanan
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default MetodePembayaran;
