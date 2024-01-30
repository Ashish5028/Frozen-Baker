import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import love from "../assets/love.webp";
import Home from "../assets/Home.webp";
import chocolate from "../assets/Chocolate.webp";
import Anniversary from "../assets/Anniversary.webp";
import ramji from "../assets/Ram-Mandir.jpg";
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
    <div className=" overflow-hidden cursor-pointer ">
      <Slider {...settings}>
        <img src={ramji} class="d-block w-100" alt="..." />
        <img src={Home} class="d-block w-100" alt="..." />
        <img src={love} class="d-block w-100" alt="..." />
        <img src={chocolate} class="d-block w-100" alt="..." />
        <img src={Anniversary} class="d-block w-100" alt="..." />
      </Slider>
      {/* <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <img src={love} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img src={chocolate} class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> */}
    </div>
  );
}
