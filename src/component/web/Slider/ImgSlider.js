/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useRef, useEffect, Component } from "react";

import Slider from "react-slick";

import banner1 from "../../../assets/img/main-section1/main-banner1.png";
import banner2 from "../../../assets/img/main-section1/main-banner2.png";
import banner3 from "../../../assets/img/main-section1/main-banner3.png";
import banner4 from "../../../assets/img/main-section1/main-banner4.png";
import leftBtn from "../../../assets/img/main-section1/left.png";
import rightBtn from "../../../assets/img/main-section1/right.png";
import play from "../../../assets/img/main-section1/play.png";
import stop from "../../../assets/img/main-section1/stop.png";
import SliderText from "./SliderText";
export default function MainImgSlider({ setIndex }) {
  const banner = [banner1, banner2, banner3, banner4];
  const [sliderCount, setSliderCount] = useState(0);
  const [barwidth, setbarwidth] = useState(1);
  const [btnState, setBtnState] = useState(true);
  const slider = useRef();
  const backbar = useRef();
  const bar = useRef();
  let time;

  useEffect(() => {
    if (btnState) {
      time = setInterval(() => {
        setbarwidth((barwidth) => barwidth + 1);
      }, 100);
    } else {
      clearInterval(time);
    }
    return () => {
      clearInterval(time);
    };
  }, [btnState]);

  useEffect(() => {
    if (barwidth >= backbar.current.clientWidth) {
      setSliderCount((sliderCount) => sliderCount + 1);
    }
    bar.current.style.width = `${barwidth}px`;
  }, [barwidth]);

  useEffect(() => {
    setbarwidth(0);
    if (sliderCount > 3) {
      setSliderCount(0);
    }
    if (sliderCount <= -1) {
      setSliderCount(3);
    }
    slider.current.slickGoTo(sliderCount);
  }, [sliderCount]);

  const settings = {
    arrows: false,
    fade: true,
    pauseOnHover: false,
  };

  return (
    <>
      <div className="">
        <style>{}</style>
        <Slider {...settings} ref={slider}>
          {banner.map((banner, index) => {
            return (
              <div className="" key={banner}>
                <img className="" src={banner} alt="" />
                <SliderText count={index} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="absolute top-[45vw] left-[13.6vw] w-[10vw] h-[0.5vw]">
        <div
          className="backbar absolute w-[10vw] h-[0.5vw] z-10 bg-[rgba(0,0,0,0.2)] rounded-[1vw]"
          ref={backbar}
        ></div>
        <div
          className="bar absolute w-[1vw] h-[0.5vw] z-10 bg-[white] rounded-[1vw] "
          ref={bar}
        ></div>
      </div>
      <div className="absolute top-[44.5vw] left-[10.5vw] flex  font-neob text-[white]">
        <img
          src={leftBtn}
          className="top-0 rightbtn h-[1.5vw] mr-[0.5vw] "
          alt=""
          onClick={(e) => {
            if (btnState) {
              setSliderCount(sliderCount - 1);
            }
          }}
        />
        <h1 className="leftText mr-[11vw] text-[1.2vw] ">01</h1>
        <h1 className="rightText text-[1.2vw] mr-[0.5vw] ">02</h1>
        <img
          src={rightBtn}
          className="top-0 rightbtn h-[1.5vw] "
          alt=""
          onClick={(e) => {
            if (btnState) {
              setSliderCount(sliderCount + 1);
            }
          }}
        />
        <img
          src={btnState ? play : stop}
          className="z-10  top-0 mt-[0.1vw] ml-[1vw] w-[0.9vw] h-[1.4vw] playbtn"
          alt=""
          onClick={() => {
            setBtnState(!btnState);
          }}
        />
      </div>
    </>
  );
}
