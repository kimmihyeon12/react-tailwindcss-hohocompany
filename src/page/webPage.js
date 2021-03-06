import backgroud from "../assets/img/main-section3/background.png";
import phone3 from "../assets/img/main-section3/phone.png";
import text1 from "../assets/img/main-section3/text1.png";
import text2 from "../assets/img/main-section3/text2.png";
import text3 from "../assets/img/main-section3/text3.png";
import text4 from "../assets/img/main-section3/text4.png";

import iconGroup from "../assets/img/main-section4/icongroup.png";
import movieImg from "../assets/img/main-section7/card.png";
import newsImg1 from "../assets/img/main-section8/news1.png";
import newsImg2 from "../assets/img/main-section8/news2.png";
import newsImg3 from "../assets/img/main-section8/news3.png";
import newsBtn from "../assets/img/main-section8/news_button.png";
import newsBtnHv from "../assets/img/main-section8/news_button_hover.png";
import infoImg1 from "../assets/img/main-section8/company-info1.png";
import infoImg2 from "../assets/img/main-section8/company-info2.png";
import appDown from "../assets/img/main-section8/app_download.png";
import apple from "../assets/img/main-section8/app_store.png";
import google from "../assets/img/main-section8/googleplay.png";

import mouse from "../assets/img/main-section1/mouse.png";
import kakaouahage from "../assets/img/footer/kakao.png";
import movieIcon from "../assets/img/main-section7/movieicon.png";

import Scrollview from "../component/web/Scroll/Scrollview";

import AutoImgSlider from "../component/web/Slider/AutoImgSlider";
import NewsBox from "../component/web/Box/NewsBox";
import CompanyBox from "../component/web/Box/CompanyBox";
import Recruitment from "../component/web/Popup/Recruitment";
import Communication from "../component/web/Popup/Communication";
import { useState } from "react";

import Footer from "../component/web/Footer";
import ImgSlider from "../component/web/Slider/ImgSlider";
import Header from "../component/web/Header";
import CenterImgSlider from "../component/web/Slider/CenterImgSlider";
import PreparPopup from "../component/web/Popup/PreparPopup";
const infoImg = [
  {
    background: infoImg1,
    text: "?????? ????????????",
    title: "Partnership Proposal",
    content: "?????? ????????? ???????????? ?????????  ??????????????? ???????????????",
  },
  {
    background: infoImg2,
    text: "????????????",
    title: "Opinion and Support",
    content: "???????????? ????????? ???????????? ??????????????? ????????? ???????????? ????????????",
  },
];

export default function WebPage() {
  const newsImg = [newsImg1, newsImg2, newsImg3];
  let [newsBtnActive, setNewsBtnActive] = useState(true);

  const [preparIndex, setPreparIndex] = useState(0);
  const [recruitmentIndex, setRecruitment] = useState(false);
  const [communicationIndex, setCommunication] = useState(false);

  return (
    <div className="App">
      <PreparPopup index={preparIndex} setIndex={setPreparIndex} />
      <Communication index={communicationIndex} setIndex={setCommunication} />
      <Recruitment index={recruitmentIndex} setIndex={setRecruitment} />
      <Header />
      <div className="w-screen  h-[49.4vw]">
        <ImgSlider />
        <div className=" absolute animate-bounce-2s z-10 top-[45vw] left-[49vw]">
          <img className="w-[1.4vw]" src={mouse} alt="" />
        </div>
      </div>
      <div>
        <div className="flex w-screen h-[49vw]  justify-center ">
          <Scrollview page={2} />
        </div>
        <div className="flex w-screen h-[72.6vw] relative justify-center">
          <img className="h-[66vw] absolute" src={backgroud} alt="" />
          <div className="absolute text-[white] mt-[7.7vw] ">
            <p className="font-neob text-[2.6vw] mb-[3vw]">
              ???????????? ?????? ???????????? ????????????????
            </p>
            <p className="font-neosb text-[1.4vw] mb-[5vw] text-center">
              ????????? ?????? ???...
              <br />
              ??????????????? ?????? ????????? ????????? ??? ?????? ???????????? ?????????!
              <br />
              '????????? ????????? ???????????? ????????? ???????????? ????????? ?????????'??????
              ????????????!
              <br />
              ????????? ??????????????? ??????????????????.
            </p>
          </div>

          <div className="w-screen relative z-10 mt-[28vw] ">
            <img
              className="absolute z-10 ml-[39.5vw] w-[22vw]"
              src={phone3}
              alt=""
            />
            <img
              className="absolute animate-bounce-3s  ml-[13.5vw] mt-[8vw] w-[23.3vw]"
              src={text1}
              alt=""
            />
            <img
              className="absolute animate-bounce-4s ml-[18vw] mt-[22vw] w-[18.7vw]"
              src={text2}
              alt=""
            />
            <img
              className="absolute animate-bounce-4s ml-[61vw] mt-[10vw] w-[25.7vw]"
              src={text3}
              alt=""
            />
            <img
              className="absolute animate-bounce-3s ml-[61vw] mt-[22vw] w-[18.8vw]"
              src={text4}
              alt=""
            />
          </div>
        </div>

        <div className="flex flex-col w-screen h-[29.5vw] items-center">
          <p className="font-neoeb text-[2.6vw] mb-[0.7vw]">
            ????????? ????????? ????????? ?????? ????????????
          </p>
          <p className="font-neob text-[1.4vw] mb-[2.3vw]">
            ????????? ?????? ????????? ???????????? ??? ??????, ??? ?????? ???????????????
          </p>
          <img className="w-[46.5vw]" src={iconGroup} alt=""></img>
        </div>

        <div className=" w-screen h-[46.5vw] mt-[5.3vw] ">
          <CenterImgSlider />
        </div>

        <div className="w-screen h-[49vw] flex justify-center bg-white z-10">
          <Scrollview page={4} />
        </div>
        <div>
          <div className="absolute w-[100vw] h-[49vw] bg-white "></div>
          <div className="flex flex-col w-[100vw] h-[49vw]  items-center justify-center">
            <div className="relative w-[100vw] h-[31vw]  flex justify-center">
              <img
                className="absolute w-[51.4vw]  transition duration-1000 transform hover:scale-110"
                src={movieImg}
                alt=""
              />
              <img
                className="absolute top-[12vw] w-[5vw]"
                src={movieIcon}
                alt=""
              />
            </div>

            <ul className="z-10 flex">
              <li className="text-[2.6vw] font-neor leading-[2.9vw] mr-[4vw] ">
                ???????????????
                <br />
                <span className="font-neob">??????????????? ????????????</span>
                <br />
                ?????? ????????????
              </li>
              <li className="text-[1.4vw] font-neosb leading-[1.9vw]">
                ??????????????? ?????? ?????? ??????????????? ????????????
                <br /> ?????? ???????????? ?????? ?????? ???????????? ????????????
                <br /> ???????????? ?????? ????????? ???????????? ?????????
              </li>
            </ul>
          </div>
        </div>

        <div className="relative h-[35vw] ">
          <div className="flex items-center mb-[1.6vw] mt-[9.4vw]">
            <p className="font-neob text-[2.6vw] ml-[11vw] mr-[0.5vw]">
              Instagram
            </p>
            <p className="text-[1.4vw] font-neosb">@uahage_official</p>
          </div>

          <div
            className=" h-[14vw]"
            onClick={() => {
              setPreparIndex(1);
            }}
          >
            <AutoImgSlider />
          </div>
        </div>

        <div className="ml-[11vw] h-[40vw] ">
          <p className="font-neor leading-[2.9vw] text-[2.6vw]">
            ??????????????? <br />
            <span className="font-neob">????????? ??????</span>??? ???????????????
          </p>
          <ul className="ml-[6vw] flex mt-[5.5vw]">
            {newsImg.map((img, index) => {
              return <NewsBox key={index} img={img} />;
            })}
          </ul>
          <div
            className="mt-[3.1vw] w-[82vw] flex duration-1000 justify-center cursor-pointer"
            onMouseOver={() => {
              setNewsBtnActive(false);
            }}
            onMouseOut={() => setNewsBtnActive(true)}
          >
            {newsBtnActive ? (
              <img
                className="w-[16.15vw] h-[3.65vw]  transform "
                src={newsBtn}
                alt=""
              />
            ) : (
              <img
                className="w-[16.15vw] h-[3.65vw] duration-1000 transform"
                src={newsBtnHv}
                alt=""
                onClick={() => {
                  setPreparIndex(2);
                }}
              />
            )}
          </div>
        </div>

        <div className="h-[20vw] mt-[10vw]  ml-[5vw] ">
          <ul className="  flex text-[white] justify-center">
            {infoImg.map((img, index) => {
              return (
                <CompanyBox
                  key={index}
                  img={img}
                  index={index}
                  setIndex={setRecruitment}
                />
              );
            })}
          </ul>
        </div>
        <div className="ml-[12.5vw]  relative h-[30vw]">
          <div className="">
            <img className="absolute w-[82vw]" src={appDown} alt="" />
            <div className="ml-[28vw] absolute text-[white] mt-[11.2vw]">
              <p className="text-[1.66vw] items-center font-neob text-center">
                ?????? ????????? ?????? ?????? ???????????????
                <br />
                <span className="font-neoeb text-[1.97vw]">
                  ??????????????? ???????????????!
                </span>
              </p>
            </div>
            <div className="flex absolute top-[18.2vw]">
              <img
                className="w-[12.4vw] ml-[26vw]"
                src={apple}
                alt=""
                onClick={() => {
                  setPreparIndex(3);
                }}
              />
              <a
                href="https://play.google.com/store/apps/details?id=com.hohocompany.uahage"
                target="_blank"
                rel="noreferrer"
              >
                <img className="w-[12.4vw] ml-[2vw]" src={google} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex w-[100vw] justify-center">
          <div className="w-[80vw] flex justify-end mb-[3.5vw]">
            <a
              href="https://pf.kakao.com/_Uexnws/chat"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="w-[14vw] hover:cursor-pointer"
                src={kakaouahage}
                alt="img"
              />
            </a>
          </div>
        </div>
      </div>
      <Footer setPreparIndex={setPreparIndex} />
    </div>
  );
}
