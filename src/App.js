import "./styles/index.css";

import backgroud from "./assets/img/main-section3/background.png"
import phone3 from "./assets/img/main-section3/phone.png";
import text1 from "./assets/img/main-section3/text1.png"
import text2 from "./assets/img/main-section3/text2.png"
import text3 from "./assets/img/main-section3/text3.png"
import text4 from "./assets/img/main-section3/text4.png"
import logo from "./assets/img/header/logo.png";
import iconGroup from "./assets/img/main-section4/icongroup.png"
import movieImg from "./assets/img/main-section7/card.png"
//
import SliderCenterBig from "./component/sliderCenterBig";
import Slider from "../src/component/Slider";
import Scrollview from "./component/Scrollview";
import AutoSlider from "./component/AutoSlider";
import { useEffect, useRef, useState } from "react";
const App = () => {
    
  

    return (
    <div className="App">
        <div className="absolute z-10 flex justify-center w-screen ">
            <div className="flex w-[80vw] items-center justify-between  mt-[2.8vw]">
            <img className="w-[10vw]" src={logo} alt=""/>
            <ul className="flex text-[1.25vw] ">
                <li className="font-neoh mr-[0.9vw]">우아하게 소개</li>
                <li className="font-neob">회사소개</li>
            </ul>
            </div> 
        </div>
        
        <div className="w-screen  h-[49.4vw]">
            <Slider/>
        </div>
     

        <div className="flex w-screen h-[49vw]  justify-center ">
            <Scrollview page={2}/>
        </div>

        <div className="flex w-screen h-[72.6vw] relative justify-center">
            <img className="h-[66vw] absolute" src={backgroud} alt=""/>
            <div className="absolute text-[white] mt-[7.7vw] ">
                <p className="font-neob text-[2.6vw] mb-[3vw]">지금까지 이런 고민하지 않으셨나요?</p>
                <p className="font-neosb text-[1.4vw] mb-[5vw] text-center">검색만 수십 번...<br/> 
                우리아이와 마음 편하게 외출할 수 있는 서비스가 필요해!<br/>
                '아이와 가족을 배려하는 공간을 파악하는 다리를 만들자'라고 떠올렸죠!<br/>
                그래서 우아하게가 탄생했습니다.</p>
            </div>
            <div className="w-screen relative z-10 mt-[28vw] ">
                <img className="absolute z-10 ml-[39.5vw] w-[22vw]" src={phone3} alt=""/>
                <img className="absolute animate-bounce-3s  ml-[13.5vw] mt-[8vw] w-[23.3vw]" src={text1} alt=""/>
                <img className="absolute animate-bounce-4s ml-[18vw] mt-[22vw] w-[18.7vw]" src={text2} alt=""/>
                <img className="absolute animate-bounce-4s ml-[61vw] mt-[10vw] w-[25.7vw]" src={text3} alt=""/>
                <img className="absolute animate-bounce-3s ml-[61vw] mt-[22vw] w-[18.8vw]" src={text4} alt=""/>
            </div>
        </div>

        <div className="flex flex-col w-screen h-[29.5vw] items-center">
            <p className="font-neoeb text-[2.6vw] mb-[0.7vw]">부모가 되어도 특별한 날은 우아하게</p>
            <p className="font-neob text-[1.4vw] mb-[2.3vw]">필요한 진짜 정보를 일상에서 더 쉽게, 더 자주 만나보세요</p>
            <img className="w-[46.5vw]" src={iconGroup} alt=""></img>
        </div>

        <div className=" w-screen h-[46.5vw] mt-[5.3vw] ">
        <SliderCenterBig/>
        </div>

        <div className="w-screen h-[49vw] flex justify-center">
        <Scrollview page={4}/>
        </div>
        <div className="flex flex-col w-[100vw] h-[49vw] border items-center justify-center">
                <img className="w-[51.4vw] duration-700 hover:scale-50" src={movieImg} alt=""/>
                <ul className="flex">
                    <li className="text-[2.6vw] font-neor leading-[2.9vw] mr-[4vw]">우아하게는<br/><span className="font-neob">우리아이와 함께하다</span><br/>라는 뜻이에요</li>
                    <li className="text-[1.4vw] font-neosb leading-[1.9vw]">고객에게는 마음 편한 외식장소를 제공하고<br/> 제휴 상점에는 매장 홍보 서비스를 제공하여<br/> 지속적인 고객 유치를 지원하게 됩니다</li>
                </ul>
        </div>
        
        <div>
         <AutoSlider/>
        </div>

        </div>
    );
};

export default App;
