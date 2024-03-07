import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import love from "../assets/love.webp";
import Home from "../assets/Home.webp";
import chocolate from "../assets/Chocolate.webp";
import Anniversary from "../assets/Anniversary.webp";
import ramji from "../assets/Ram-Mandir.jpg";
import banner2 from "../assets/banner2.jpg";
import Cake1 from "../assets/Cake1.webp";
import Ecommerce from "../assets/Ecommerce.jpg";
import Moniginis from "../assets/Moniginis.png";
export function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className=" overflow-hidden cursor-pointer px-5 md:px-1">
      <Slider {...settings}>
        <img src={love} className="d-block w-20 h-24 md:w-100 md:h-72" alt="..." />
        <img src={Cake1} className="d-block w-20 h-24 md:w-100 md:h-72" alt="..." />
        <img src={Ecommerce} className="d-block w-20 h-24 md:w-100 md:h-72" alt="..." />
        <img src={banner2} className="d-block w-20 h-24 md:w-100 md:h-72" alt="..." />
        <img src={Moniginis} className="d-block w-20 h-24 md:w-100 md:h-72" alt="..." />
        <img src={chocolate} className="d-block w-20 h-24 md:w-100 md:h-72" alt="..." />
        <img src={Anniversary} className="d-block w-20 h-24 md:w-100 md:h-72" alt="..." />
        <img src={Home} className="d-block w-20 h-24 md:w-100 md:h-72" alt="..." />
        <img src={ramji} className="d-block w-20 h-24 md:w-100 md:h-72" alt="..." />
      </Slider>
    </div>
  );
}
