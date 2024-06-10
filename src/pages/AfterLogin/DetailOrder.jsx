import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/NavBarAfterLogin";
import Setir from "/assets/img/detailorder/setir.png";
import Mesin from "/assets/img/detailorder/mesin.png";
import kursi from "/assets/img/detailorder/kursi.png";
import Bagasi from "/assets/img/detailorder/bagasi.png";

import "../../css/header.css";
import "../../css/AfterLogin/DetailOrder.css";

const Order = () => {
  const [Armada, setArmadas] = useState([]);
  const [Drivers, setDrivers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getDrivers();
    getArmadaById();
  }, []);

  const getArmadaById = async () => {
    const response = await axios.get(`http://localhost:5000/Armadas/${id}`);
    setArmadas(response.data[0]);
  };

  const getDrivers = async () => {
    const response = await axios.get("http://localhost:5000/Drivers");
    setDrivers(response.data);
  };

  return (
    <>
      <Header />
      <main id='main'>
        <section className='detail'>
          <div className='container mt-5'>
            <div className='row mb-12'>
              <div className='col-md-4'>
                <div className='card' key={Armada.id} data-aos='fade-up' data-aos-delay={100}>
                  <img src={Armada.image} className='card-img-top' alt='Honda Brio 2020' />
                  <div className='card-body'>
                    <h5 className='card-title fw-bold'>{Armada.name}</h5>
                    <p className='card-text' />
                    <div className='d-flex justify-content-between p-3'>
                      <div>
                        <i className='fas fa-car' /> Kursi: {Armada.seats}
                        <br />
                        <i className='fas fa-suitcase' /> Koper: {Armada.luggage}
                        <br />
                      </div>
                      <div className='me-5'>
                        <i className='fas fa-shield-alt ' /> {Armada.insurance}
                        <br />
                        <i className='fas fa-user' /> {Armada.driver}
                        <br />
                      </div>
                    </div>

                    <select className=' btn btn-md btn-warning rounded-5 w-75'>
                      <option>-- Pilih Pengemudi --</option>
                      {Drivers.map((driver) => (
                        <option key={driver.id}>{driver.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className='col-md-8'>
                <div className='card' data-aos='fade-up' data-aos-delay={200}>
                  <div className='card-body'>
                    <div className='row p-1'>
                      <div className='col-lg-4'>
                        <h5>Tanggal mulai</h5>
                        <input type='date' />
                      </div>
                      <div className='col-lg-4'>
                        <h5>Durasi</h5>
                        <input type='number' placeholder=' Dalam hari' />
                      </div>
                    </div>
                    <div className='row p-3'>
                      <h5>Alamat penjemputan</h5>
                      <input className='alamat' type='text' placeholder='Masukan alamat..' />
                    </div>
                    <div className='d-flex justify-content-between align-items-center'>
                      <div>
                        <h5>Harga:</h5>
                        <p className='price'>Rp {Armada.price}/Hari</p>
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
                {Drivers.map((driver) => (
                  <div className='col-md-3 ' key={driver.id}>
                    <div className='card rounded-card' data-aos='fade-up' data-aos-delay={100}>
                      <div className='card-body d-flex align-items-center'>
                        <img src={driver.foto} className='rounded p-2' alt='Nama Petugas' style={{ width: 120, height: 80 }} />
                        <div className='ml-3'>
                          <h6 className='card-title'>{driver.name}</h6>
                          <p className='card-text'>{driver.deskripsi}</p>
                          <p className='card-text'>
                            <i className='fab fa-whatsapp' /> {driver.no_telp} <i className='fab fa-instagram ms-3' /> {driver.instagram}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <br />

            <div className='text-center fw-bold mt-5' data-aos='fade-up' data-aos-delay={100}>
              <h2>Informasi Armada</h2>
            </div>
            <div className='row mt-3 '>
              <div className='col-md-3'>
                <div className='card' data-aos='fade-up' data-aos-delay={100}>
                  <img src={Setir} className='img-fluid' alt='Image 1' style={{ width: 400, height: 170 }} />
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' data-aos='fade-up' data-aos-delay={100}>
                  <img src={Mesin} className='img-fluid' alt='Image 2' style={{ width: 400, height: 170 }} />
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' data-aos='fade-up' data-aos-delay={100}>
                  <img src={kursi} className='img-fluid' alt='Image 3' style={{ width: 400, height: 170 }} />
                </div>
              </div>
              <div className='col-md-3'>
                <div className='card' data-aos='fade-up' data-aos-delay={100}>
                  <img src={Bagasi} className='img-fluid' alt='Image 4' style={{ width: 400, height: 170 }} />
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
