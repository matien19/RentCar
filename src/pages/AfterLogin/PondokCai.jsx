import React from "react";
import Pict1 from "/assets/img/Wisata/PondokCai1.png";
import Pict2 from "/assets/img/Wisata/PondokCai2.png";
import Pict3 from "/assets/img/Wisata/PondokCai3.png";
import Pict4 from "/assets/img/Wisata/PondokCai4.png";
import "../../css/AfterLogin/Wisata.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const PondokCai = () => {
  return (
    <>
      <Header />
      <div className="inti">
        <section id="Judul">
          <h1></h1>
          <h1>Pondok Cai Pinus</h1>
          <p>Pasawahan, Kuningan</p>
          <div id="images-row">
            <img src={Pict1} alt="PondokCai1" />
          </div>
          <div id="images-grid">
            <img src={Pict2} alt="PondokCai2" />
            <img src={Pict3} alt="PondokCai3" />
            <img src={Pict4} alt="PondokCai4" />
          </div>
        </section>
        <section id="Tentang">
          <h1>Tentang</h1>
          <p>Pondok Cai Pinus di kaki Gunung Ciremai bisa menjadi alternatif menginap traveler. Tempatnya asyik, ditambah hawa sejuk pas buat relaksasi.</p>
          <p>Pemandangan alam di Kabupaten Kuningan, Jawa Barat memiliki daya tarik tersendiri bagi wisatawan. Ditambah, keberadaan Gunung Ciremai membuat kota menjadi pilihan traveler untuk berlibur.</p>
          <p>Kawasan Palutungan menjadi salah satu tujuan utama wisatawan saat berkunjung ke Kuningan. Di sini banyak terdapat destinasi wisata berupa hutan pinus, air terjun, hingga wisata buatan lainnya.</p>
        </section>

        <section id="map">
          <div id="map-container">
            <iframe src={`https://maps.google.com/maps?q=-6.944658,108.435742&output=embed`} width="100%" height="300" style={{ border: 0 }} allowFullScreen aria-hidden="false" tabIndex="0"></iframe>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default PondokCai;
