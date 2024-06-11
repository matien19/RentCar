import Header from "../components/Header";
import Footer from "../components/Footer";
import { armadaData } from "../data/data";

import "../css/header.css";
import "../css/armada.css";

const Armada = () => {
  return (
    <div>
      <Header />
      <main id='main'>
        <section className='armada pt-5'>
          <div className='container pt-5'>
            <div className='d-flex flex-wrap justify-content-between gap-3'>
              {armadaData.map((item, index) => (
                <div key={index} className='card' data-aos='fade-up' data-aos-delay={100 * (index + 1)}>
                  <img src={item.image} className='card-img-top' alt='aa' />
                  <div className='card-body'>
                    <h5 className='card-title'>{item.name}</h5>
                    <p className='card-text-item'>
                      <div className='d-flex justify-content-between '>
                        <div className="icon1">
                          <i className='fas fa-car'></i> Kursi : {item.seats}
                          <br />
                          <i className='fas fa-suitcase'></i> Koper : {item.luggage}
                          <br />
                        </div>
                        <div>
                          <i className='fas fa-shield-alt'></i> Asuransi : {item.insurance}
                          <br />
                          <i className='fas fa-user'></i> Pengemudi : {item.driverIncluded}
                          <br />
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Armada;
