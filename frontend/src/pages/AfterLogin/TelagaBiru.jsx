import React from "react";
import Pict1 from "/assets/img/Wisata/TelagaBiru1.png";
import Pict2 from "/assets/img/Wisata/TelagaBiru2.png";
import Pict3 from "/assets/img/Wisata/TelagaBiru3.png";
import Pict4 from "/assets/img/Wisata/TelagaBiru4.png";
import "../../css/AfterLogin/Wisata.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const TelagaBiru = () => {
  return (
    <>
      <Header />
      <div className="inti">
        <section id="Judul">
          <h1></h1>
          <h1>Telaga Biru Cicerem</h1>
          <p>Pasawahan, Kuningan</p>
          <div id="images-row">
            <img src={Pict1} alt="TelagaBiru1" />
          </div>
          <div id="images-grid">
            <img src={Pict2} alt="TelagaBiru2" />
            <img src={Pict3} alt="TelagaBiru3" />
            <img src={Pict4} alt="TelagaBiru4" />
          </div>
        </section>
        <section id="Tentang">
          <h1>Tentang</h1>
          <p>
            Telaga Biru Ciberem memiliki keindahan dengan airnya yang bening dan dikelilingi pepohonan hijau. Daya tarik Telaga Biru Ciberem terletak pada warna air telaga yang memiliki gradasi warna antara biru dan hijau tosca. Adanya
            ayunan di atas telaga yang bergelantung di bawah pohon menjadi daya tarik lain dari tempat wisata ini.
          </p>
          <p>
            Suasana telaga sangat alami dengan pohon-pohon rindang disekitar telaga yang belum tersentuh pembangunan. Biasanya, wisatawan akan berfoto pada spot ayunan di atas telaga sambil ditemani ikan-ikan di telaga. Perpaduan obyek ini
            membuahkan hasil foto yang menarik.
          </p>
        </section>

        <section id="map">
          <div id="map-container">
            <iframe src={`https://maps.google.com/maps?q=-6.797865,108.423144&output=embed`} width="100%" height="300" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default TelagaBiru;
