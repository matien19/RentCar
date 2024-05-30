import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Armada } from "../../data/data";

import "../../css/AfterLogin/order.css";

const Order = () => {
  return (
    <>
      <Header />
      <main id='main'>
        <section className='order '>
          <div className='container'>
            <div className='row mb-12'>
              <div className='col-md-3'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'>Filter</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Kisaran Harga</td>
                    </tr>
                    <tr>
                      <td>
                        <button className='btn btn-secondary'>Rendah</button>
                        <button className='btn btn-secondary'>Tinggi</button>
                      </td>
                    </tr>
                    <tr>
                      <td>Kapasitas Kursi</td>
                    </tr>
                    <tr>
                      <td>
                        <button className='btn btn-secondary'>4 Kursi</button>
                        <button className='btn btn-secondary'>5-6 Kursi</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className='col-md-9 d-flex flex-column gap-3'>
                {Armada.map((car, index) => (
                  <div className='card' key={index}>
                    <div className='row g-0'>
                      <div className={"corner-text-" + car.type.toLowerCase() + " text-center"}>{car.type}</div>
                      <div className='row'>
                        <div className='col-md-4'>
                          <img src={car.image} className='card-img-top' alt={car.title} />
                        </div>
                        <div className='col-md-8'>
                          <div className='card-body'>
                            <h5 className='card-title'>{car.title}</h5>
                            <div className='d-flex justify-content-between'>
                              <div>
                                <i className='fas fa-car' /> {car.seats}
                                <br />
                                <i className='fas fa-suitcase' /> {car.luggage}
                                <br />
                              </div>
                              <div>
                                <i className='fas fa-shield-alt' /> {car.insurance}
                                <br />
                                <i className='fas fa-user' /> {car.driver}
                                <br />
                              </div>
                              <div className='text-end'>
                                <p>{car.price}</p>
                                <a href='#' className='btn btn-sm btn-warning rounded-5 w-75'>
                                  Pilih
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
