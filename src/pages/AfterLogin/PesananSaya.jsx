import Footer from "../../components/Footer";
import Header from "../../components/NavBarAfterLogin";
import "../../css/AfterLogin/PesananSaya.css";
import Armada from "/assets/img/armada/Avanza_New_2024.jpeg";

const PesananSaya = () => {
  return (
    <>
      <Header />
      <main id='main' className='pesanan'>
        <div className='row pt-5 mt-5'>
          <div className='col-lg-3 '>
            <div className='sidebar pt-5 '>
              <div className='account-info'>
                <div className='account-icon'>
                  <div className='account-name'>
                    <i className='fas fa-user-circle m-2' />
                    John Doe
                  </div>
                </div>
              </div>
              <ul className='sidebar-menu'>
                <li>
                  <i className='fas fa-shopping-cart p-2' /> <a href='#'>Pesanan Saya</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='container'>
              <div className='card' data-aos='fade-up' data-aos-delay={100}>
                <div className='row g-0'>
                  <div className='col-md-4'>
                    <img src={Armada} className='card-img-top' alt='Avanza New 2024' />
                  </div>
                  <div className='col-md-8'>
                    <div className='card-body'>
                      <br />
                      <br />
                      <h5 className='card-title'>Avanza New 2024</h5>
                      <div className='d-flex justify-content-between'>
                        <div>
                          <i className='fas fa-car blue-icon' /> 6 Kursi
                          <br />
                          <i className='fas fa-suitcase blue-icon' /> 3 Koper
                          <br />
                        </div>
                        <div>
                          <i className='fas fa-shield-alt blue-icon' />
                          Asuransi
                          <br />
                          <i className='fas fa-user blue-icon' /> Pengemudi
                          <br />
                        </div>
                        <div className='date-info'>
                          <div className='date-item'>
                            <div className='date-text'>
                              <div>Mulai</div>
                              <div>Sabtu, 24 Mei 2024</div>
                            </div>
                          </div>
                          <div className='date-item'>
                            <i className='fas fa-arrow-right blue-icon' />
                          </div>
                          <div className='date-item'>
                            <div className='date-text'>
                              <div>Selesai</div>
                              <div>Minggu, 25 Mei 2024</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PesananSaya;
