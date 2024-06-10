// import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "../../components/Carousel";
import "../../css/AfterLogin/HomePage.css";
import Header from "../../components/NavBarAfterLogin";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const history = useNavigate();
  const Pengemudi = () => {
    history("/Order");
  };

  return (
    <>
      <Header />
      <section className='HeroSection d-flex align-items-center'>
        <div className='container '>
          <div className='col-lg-6 d-flex flex-column gap-3'>
            <div>
              <h1>
                Kami Membangun Kepercayaan <br />
                Dan Menciptakan Impian anda
              </h1>
              <h5>
                Kami membuktikan pilihan mobil terbaik dan <br />
                layanan ahli untuk pengalaman pelanggan terbaik
              </h5>
            </div>
            <div className='ButtonPesan'>
              <Button variant='primary' onClick={Pengemudi} size='lg'>
                Pesan Dengan Pengemudi
              </Button>{" "}
              <Button variant='primary' size='lg'>
                Pesan Tanpa Pengemudi
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className='sectionHimbauan'>
        <h2>Terapkan 3 langkah ini untuk menjaga keselamatan</h2>
        <div className='gambarHimbauan'>
          <img src='assets/img/himbauan1.png' alt='' />
          <img src='assets/img/himbauan2.png' alt='' />
          <img src='assets/img/himbauan3.png' alt='' />
        </div>
      </section>

      <section className='sectionWisata'>
        <h1 className='textWisata'>Destinasi Wisata Kuningan</h1>
        <h5 className='textWisata'>Wisata Terbaru</h5>
        <div>
          <Carousel />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
