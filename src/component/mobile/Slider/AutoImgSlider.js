import { useState, useRef, useEffect, Component } from "react";

import Slider from "react-slick";

import slider1 from "../../../assets/img/mobile/slider1.png";
import slider2 from "../../../assets/img/mobile/slider2.png";
import slider3 from "../../../assets/img/mobile/slider3.png";
import slider4 from "../../../assets/img/mobile/slider4.png";
import appstorebtn from "../../../assets/img/mobile/appstorebtn.png";
import googleplaybtn from "../../../assets/img/mobile/googleplaybtn.png";
export default function MainImgSlider({ setIndex }) {
  const settings = {
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
  };
  return (
    <>
      <div className="">
        <Slider {...settings}>
          <div className="relative text-white ">
            <img className="w-full h-screen " src={slider1} alt="" />
            <p className="absolute   font-neosb text-[5.2vw] tracking-[-0.1vw] top-[20vh] left-[8vw]">
              아기의자
              <br />
              아기메뉴
              <br />
              유모차 출입...
            </p>
            <p className="absolute   font-neoh text-[8vw] leading-[9.4vw] tracking-[-0.3vw] top-[70vh] left-[8vw]  ">
              미리 알고
              <br /> 방문할 수 없을까요?
            </p>
          </div>
          <div className="relative text-white">
            <img className="w-full h-screen " src={slider2} alt="" />
            <p className="absolute   font-neosb text-[5.2vw] tracking-[-0.1vw] top-[20vh] right-[8vw]">
              아이와 함께하는 가족이
            </p>
            <p className="absolute   font-neoh text-[8vw] leading-[9.4vw] tracking-[-0.3vw] top-[70vh] right-[8vw] text-right">
              더 많은
              <br /> 추억을 쌓을 수 있도록
            </p>
          </div>
          <div className="relative text-white">
            <img className="w-full h-screen " src={slider3} alt="" />
            <p className="absolute   font-neosb text-[5.2vw] tracking-[-0.1vw] top-[22vh]   text-center w-full">
              처음이라 서툴고 어려운 육아
            </p>
            <p className="absolute   font-neoh text-[8vw] leading-[9.4vw] tracking-[-0.3vw] top-[74vh] left-[31px] ">
              당신의 수고를 알기에
              <br /> 든든한 힘이 되어드릴게요
            </p>
          </div>
          <div className="relative text-[#d9427a]">
            <img className="w-full h-screen " src={slider4} alt="" />
            <p className="absolute   font-neoh text-[8vw] leading-[9.4vw] tracking-[-0.3vw] top-[24vh] text-center w-full ">
              부모가 되어도
              <br />
              특별한 날은 우아하게
            </p>
            <p className="absolute   font-neoeb text-[5.2vw] tracking-[-0.1vw] top-[35vh]   text-center w-full">
              지금 APP으로 만나보세요
            </p>
            <div className="absolute flex w-full justify-center top-[45vh]  ">
              <img
                className="w-[41vw]   mr-2"
                src={appstorebtn}
                alt=""
                onClick={() => {
                  setIndex(3);
                }}
              />
              <img className="w-[41vw]   " src={googleplaybtn} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}
