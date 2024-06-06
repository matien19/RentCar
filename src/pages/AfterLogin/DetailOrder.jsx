import Footer from "../../components/Footer";
import Header from "../../components/Header";

import "../../css/header.css";
import "../../css/AfterLogin/DetailOrder.css";

const Order = () => {
  return (
    <>
      <Header />
      <main id='main'>
        <section className='detail'>
          <div className='container mt-5'>
            <div className='row mb-12'>
              <div className='col-md-4'>
                <div className='card' data-aos='fade-up' data-aos-delay={100}>
                  <img src='./assets/img/armada/Honda_Brio_2020.png' className='card-img-top' alt='Honda Brio 2020' />
                  <div className='card-body'>
                    <h5 className='card-title fw-bold'>Honda Brio 2020</h5>
                    <p className='card-text' />
                    <div className='d-flex justify-content-between p-3'>
                      <div>
                        <i className='fas fa-car' /> Kursi: 4<br />
                        <i className='fas fa-suitcase' /> Koper: 2<br />
                      </div>
                      <div className="me-5">
                        <i className='fas fa-shield-alt ' /> Asuransi
                        <br />
                        <i className='fas fa-user' /> Pengemudi
                        <br />
                      </div>
                    </div>
                    <a href='#' className='btn-pengemudi btn btn-md rounded-5'>
                      Pilih Pengemudi
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-8'>
                <div className='card' data-aos='fade-up' data-aos-delay={200}>
                  <div className='card-body'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h4>Harga:</h4>
                        <p className='price'>Rp 500.000</p>
                      </div>
                      <a href='/Detail' className='btn btn-md btn-warning rounded-5 w-25'>
                        Lanjut Pemesanan
                      </a>
                    </div>
                  </div>
                </div>
                <br />
                <div className='card' data-aos='fade-up' data-aos-delay={300}>
                  <div className='card-body'>
                    <h4>Informasi Layanan</h4>
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




              <div className='text-center fw-bold mt-5' data-aos='fade-up' data-aos-delay={100}>
                <h2>Informasi Pengemudi</h2>
              </div>
              <div className='row mt-12 mt-3'>
                <div className='col-md-3'>
                  <div className='card rounded-card' data-aos='fade-up' data-aos-delay={100}>
                    <div className='card-body d-flex align-items-center'>
                      <img src='assets/img/detailorder/sopir1.png' className='rounded' alt='Nama Petugas 1' style={{ width: 80, height: 80 }} />
                      <div className='ml-3'>
                        <h6 className='card-title'>Afrizal Indra Prata</h6>
                        <p className='card-text'>Zidan adalah orang yang menyenangkan dan mudah bergaul. Dia selalu wangi dan rapi, dan Dia adalah orang yang disiplin dan memiliki prinsip yang kuat</p>
                        <p className='card-text'>
                          <i className='fab fa-whatsapp' /> 08123456789
                          
                          <i className='fab fa-instagram ms-3' /> @afrizalindra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card rounded-card' data-aos='fade-up' data-aos-delay={200}>
                    <div className='card-body d-flex align-items-center'>
                      <img src='assets/img/detailorder/sopir2.png' className='rounded-circle' alt='Nama Petugas 2' style={{ width: 80, height: 80 }} />
                      <div className='ml-3'>
                        <h5 className='card-title'>Zidan Pandu Prasetya</h5>
                        <p className='card-text'>Zidan adalah orang yang menyenangkan dan mudah bergaul. Dia selalu wangi dan rapi, dan Dia adalah orang yang disiplin dan memiliki prinsip yang kuat</p>
                        <p className='card-text'>
                          <i className='fab fa-whatsapp' /> 08123456789
                         
                          <i className='fab fa-instagram ms-3' /> @afrizalindra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card rounded-card' data-aos='fade-up' data-aos-delay={300}>
                    <div className='card-body d-flex align-items-center'>
                      <img src='assets/img/detailorder/sopir3.png' className='rounded-circle' alt='Nama Petugas 3' style={{ width: 80, height: 80 }} />
                      <div className='ml-3'>
                        <h5 className='card-title'>Genaya Mahesa</h5>
                        <p className='card-text'>Zidan adalah orang yang menyenangkan dan mudah bergaul. Dia selalu wangi dan rapi, dan Dia adalah orang yang disiplin dan memiliki prinsip yang kuat</p>
                        <p className='card-text'>
                          <i className='fab fa-whatsapp' /> 08123456789
                         
                          <i className='fab fa-instagram ms-3' /> @afrizalindra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-3'>
                  <div className='card rounded-card' data-aos='fade-up' data-aos-delay={400}>
                    <div className='card-body d-flex align-items-center'>
                      <img src='assets/img/detailorder/sopir4.png' className='rounded-circle' alt='Nama Petugas 4' style={{ width: 80, height: 80 }} />
                      <div className='ml-3'>
                        <h5 className='card-title'>Teguh Deriandri</h5>
                        <p className='card-text'>Zidan adalah orang yang menyenangkan dan mudah bergaul. Dia selalu wangi dan rapi, dan Dia adalah orang yang disiplin dan memiliki prinsip yang kuat</p>
                        <p className='card-text'>
                          <i className='fab fa-whatsapp' /> 08123456789
                          
                          <i className='fab fa-instagram ms-3' /> @afrizalindra
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />



            <div className='text-center fw-bold mt-5' data-aos='fade-up' data-aos-delay={100}>
              <h2>Informasi Armada</h2>
            </div>
            <div className='row mt-3 ' >
              <div className='col-md-3'>
                <div className='card' data-aos='fade-up' data-aos-delay={100}>
                  <img src='assets/img/detailorder/setir.png' className='img-fluid' alt='Image 1'  style={{ width: 400, height: 170 }} />
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' data-aos='fade-up' data-aos-delay={100}>
                  <img src='assets/img/detailorder/mesin.png' className='img-fluid' alt='Image 2' style={{ width: 400, height: 170 }} />
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' data-aos='fade-up' data-aos-delay={100}>
                  <img src='assets/img/detailorder/kursi.png' className='img-fluid' alt='Image 3'style={{ width: 400, height: 170 }} />
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' data-aos='fade-up' data-aos-delay={100}>
                  <img src='assets/img/detailorder/bagasi.png' className='img-fluid' alt='Image 4' style={{ width: 400, height: 170 }}/>
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

export default Order;
