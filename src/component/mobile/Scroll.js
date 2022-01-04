import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import news from "../../assets/img/mobile/news.png";

export default class AutoSlider extends Component {
  render() {
    // const slider = [
    //   { id: 3, img: slider3 },
    //   { id: 4, img: slider5 },
    // ];

    const settings = {
      arrows: false,
      fade: false,

      draggable: true,
      pauseOnHover: false,

      infinite: true,
      speed: 500,
      slidesToShow: 1.45,
      slidesToScroll: 1,

      cssEase: "linear",
    };

    return (
      <>
        <div className=" h-[46vh] " ref="autoslider">
          <style>{}</style>
          <Slider {...settings}>
            <div className="ml-[41.2vw]">
              <div>
                <img className="h-[36.5vh]" src={news} alt="img" />
                <p className="ml-0.5 w-[65vw] text-[4.8vw] leading-[6vw] tracking-[-0.9px] font-neosb mt-[4vw] ">
                  우아하게의 새로운 캐릭터 친구를 소개합니다!
                </p>
              </div>
            </div>
            <div className="ml-[41.2vw]">
              <div>
                <img className="h-[36.5vh]" src={news} alt="img" />
                <p className="ml-0.5 w-[65vw] text-[4.8vw] leading-[6vw] tracking-[-0.9px] font-neosb mt-[4vw]">
                  우아하게의 새로운 캐릭터 친구를 소개합니다!
                </p>
              </div>
            </div>
            <div className="ml-[41.2vw]">
              <div className="">
                <img className="h-[36.5vh]" src={news} alt="img" />
                <p className="ml-0.5 w-[65vw] text-[4.8vw] leading-[6vw] tracking-[-0.9px] font-neosb mt-[4vw]">
                  우아하게의 새로운 캐릭터 친구를 소개합니다!
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
const cssstyle = `
.slick-slide:first-child {
	margin: 0 75px;
}

`;
