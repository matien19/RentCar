import Footer from "../../components/Footer";
import Header from "../../components/NavBarAfterLogin";

import "../../css/AfterLogin/Pembayaran.css";

const Pembayaran = () => {
  return (
    <>
      <Header />
      <main id='main'>
        <section className='info-checkout container mt-5 '>
          <h1>Informasi Pembayaran</h1>
          <div className='card p-2 mt-3'>
            <div className='card-body'>
              <h4>Status</h4>
              <p className="deskripsi-pembayaran">pending</p>
              <h4>No VA</h4>
              <p className="deskripsi-pembayaran">88899898989890976</p>
              <h4 >Total Pembayaran</h4>
              <p className="deskripsi-pembayaran">Rp. 400.000</p>
              <h4>No Transaksi</h4>
              <p className="deskripsi-pembayaran">8812809012837</p>
            </div>
          </div>
        </section>
        <section className='bukti-pembayaran container '>
          <div className='card'>
            <div className='card-body'>
              <h3>Kirim bukti pembayaran</h3>
              <div className='row'>
                <div className='col-md-6 d-flex flex-column gap-3'>
                  <div className='upload-area text-center align-content-center' id='uploadArea'>
                    <p>seret &amp; letakkan file di sini ...</p>
                  </div>
                  <input type='file' id='fileInput' />
                  <button type='submit' className='btn btn-sm btn-warning rounded-5 w-25 text-white'>
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Pembayaran;
