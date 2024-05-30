import React from "react";
import Pict1 from "/assets/img/Wisata/Woodland1.png";
import Pict2 from "/assets/img/Wisata/Woodland2.png";
import Pict3 from "/assets/img/Wisata/Woodland3.png";
import Pict4 from "/assets/img/Wisata/Woodland4.png";
import "../../css/AfterLogin/Wisata.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Woodland = () => {
  return (
    <>
      <Header />
      <div className="inti">
        <section id="Judul">
          <h1></h1>
          <h1>Woodland</h1>
          <p>Pasawahan, Kuningan</p>
          <div id="images-row">
            <img src={Pict1} alt="Woodland1" />
          </div>
          <div id="images-grid">
            <img src={Pict2} alt="Woodland2" />
            <img src={Pict3} alt="Woodland3" />
            <img src={Pict4} alt="Woodland4" />
          </div>
        </section>
        <section id="Tentang">
          <h1>Tentang</h1>
          <p>
            Sesuai namanya, Woodland Kuningan mengusung konsep wisata alam terbuka. Setiap sudutnya sudah dilengkapi dengan wahana bermain outdoor yang dikhususkan bagi anak-anak dan orang dewasa. Kemudian tak kalah penting. sebuah kolam
            renang berukuran cukup beser tersedia di tempat ini.
          </p>
          <p>
            Kehadiran kolam renang tersebut mungkin hukumnya wajib. Sebab, kurang lengkap rasanya bila berwisata ke Kuningan tak bermain air. Kesegaran saat berenang di Woodland Kuningan setidaknya bisa meredakan stres yang menumpuk di
            kepala Anda karena rutinitas pekerjaan sehari-hari.
          </p>
        </section>

        <section id="map">
          <div id="map-container">
            <iframe src={`https://maps.google.com/maps?q=-6.865636,108.472311&output=embed`} width="100%" height="300" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Woodland;
