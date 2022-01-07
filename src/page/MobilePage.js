import highlight from "../assets/img/mobile/highlight.png";

import phone from "../assets/img/mobile/phone.png";
import background from "../assets/img/mobile/background.png";
import backgroundb from "../assets/img/mobile/background-b.png";
import phone1 from "../assets/img/mobile/phone1.png";
import bubble from "../assets/img/mobile/bubble.png";
import bubble1 from "../assets/img/mobile/bubble1.png";
import text1 from "../assets/img/mobile/text1.png";
import card1 from "../assets/img/mobile/card1.png";
import newsbutton from "../assets/img/mobile/newsbutton.png";
import movie from "../assets/img/mobile/movie.png";
import icons from "../assets/img/mobile/icons.png";
import backgroundbaby from "../assets/img/mobile/backgroundbaby.png";
import googlebtn from "../assets/img/mobile/googlebtn.png";
import applebtn from "../assets/img/mobile/applebtn.png";
import company1 from "../assets/img/mobile/company1.png";
import company2 from "../assets/img/mobile/company2.png";
import { useEffect, useRef, useState } from "react";
import AutoImgSlider from "../component/mobile/Slider/AutoImgSlider";
import CenterImgSlider from "../component/mobile/Slider/CenterImgSlider";
import ImgSlider from "../component/mobile/Slider/ImgSlider";
import Header from "../component/mobile/Header";
import PreparPopup from "../component/mobile/Popup/PreparPopup";
import smoothscroll from "smoothscroll-polyfill";
import Page from "../component/mobile/Page";
import Footer from "../component/mobile/Footer";

function MobilePage() {
  const [logoColor, setLogoColor] = useState(0);
  const [count, setCount] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [preparIndex, setPreparIndex] = useState(0);
  const pages = useRef([]);

  smoothscroll.polyfill();

  let prevState = 0;
  let touch = true;
  useEffect(() => {
    document.addEventListener("touchstart", (e) => {
      prevState = window.pageYOffset;
    });
    document.addEventListener("touchend", (e) => {
      setScrollY(window.pageYOffset - prevState);
    });
  }, []);
  useEffect(() => {
    if ((touch && scrollY > 5) || (touch && scrollY < -5)) {
      if (scrollY > 0) {
        if (count <= 8) {
          setCount(count + 1);
        }
      } else {
        if (count > 0) setCount(count - 1);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollY]);
  useEffect(() => {
    console.log(`count : ${count}`);
    var location;
    for (let i = 0; i < 10; i++) {
      if (count === i) {
        location = pages.current[i].offsetTop;
      }
    }
    if (count === 0 || count === 2) {
      setLogoColor(1);
    } else if (count === 1) {
      setLogoColor(0);
    } else {
      setLogoColor(2);
    }

    window.scrollTo({
      top: location,
      behavior: "smooth",
    });
    touch = false;
    document.body.style.overflow = "hidden";

    setTimeout(() => {
      touch = true;
      document.body.style.overflow = "auto";
    }, 500);
  }, [count]);

  return (
    <div className="w-full">
      <PreparPopup index={preparIndex} setIndex={setPreparIndex} />
      <Header color={logoColor} />
      <Page ref={(elem) => (pages.current[0] = elem)} center={false}>
        <AutoImgSlider setIndex={setPreparIndex} />
      </Page>
      <Page ref={(elem) => (pages.current[1] = elem)}>
        <h1 className="pt-[30vw] text-[8vw] leading-[9.4vw] font-neoeb text-center tracking-[-1.5px] ">
          유아를 동반한 부모가
          <br />
          외식할 때<br />
          각종 편의시설이 부족해요
        </h1>
        <img
          className="absolute w-[28vw] z-[-1] top-[48vw] left-[26vw]  "
          src={highlight}
          alt=""
        />
        <p className="text-[4.8vw] leading-[6vw] font-neosb mt-[1.5vh] tracking-[-0.9px] text-center">
          엄마 아빠가 편하게 나갈 수는 없을까요?
        </p>

        <div className="relative flex justify-center">
          <div className="absolute w-[80vw] h-[37vh]   z-[-1] top-[11vh] rounded-2xl bg-[#f2f3f5]"></div>
          <img className=" h-[41vh] mt-[7vh]" src={phone} alt="" />
        </div>
      </Page>
      <Page ref={(elem) => (pages.current[2] = elem)} center={true}>
        <img className="w-full" src={background} alt="" />

        <p className="absolute top-[20vh] text-center font-neoh text-[8vw] leading-[9.4vw] tracking-[-0.75px] text-white">
          지금까지
          <br />
          이런 고민하지
          <br />
          않으셨나요
        </p>

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
      </Page>
      <Page
        ref={(elem) => (pages.current[3] = elem)}
        center={false}
        bgColor={"[#f2f2f2]"}
      >
        <div className="relative">
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
      </Page>
      <Page ref={(elem) => (pages.current[4] = elem)} center={false}>
        <div className="flex flex-col items-center ">
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
          <div className=" w-screen h-[55vh] mt-[5.5vh]  overflow-y-hidden ">
            <CenterImgSlider />
          </div>
        </div>
      </Page>
      <Page ref={(elem) => (pages.current[5] = elem)} center={true}>
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
      </Page>
      <Page ref={(elem) => (pages.current[6] = elem)} center={true}>
        <p className="pt-[6vh] text-[4.4vw] leading-[6vw] tracking-[-0.9px] font-neob text-center">
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
        <div
          className="mt-[3vh] flex flex-col items-center"
          onClick={() => {
            setPreparIndex(1);
          }}
        >
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
      </Page>
      <Page ref={(elem) => (pages.current[7] = elem)} center={false}>
        <p className="text-center  text-[8vw] leading-[9.4vw] tracking-[-1.5px] font-neoeb pt-[16vh] pb-[7vh]">
          우아하게의
          <br /> 새로운 소식을 만나보세요
        </p>
        <ImgSlider />
        <div className="w-full flex justify-center pt-[7vh]  ">
          <img
            className="  w-[50vw]   "
            src={newsbutton}
            alt=""
            onClick={() => {
              setPreparIndex(2);
            }}
          />
        </div>
      </Page>
      <Page ref={(elem) => (pages.current[8] = elem)} center={false}>
        <div className="absolute flex flex-col items-center w-full">
          <p className="text-center text-[4.4vw] leading-[6vw] tracking-[-0.9px] font-neosb mt-[7vh]">
            우리 아이와 어디 갈지 고민이라면
          </p>
          <p className="text-center  text-[8vw] leading-[9.4vw] tracking-[-1.5px] font-neoeb mt-[0.5vh] ">
            우아하게와 함께하세요!
          </p>
          <div className="flex mt-[2vh]">
            <img
              className="  h-[5.4vh] mr-1 z-10 "
              src={applebtn}
              alt=""
              onClick={() => {
                setPreparIndex(3);
              }}
            />
            <img className=" h-[5.4vh]   z-10 " src={googlebtn} alt="" />
          </div>

          <div className="relative  mt-[43vh]">
            <img className="  h-[12.5vh]" src={company2} alt="" />
            <div className="absolute top-0 text-white left-3">
              <p className=" font-neob text-[4.8vw] mt-[1.5vh]">
                Partnership Proposal
              </p>
              <p className="font-neosb text-[3.5vw] mt-[1.2vh]">
                함께 성장할 비즈니스 제휴와
                <br /> 파트너쉽을 기다립니다
              </p>
            </div>
            <div className="absolute top-[7vh] right-[2vw] bg-[#fb6b79] px-[4vw]  h-[4vh] flex items-center rounded-full font-neosb text-[12px]   text-white">
              함께 성장하기
            </div>
          </div>
          <div className="relative  mt-[3vh]">
            <img className="  h-[12.5vh]" src={company1} alt="" />
            <div className="absolute top-0 text-white left-3">
              <p className=" font-neob text-[4.8vw] mt-[2vh]">
                Opinion and Support
              </p>
              <p className="font-neosb text-[3.5vw] mt-[1.2vh]">
                여러분의 의견을 자유롭게 알려주세요
                <br />
                응원의 메시지도 좋습니다
              </p>
            </div>
            <div className="absolute top-[7vh] right-[2vw] bg-[#fb6b79] px-[4vw]  h-[4vh] flex items-center rounded-full font-neosb text-[12px]   text-white">
              소통하기
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 w-full h-[58vh] "
          src={backgroundbaby}
          alt=""
        />
      </Page>
      <Page
        ref={(elem) => (pages.current[9] = elem)}
        center={true}
        bgColor={"black"}
      >
        <Footer />
      </Page>
    </div>
  );
}
export default MobilePage;
