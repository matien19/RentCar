import React from "react";
import Button from "react-bootstrap/Button";
import Carousel from "../../components/Carousel";
import "../../css/AfterLogin/HomePage.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <>
    <Header/>
      <header className="HeroSection">
        <h1>
          Kami Membangun Kepercayaan <br />
          Dan Menciptakan Impian anda
        </h1>
        <h5>
          Kami membuktikan pilihan mobil terbaik dan <br />
          layanan ahli untuk pengalaman pelanggan terbaik
        </h5>
        
        <div className="ButtonPesan">
          <Button variant="primary" size="lg">
            Pesan Dengan Pengemudi
          </Button>{" "}
          <Button variant="primary" size="lg">
            Pesan Tanpa Pengemudi
          </Button>{" "}
        </div>
      </header>

      <section className="sectionHimbauan">
        <h2>Terapkan 3 langkah ini untuk menjaga keselamatan</h2>
        <div className="gambarHimbauan">
          <img src="assets/img/himbauan1.png" alt="" />
          <img src="assets/img/himbauan2.png" alt="" />
          <img src="assets/img/himbauan3.png" alt="" />
        </div>
      </section>

      <section>
        <h1>Destinasi Wisata Kuningan</h1>
        <h5>Wisata Terbaru</h5>
        <div>
          <Carousel />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
