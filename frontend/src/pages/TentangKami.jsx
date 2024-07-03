import Header from "../components/Header";
import Footer from "../components/Footer";
import "../css/tentangKami.css";

const TentangKami = () => {
  return (
    <>
      <Header />
      <main id='main'>
        <section className='tentang-kami-banner d-flex justify-content-center align-items-center' data-aos='zoom-out'>
          <h1 className='text-center'>TENTANG KAMI</h1>
        </section>
        <section className='main-deskripsi container p-5'>
          <div className='row gy-4 d-flex justify-content-center p-5'>
            <div className='col-lg-6 col-md-8'>
              <div className='deskripsi' data-aos='fade-up' data-aos-delay={100}>
                <h2 className='ms-3'>Z-Rental CAR</h2>
                <p>Kami adalah perusahaan rental mobil yang menyediakan kendaraan roda empat berkualitas tinggi dengan harga terjangkau. Kami telah melayani pelanggan di area Kuningan selama 2 tahun.</p>
              </div>
              <div className='visi mt-5' data-aos='fade-up' data-aos-delay={200}>
                <h2 className='ms-3'>Misi</h2>
                <p>Meningkatkan kepuasan pelanggan dengan pelayanan yang prima dan Menyediakan armada mobil yang berkualitas dengan harga yang kompetitif.</p>
              </div>
              <div className='misi mt-5' data-aos='fade-up' data-aos-delay={300}>
                <h2 className='ms-3'>Visi</h2>
                <p>Menjadi perusahaan rental mobil terkemuka dan Menyediakan solusi transportasi darat yang handal dan terpercaya.</p>
              </div>
            </div>
            <div className='col-lg-6 col-md-12 position-relative d-flex justify-content-end align-items-center'>
              <img src='assets/img/tentang_kami/main.png' alt='Gambar Tambahan' className='img-fluid' data-aos='zoom-in' />
            </div>
          </div>
        </section>
        <section className='tagline' data-aos='fade-up' data-aos-delay={300}>
         
            <div className='SalamHangat' >
              <h1>Perjalanan Anda, Senyaman</h1>
              <h1>Rumah Sendiri Bersama Kami!</h1>
            </div>
     
        </section>
      </main>
      <Footer />
    </>
  );
};

export default TentangKami;
