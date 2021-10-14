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
import newsImg1 from "./assets/img/main-section8/news1.png"
import newsImg2 from "./assets/img/main-section8/news2.png"
import newsImg3 from "./assets/img/main-section8/news3.png"
import newsBtn from "./assets/img/main-section8/news_button.png"
import newsBtnHv from "./assets/img/main-section8/news_button_hover.png"
import infoImg1 from "./assets/img/main-section8/company-info1.png"
import infoImg2 from "./assets/img/main-section8/company-info2.png"
import infoBtn1 from "./assets/img/main-section8/company-info-button1.png"
import infoBtn2 from "./assets/img/main-section8/company-info-button2.png"
import appDown from "./assets/img/main-section8/app_download.png"
import apple from "./assets/img/main-section8/app_store.png"
import google from "./assets/img/main-section8/googleplay.png"
//
import SliderCenterBig from "./component/sliderCenterBig";
import Slider from "../src/component/Slider";
import Scrollview from "./component/Scrollview";
import AutoSlider from "./component/AutoSlider";
import NewsBox from "./component/NewsBox";
import CompanyBox from "./component/CompanyBox";

import { useEffect, useRef, useState } from "react";
const App = () => {
    const newsImg = [newsImg1, newsImg2, newsImg3];
    let [newsBtnActive,setNewsBtnActive] = useState(true);
    const infoImg = [
        {background:infoImg1, button:infoBtn1},
        {background:infoImg2, button:infoBtn2}
    ]
  

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
        
        <div className="h-[35vw] border">
            <div className="flex items-center mb-[1.6vw] mt-[9.4vw]">
                <p className="font-neob text-[2.6vw] ml-[11vw] mr-[0.5vw]">Instagram</p>
                <p className="text-[1.4vw] font-neosb">@uahage_official</p>
            </div>
            <div className="h-[14vw] overflow-hidden">
            <AutoSlider/>
            </div>
        </div>

        <div className="ml-[11vw] h-[40vw] border">
            <p className="font-neor leading-[2.9vw] text-[2.6vw]">우아하게의 <br/><span className="font-neob">새로운 소식</span>을 만나보세요</p>
            <ul className="ml-[6vw] flex mt-[5.5vw]">
                {newsImg.map((img) => {
                    return <NewsBox key={img} img={img} />;
                })}
            </ul>
            <div className="mt-[3.1vw] w-[82vw] flex justify-center" onMouseOver={()=>{
                console.log(newsBtnActive)
                setNewsBtnActive(!newsBtnActive)  ;}}>
                <img className="w-[16.15vw] h-[3.65vw]" src={newsBtn} alt=""/>  
            </div>
        </div>

        <div className="h-[20vw] mt-[10vw]  ml-[5vw] border">
            <ul className="  flex text-[white] justify-center">
            {infoImg.map((img) => {
                            return <CompanyBox key={img} img={img} />;
                        })}
            </ul>
        </div>
        <div className="ml-[10vw]  relative h-[30vw]">
            <div className="">
                <img className="absolute w-[82vw]" src={appDown} alt=""/>
                <div className="ml-[28vw] absolute text-[white] mt-[11.2vw]">
                    <p className="text-[1.66vw] items-center font-neob"> 우리 아이와 어디 갈지 고민이라면<br/>
                    <span className="font-neoeb text-[1.97vw]">우아하게와 함께하세요!</span>
                    </p>
                </div>
                <div className="flex absolute top-[18.2vw]">
                    <img className="w-[12.4vw] ml-[26vw]" src={apple} alt=""/>
                    <img className="w-[12.4vw] ml-[2vw]" src={google} alt=""/>
                </div>
            </div>
        </div>

        </div>
    );
};

export default App;
