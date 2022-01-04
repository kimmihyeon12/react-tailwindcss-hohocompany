import slider1 from "../assets/img/mobile/slider1.png";
import logo from "../assets/img/mobile/logo.png";
import logob from "../assets/img/mobile/logob.png";
import bar from "../assets/img/mobile/bar.png";
import highlight from "../assets/img/mobile/highlight.png";
import highlightline from "../assets/img/mobile/highlightline.png";
import phone from "../assets/img/mobile/phone.png";
import background from "../assets/img/mobile/background.png";
import backgroundb from "../assets/img/mobile/background-b.png";
import phone1 from "../assets/img/mobile/phone1.png";
import bubble from "../assets/img/mobile/bubble.png";
import bubble1 from "../assets/img/mobile/bubble1.png";
import text1 from "../assets/img/mobile/text1.png";
import SliderCenterBig from "../component/mobile/sliderCenterBig";
import card1 from "../assets/img/mobile/card1.png";
import Scroll from "../component/mobile/Scroll";
import newsbutton from "../assets/img/mobile/newsbutton.png";
import movie from "../assets/img/mobile/movie.png";
import icons from "../assets/img/mobile/icons.png";
import backgroundbaby from "../assets/img/mobile/backgroundbaby.png";
import googlebtn from "../assets/img/mobile/googlebtn.png";
import company1 from "../assets/img/mobile/company1.png";
import company2 from "../assets/img/mobile/company2.png";
import { useEffect, useRef, useState } from "react";
import Slider from "../component/mobile/Slider";

import smoothscroll from "smoothscroll-polyfill";
function MobilePage() {
  console.log(document.body.offsetHeight);
  const page = useRef();

  let count = 0;
  let prevState = 0;
  let touch = true;
  let vh = window.innerHeight * 0.01;

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  document.addEventListener("touchstart", (e) => {
    console.log("touchstart");

    prevState = window.pageYOffset;
  });

  document.addEventListener("touchend", (e) => {
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    if (touch) {
      console.log("touchend");

      let scrolly = window.pageYOffset - prevState;

      if (scrolly > 0) {
        console.log("스크롤 아래로");
        count++;
        smoothscroll.polyfill();
        window.scrollTo({
          top: count * 100 * vh,
          behavior: "smooth",
        });
      } else {
        console.log("스크롤 위로");
        count--;
      }

      window.scrollTo({
        top: count * window.innerHeight,
        behavior: "smooth",
      });
      // touch = false;
      // document.body.style.overflow = "hidden";
      // setTimeout(() => {
      //   touch = true;
      //   document.body.style.overflow = "auto";
      // }, 2000);
    }
  });

  return (
    <div className="w-full" ref={page}>
      <style> </style>
      <div className="w-full h-screen bg-yellow-50">
        <Slider />
      </div>

      <div
        className="relative w-full h-screen  flex flex-col items-center  border  "
        id="page2"
      >
        <div className=" duration-500">
          <h1 className="pt-[30vw] text-[8vw] leading-[9.4vw] font-neoeb text-center tracking-[-1.5px]">
            유아를 동반한 부모가
            <br />
            외식할 때<br />
            각종 편의시설이 부족해요
          </h1>
          <img
            className="absolute w-[28vw] z-[-1] top-[48vw] left-[15vw]  "
            src={highlight}
            alt=""
          />
          <p className="text-[4.8vw] leading-[6vw] font-neosb mt-[1.5vh] tracking-[-0.9px]">
            엄마 아빠가 편하게 나갈 수는 없을까요?
          </p>
        </div>

        <div className="relative flex justify-center duration-700">
          <div className="absolute w-[80vw] h-[37vh]   z-[-1] top-[11vh] rounded-2xl bg-[#f2f3f5]"></div>
          <img className=" h-[41vh] mt-[7vh]" src={phone} alt="" />
        </div>
      </div>
      <div
        className="relative w-full h-screen flex justify-center  "
        id="page3"
      >
        <img className="w-full" src={background} alt="" />

        <p className="absolute top-[20vh] text-center font-neoh text-[8vw] leading-[9.4vw] tracking-[-0.75px] text-white duration-500">
          지금까지
          <br />
          이런 고민하지
          <br />
          않으셨나요
        </p>
        {/* <p className="absolute top-[118vw] text-center text-[8vw] leading-[9.4vw] tracking-[-1.5px] font-neoeb">
          아이와 나가려면
          <br />
          검색만 수십 번.
        </p> */}

        <img
          className="absolute top-[56vh] w-[47.5vw] duration-500 "
          src={text1}
          alt=""
        />
        <p className="absolute top-[72vh] text-center text-[4.8vw] leading-[6vw] tracking-[-0.9px] font-neosb duration-500">
          "아이와 가족을 배려하는 공간을 파악하는 <br />
          <span className="text-[#f93873]">다리를 만드는거 어때?</span>라고
          떠올렸죠!"
        </p>
      </div>
      <div className="relative w-full h-screen bg-[#f2f2f2]  overflow-hidden  ">
        <img className="absolute w-full " src={backgroundb} alt="" />
        <img
          className="absolute top-[11vh] w-[37vh] right-[4vw] animate-bounce-2s"
          src={bubble}
          alt=""
        />
        <img
          className="absolute top-[23.5vh] w-[39vh] left-[5vw] animate-bounce-4s"
          src={bubble1}
          alt=""
        />
        <div className="absolute flex justify-center top-[38vh] w-full ">
          <img className=" h-[57vh] ml-3 " src={phone1} alt="" />
        </div>
      </div>
      <div className=" w-full h-screen flex flex-col items-center ">
        <p className=" pt-[12vh] text-center text-[4.8vw] leading-[6vw] tracking-[-0.9px] font-neosb">
          육아맘과 육아대디에게
        </p>
        <p className=" pt-[1vh] text-center text-[8vw] leading-[9.4vw] tracking-[-0.9px] font-neosb">
          꼭 필요한 정보를 편리하게
        </p>
        <div className="flex   font-neosb   text-[3.5vw]    pt-[4vh] ">
          <div className="flex items-center justify-center w-[24vw] border rounded-full  h-[4vh] text-[#f93873] border-[#f93873] ">
            #아기의자
          </div>
          <div className="flex items-center justify-center w-[24vw] border rounded-full h-[4vh] text-[#39396c] border-[#39396c] ml-[9px]">
            #기저귀 교환
          </div>
          <div className="flex items-center justify-center w-[24vw] border rounded-full h-[4vh] text-[#39396c] border-[#39396c] ml-[9px]">
            #놀이방
          </div>
        </div>
        <div className="flex   font-neosb   text-[3.5vw]    mt-[2vh]   ">
          <div className="flex items-center justify-center w-[24vw] border rounded-full h-[4vh] text-[#39396c]  border-[#39396c] ">
            #아기메뉴
          </div>
          <div className="flex items-center justify-center w-[24vw] border rounded-full  h-[4vh] text-[#f93873] border-[#f93873] ml-[9px]">
            #아이식기
          </div>
        </div>
        <div className=" w-screen h-[55vh] mt-[5.5vh] ">
          <SliderCenterBig />
        </div>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center  ">
        <p className="text-[8vw] leading-[9.4vw] tracking-[-1.5px] font-neoeb mt-[7vh]">
          우아하게는
        </p>
        <img className="  h-[35vh] mt-[2vh] " src={movie} alt="" />
        <p className="text-[8vw] leading-[9.4vw] tracking-[-1.5px] font-neoeb mt-[3vh] text-center">
          우리아이와 함께하다
          <br /> 라는 뜻이에요
        </p>
        <div className="absolute bottom-0 h-[27vh] bg-gray-100 w-full flex justify-center ">
          <img className="mt-[6vh]  h-[17vh] " src={icons} alt="" />
        </div>
      </div>
      <div className="relative w-full h-screen pt-[48px]">
        <p className="text-[4.4vw] leading-[6vw] tracking-[-0.9px] font-neob text-center">
          고객에게는 마음 편한 장소를 제공하고 <br />
          제휴 상점에는 매장 홍보 서비스를 제공하여 <br />
          지속적인 고객 유치를 지원하게 됩니다 <br />
        </p>
        <p className="text-center text-[8vw] leading-[9.4vw] tracking-[-1.5px] font-neoeb mt-[17vh]">
          Instagram
        </p>
        <p className="text-center text-[4.4vw] leading-[6vw] tracking-[-0.9px] font-neosb">
          @uahage_official
        </p>
        <div className="mt-[3vh] flex flex-col items-center">
          <div className="mt-[1vh] flex ">
            <img className="  h-[15vh] mr-[1vw] " src={card1} alt="" />
            <img className="   h-[15vh]  mr-[1vw] " src={card1} alt="" />
            <img className="   h-[15vh]  mr-[1vw] " src={card1} alt="" />
          </div>
          <div className="mt-[0.5vh] flex">
            <img className="   h-[15vh]  mr-[1vw] " src={card1} alt="" />
            <img className="   h-[15vh]  mr-[1vw] " src={card1} alt="" />
            <img className="   h-[15vh]  mr-[1vw] " src={card1} alt="" />
          </div>
          <div className="mt-[0.5vh] flex">
            <img className="   h-[15vh]  mr-[1vw] " src={card1} alt="" />
            <img className="   h-[15vh]  mr-[1vw] " src={card1} alt="" />
            <img className="   h-[15vh]  mr-[1vw] " src={card1} alt="" />
          </div>
        </div>
      </div>
      <div className="relative w-full h-screen  ">
        <p className="text-center  text-[8vw] leading-[9.4vw] tracking-[-1.5px] font-neoeb pt-[16vh] pb-[7vh]">
          우아하게의
          <br /> 새로운 소식을 만나보세요
        </p>
        <Scroll />
        <div className="w-full flex justify-center pt-[7vh]  ">
          <img className="  w-[50vw]   " src={newsbutton} alt="" />
        </div>
      </div>
      <div className="relative w-full h-screen  ">
        <div className="absolute flex flex-col items-center w-full">
          <p className="text-center text-[4.4vw] leading-[6vw] tracking-[-0.9px] font-neosb mt-[7vh]">
            우리 아이와 어디 갈지 고민이라면
          </p>
          <p className="text-center  text-[8vw] leading-[9.4vw] tracking-[-1.5px] font-neoeb mt-[0.5vh] ">
            우아하게와 함께하세요!
          </p>
        </div>

        <img className="absolute top-0  w-full " src={backgroundbaby} alt="" />
      </div>
      <div className="relative w-full h-screen border  border-black bg-black pl-[8vw]">
        <img className="  h-[4.5vh]  mt-[6vh] " src={logob} alt="" />
        <p className="  text-[3.2vw]  mt-[5vh]  text-white font-neol">
          서비스 이용약관 | 개인정보 보호정책 | 위치기반서비스 이용약관
        </p>
        <p className="  text-[3.2vw] leading-[2.8vh] mt-[2.5vh]  text-[#c7c7c7] font-neol">
          사업자명 : (주)호호컴퍼니 | 대표 : 김화영
          <br /> 사업자등록번호 : 322-86-01766 | TEL : 061-331-3117 <br />
          Email : hohoco0701@gmail.com <br />
          주소 : 58325)전라남도 나주시 빛가람로 740 한빛타워 6층 601호 <br />
          COPYRIGHT(C) hohocompany Inc. ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
}
export default MobilePage;
