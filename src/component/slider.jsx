import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cake from "../assets/cake.jpg";
import baker from "../assets/baker.png";
import ImgPage from "./imagePage";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className=" overflow-hidden ">
      <Slider {...settings}>
        <ImgPage className="imgname " />
        <ImgPage />
        <ImgPage />
      </Slider>
    </div>
  );
}
