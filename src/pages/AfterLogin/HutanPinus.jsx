import React from "react";

import Pict1 from "/assets/img/Wisata/HutanPinus1.png";
import Pict2 from "/assets/img/Wisata/HutanPinus2.png";
import Pict3 from "/assets/img/Wisata/HutanPinus3.png";
import Pict4 from "/assets/img/Wisata/HutanPinus4.png";
import "../../css/AfterLogin/Wisata.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const HutanPinus = () => {
  return (
    <>
      <Header />
      <div className="inti">
        <section id="Judul">
          <h1>Hutan pinus atau Buper Ciceureum</h1>
          <p>Pasawahan, Kuningan</p>
          <div id="images-row">
            <img src={Pict1} alt="HutanPinus1" />
          </div>
          <div id="images-grid">
            <img src={Pict2} alt="HutanPinus2" />
            <img src={Pict3} alt="HutanPinus3" />
            <img src={Pict4} alt="HutanPinus4" />
          </div>
        </section>
        <section id="Tentang">
          <h1>Tentang</h1>
          <p>
            Hutan pinus Cibeureum menjadi pusat dari berbagai aktivitas rekreatif, di antaranya petualangan mengendarai All Terrain Vehicles (ATV), memanah, outbound, berkemah, berkuda, bersepeda, atau sekedar bersantai dan bergelantungan
            di pohon menggunakan hammock.
          </p>
          <p>
            Jika lelah dan ingin bersantap, di tengah hutan pinus tersedia dua tempat makan dan minum. Yang pertama, restoran tiga lantai bernama Lake House dan yang kedua sebuah kafe bertajuk Club Huis. Pengunjung bisa makan beragam menu
            western maupun hidangan lokal, baik di dalam ruangan maupun luar ruangan dengan dikelilingi oleh suasana hutan pinus.
          </p>
        </section>
        
        <section id="map">
          <div id="map-container">
            <iframe src={`https://maps.google.com/maps?q=-6.855447,108.473338&output=embed`} width="100%" height="300" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HutanPinus;
