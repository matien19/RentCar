import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardSlider from './CardSlider';
import '../../src/css/AfterLogin/Slider.css'

// IMPORT IMAGE
import img1 from "/assets/img/imgSlider/TL1.png";
import img2 from "/assets/img/imgSlider/TL2.png";
import img3 from "/assets/img/imgSlider/TL3.png";
import img4 from "/assets/img/imgSlider/TL4.png";

function Corousel() {
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 600,
        marginleft : 10
        
      };
  return (
    <div className="slider-container Slider">
      <Slider {...settings}>
        <div>
        <CardSlider data={{ ImgSrc: img1, Title: "Wisata Cibulakan", Text: "linggar Jati" }} />
        </div>
        <div>
        <CardSlider data={{ ImgSrc: img2, Title: "Wisata Cibulakan", Text: "linggar Jati" }} />
        </div>
        <div>
        <CardSlider data={{ ImgSrc: img3, Title: "Wisata Cibulakan", Text: "linggar Jati" }} />
        </div>
        <div>
        <CardSlider data={{ ImgSrc: img4, Title: "Wisata Cibulakan", Text: "linggar Jati" }} />
        </div>
       
      </Slider>
    </div>
  )
}

export default Corousel