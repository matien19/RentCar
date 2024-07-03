import Header from "../components/Header";
import Footer from "../components/Footer";

import "../css/header.css";
import "../css/kontak.css";

const Kontak = () => {
  return (
    <>
      <Header />
      <main id='main'>
        <section className='kontak-banner d-flex justify-content-center align-items-center' data-aos='zoom-out'>
          <h1 className='text-center'>HUBUNGI KAMI</h1>
        </section>
        <section className='kontak-main'>
          <div className='row col-lg-12'>
            <div className='col-lg-4 col-md-12 text-center' data-aos='fade-up' data-aos-delay={100}>
              <i className='bi bi-geo-alt' />
              <h3>Lokasi Kami</h3>
              <p className="info-lokasi">
                Perum Griya, Ciawigebang <br />
                Kuningan Jawa Barat, Indonesia
              </p>
            </div>
            <div className='col-lg-4 col-6 text-center' data-aos='fade-up' data-aos-delay={200}>
              <i className='bi bi-envelope' />
              <h3>Alamat Email</h3>
              <p className="info-lokasi">Mochamadzidan1@gmail.com</p>
            </div>
            <div className='col-lg-4 col-6 text-center ' data-aos='fade-up' data-aos-delay={300}>
              <i className='bi bi-telephone' />
              <h3>Nomor Telepon</h3>
              <p className="info-lokasi">+62877180976307<br/>
             +62822218183889</p>
            </div>
          </div>
        </section>
        <section className='kontak-form container'>
          <div className='row d-flex justify-content-center'>
            <div className='col-lg-6 col-md-12 position-relative d-flex justify-content-end align-items-center'>
              <img src='./assets/img/kontak/main.png' alt='Gambar Tambahan' className='img-fluid' data-aos='zoom-in' data-aos-delay={200} />
            </div>
            <div className='col-lg-6 col-md-8 p-5' data-aos='zoom-in' data-aos-delay={200}>
              <h1 className="ms-1">Ada yang bisa kami <br /><span>bantu?</span> </h1>
              <p className='ms-1 mb-5'>Tim kami tersedia 24/7 untuk menjawab pertanyaan atau memberikan bantuan apa pun yang Anda butuhkan.</p>
              <div className='form d-flex flex-column justify-content-between gap-2'>
                <input type='text' name='nama' placeholder='Nama' />
                <input type='email' name='email' placeholder='Email' />
                <input className='pesan' type='text' name='pesan' placeholder='Pesan' />
                <button>Kirim Pesan</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Kontak;
