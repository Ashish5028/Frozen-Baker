import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cake from "../assets/cake.jpg";
export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        <img src={cake} />
        <img src={cake} />
        <img src={cake} />
        <img src={cake} />
      </Slider>
    </div>
  );
}
