import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../../assets/img/main-section8/slider1.png";
import slider2 from "../../../assets/img/main-section8/slider2.png";
import slider3 from "../../../assets/img/main-section8/slider3.png";
import slider4 from "../../../assets/img/main-section8/slider4.png";
import slider5 from "../../../assets/img/main-section8/slider5.png";
import slider6 from "../../../assets/img/main-section8/slider6.png";
import AutoImgSliderChild from "./AutoImgSliderChild";
const slider = [
  { id: 3, img: slider3 },
  { id: 4, img: slider5 },
  { id: 5, img: slider1 },
  { id: 6, img: slider6 },
  { id: 7, img: slider1 },
  { id: 1, img: slider4 },
  { id: 2, img: slider2 },
];

export default function MainImgSlider({ setIndex }) {
  const settings = {
    draggable: false,
    pauseOnHover: false,
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };
  return (
    <>
      <div className="">
        <Slider {...settings}>
          {slider.map((slider) => {
            return (
              <AutoImgSliderChild
                key={slider.id}
                id={slider.id}
                img={slider.img}
              />
            );
          })}
        </Slider>
      </div>
    </>
  );
}
