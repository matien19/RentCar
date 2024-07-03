import Header from "../components/Header";
import Footer from "../components/Footer";


import "../css/home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div>
        <section id='hero' className='hero d-flex align-items-center'>
          <div className='container pt-5'>
            <div className='row gy-4 d-flex justify-content-between'>
              <div className='col-lg-6 order-2 order-lg-1 d-flex flex-column '>
                <h2 data-aos='fade-up'>Wujudkan Impianmu Bersama Kami Yang Terpercaya!</h2>
                <p className="deskripsi" data-aos='fade-up' data-aos-delay={100}>
                  Kami membuktikan pilihan mobil terbaik dan layanan ahli untuk pengalaman pelanggan terbaik
                </p>
                <button data-aos='fade-up' data-aos-delay={100} type='submit' className='btn btn-primary'>
                  Pesan Sekarang !
                </button>
              </div>
              <div className='col-lg-5 order-1 order-lg-2 hero-img ' data-aos='zoom-in' data-aos-delay={300}>
                <img src='assets/img/hero.png' className='img-fluid mb-3 mb-lg-0' alt />
              </div>
            </div>
          </div>
        </section>
        <main id='main'>
          <section className='banner'>
            <div className='container'>
              <div className='section-header' data-aos='zoom-out' data-aos-delay={300}>
                <h2>Kami Di sini untuk anda</h2>
                <p>Dapatkan Pengalaman Terbaik Dari Jasa Rental Kami</p>
              </div>
              <div className='row'>
                <div className='col-12'>
                  <div className='card banner-konten' data-aos='fade-up' data-aos-delay={100} style={{ backgroundImage: 'url("assets/img/unsplash1.png")', backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className='card-body'>
                      <div className='col-6'>
                        <div className='konten'>
                          <h1 className='title'>Mari Gunakan Keunggulan Fitur Kami</h1>
                          <p className='deskripsi'>Dengan fitur “Pilih Pengemudi” kami,Anda dapat memilih kriteria pengemudi yang Anda inginkan.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='row pt-5'>
                    <div className='col-3'>
                      <div className='card banner-fitur' data-aos='fade-up' data-aos-delay={100} style={{ backgroundImage: 'url("assets/img/unsplash2.png")' }}>
                        <div className='card-body d-flex flex-column justify-content-end'>
                          <h3 className='card-title mt-auto'>Pelayanan 24/7</h3>
                          <p  className=' deskripsi'>Tim kami tersedia 24/7 untuk menjawab pertanyaan atau memberikan bantuan apa pun yang Anda butuhkan.</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-3'>
                      <div className='card banner-fitur' data-aos='fade-up' data-aos-delay={200} style={{ backgroundImage: 'url("assets/img/unsplash3.png")' }}>
                        <div className='card-body d-flex flex-column justify-content-end'>
                          <h3 className='card-title'>Garansi Uang Kembali</h3>
                          <p className='deskripsi'>Jika Anda tidak senang dengan layanan kami, kami akan mengembalikan uang Anda sepenuhnya.</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-3'>
                      <div className='card banner-fitur' data-aos='fade-up' data-aos-delay={300} style={{ backgroundImage: 'url("assets/img/unsplash4.png")' }}>
                        <div className='card-body d-flex flex-column justify-content-end'>
                          <h3 className='card-title'>Penawaran Terjangkau</h3>
                          <p className='deskripsi'>Dapatkan penawaran termurah dari kami! Sewa mobil dengan harga terjangkau yang pasti cocok untuk Anda.</p>
                        </div>
                      </div>
                    </div>
                    <div className='col-3'>
                      <div className='card banner-fitur' data-aos='fade-up' data-aos-delay={400} style={{ backgroundImage: 'url("assets/img/unsplash5.png")' }}>
                        <div className='card-body d-flex flex-column justify-content-end'>
                          <h3 className='card-title'>Kendaraan Terdaftar</h3>
                          <p className='deskripsi'>Semua kendaraan kami sudah terdaftar. Anda bisa yakin bahwa semua dokumen lengkap dan sesuai dengan standar.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='container'>
              <div className='section-header' data-aos='zoom-out' data-aos-delay={300}>
                <h2>Testimoni</h2>
                <p>apa yang orang katakan tentang kami</p>
              </div>
              <div className='row'>
                <div className='col-4'>
                  <div className='card' data-aos='fade-up' data-aos-delay={100}>
                    <img src='assets/img/testi1.png' className='card-img-top' alt='Phone Image 1' />
                  </div>
                </div>
                <div className='col-4'>
                  <div className='card' data-aos='fade-up' data-aos-delay={200}>
                    <img src='assets/img/testi2.png' className='card-img-top' alt='Phone Image 2' />
                  </div>
                </div>
                <div className='col-4'>
                  <div className='card' data-aos='fade-up' data-aos-delay={300}>
                    <img src='assets/img/testi3.png' className='card-img-top' alt='Phone Image 3' />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <Footer />
    </>
  );
};

export default Home;
