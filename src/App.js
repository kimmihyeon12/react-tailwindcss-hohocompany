import './styles/index.css'

import backgroud from './assets/img/main-section3/background.png'
import phone3 from './assets/img/main-section3/phone.png'
import text1 from './assets/img/main-section3/text1.png'
import text2 from './assets/img/main-section3/text2.png'
import text3 from './assets/img/main-section3/text3.png'
import text4 from './assets/img/main-section3/text4.png'
import logo from './assets/img/header/logo.png'
import iconGroup from './assets/img/main-section4/icongroup.png'
import movieImg from './assets/img/main-section7/card.png'
import newsImg1 from './assets/img/main-section8/news1.png'
import newsImg2 from './assets/img/main-section8/news2.png'
import newsImg3 from './assets/img/main-section8/news3.png'
import newsBtn from './assets/img/main-section8/news_button.png'
import newsBtnHv from './assets/img/main-section8/news_button_hover.png'
import infoImg1 from './assets/img/main-section8/company-info1.png'
import infoImg2 from './assets/img/main-section8/company-info2.png'
import infoBtn1 from './assets/img/main-section8/company-info-button1.png'
import infoBtn2 from './assets/img/main-section8/company-info-button2.png'
import appDown from './assets/img/main-section8/app_download.png'
import apple from './assets/img/main-section8/app_store.png'
import google from './assets/img/main-section8/googleplay.png'
import facebook from './assets/img/footer/facebook.png'
import instagram from './assets/img/footer/instagram.png'
import blog from './assets/img/footer/blog.png'
import twitter from './assets/img/footer/twitter.png'
import youtube from './assets/img/footer/youtube.png'
import flogo from './assets/img/footer/logo.png'
import filebtn from './assets/img/footer/filebtn.png'
import mouse from './assets/img/main-section1/mouse.png'
import kakaouahage from './assets/img/footer/kakao.png'
//
import SliderCenterBig from './component/sliderCenterBig'
import Scrollview from './component/Scrollview'
import AutoSlider from './component/AutoSlider'
import NewsBox from './component/NewsBox'
import CompanyBox from './component/CompanyBox'
import Recruitment from './component/Recruitment'
import Communication from './component/Communication'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'
import recruitmentView from './atom/recruitmentView'
import communicationView from './atom/communicationView'
import FadeSlider from '../src/component/Slider'
const App = () => {
  const newsImg = [newsImg1, newsImg2, newsImg3]
  let [newsBtnActive, setNewsBtnActive] = useState(true)
  const recruitmentPageView = useRecoilValue(recruitmentView)
  const communicationPageView = useRecoilValue(communicationView)

  const infoImg = [
    {
      background: infoImg1,
      text: '함께 성장하기',
      title: 'Partnership Proposal',
      content: '함께 성장할 비즈니스 제휴와  파트너쉽을 기다립니다',
    },
    {
      background: infoImg2,
      text: '소통하기',
      title: 'Opinion and Support',
      content: '여러분의 의견을 자유롭게 알려주세요 응원의 메시지도 좋습니다',
    },
  ]

  return (
    <div className="App">
      {recruitmentPageView ? <Recruitment /> : null}
      {communicationPageView ? <Communication /> : null}
      <div className="absolute z-10 flex justify-center w-screen ">
        <div className="flex w-[80vw] items-center justify-between  mt-[2.8vw]">
          <img className="w-[10vw]" src={logo} alt="" />
        </div>
      </div>
      <div className="w-screen  h-[49.4vw]">
        <FadeSlider />
        <div className=" absolute animate-bounce-2s z-10 top-[45vw] left-[49vw]">
          <img className="w-[1.4vw]" src={mouse} alt="" />
        </div>
      </div>
      <div className="flex w-screen h-[49vw]  justify-center ">
        <Scrollview page={2} />
      </div>
      <div className="flex w-screen h-[72.6vw] relative justify-center">
        <img className="h-[66vw] absolute" src={backgroud} alt="" />
        <div className="absolute text-[white] mt-[7.7vw] ">
          <p className="font-neob text-[2.6vw] mb-[3vw]">
            지금까지 이런 고민하지 않으셨나요?
          </p>
          <p className="font-neosb text-[1.4vw] mb-[5vw] text-center">
            검색만 수십 번...
            <br />
            우리아이와 마음 편하게 외출할 수 있는 서비스가 필요해!
            <br />
            '아이와 가족을 배려하는 공간을 파악하는 다리를 만들자'라고 떠올렸죠!
            <br />
            그래서 우아하게가 탄생했습니다.
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
          부모가 되어도 특별한 날은 우아하게
        </p>
        <p className="font-neob text-[1.4vw] mb-[2.3vw]">
          필요한 진짜 정보를 일상에서 더 쉽게, 더 자주 만나보세요
        </p>
        <img className="w-[46.5vw]" src={iconGroup} alt=""></img>
      </div>

      <div className=" w-screen h-[46.5vw] mt-[5.3vw] ">
        <SliderCenterBig />
      </div>

      <div className="w-screen h-[49vw] flex justify-center bg-white z-10">
        <Scrollview page={4} />
      </div>
      <div className="flex flex-col w-[100vw] h-[49vw]  items-center justify-center">
        <img
          className="w-[51.4vw] transition duration-1000 transform hover:scale-110"
          src={movieImg}
          alt=""
        />
        <ul className="flex">
          <li className="text-[2.6vw] font-neor leading-[2.9vw] mr-[4vw]">
            우아하게는
            <br />
            <span className="font-neob">우리아이와 함께하다</span>
            <br />
            라는 뜻이에요
          </li>
          <li className="text-[1.4vw] font-neosb leading-[1.9vw]">
            고객에게는 마음 편한 외식장소를 제공하고
            <br /> 제휴 상점에는 매장 홍보 서비스를 제공하여
            <br /> 지속적인 고객 유치를 지원하게 됩니다
          </li>
        </ul>
      </div>

      <div className="relative h-[35vw] ">
        <div className="flex items-center mb-[1.6vw] mt-[9.4vw]">
          <p className="font-neob text-[2.6vw] ml-[11vw] mr-[0.5vw]">
            Instagram
          </p>
          <p className="text-[1.4vw] font-neosb">@uahage_official</p>
        </div>

        <div className=" h-[14vw]">
          <AutoSlider />
        </div>
      </div>

      <div className="ml-[11vw] h-[40vw] ">
        <p className="font-neor leading-[2.9vw] text-[2.6vw]">
          우아하게의 <br />
          <span className="font-neob">새로운 소식</span>을 만나보세요
        </p>
        <ul className="ml-[6vw] flex mt-[5.5vw]">
          {newsImg.map((img, index) => {
            return <NewsBox key={index} img={img} />
          })}
        </ul>
        <div
          className="mt-[3.1vw] w-[82vw] flex duration-1000 justify-center cursor-pointer"
          onMouseOver={() => {
            setNewsBtnActive(false)
          }}
          onMouseOut={() => setNewsBtnActive(true)}
        >
          {newsBtnActive ? (
            <img
              className="w-[16.15vw] h-[3.65vw]  transform"
              src={newsBtn}
              alt=""
            />
          ) : (
            <img
              className="w-[16.15vw] h-[3.65vw] duration-1000 transform"
              src={newsBtnHv}
              alt=""
            />
          )}
        </div>
      </div>

      <div className="h-[20vw] mt-[10vw]  ml-[5vw] ">
        <ul className="  flex text-[white] justify-center">
          {infoImg.map((img, index) => {
            return <CompanyBox key={index} img={img} index={index} />
          })}
        </ul>
      </div>
      <div className="ml-[10vw]  relative h-[30vw]">
        <div className="">
          <img className="absolute w-[82vw]" src={appDown} alt="" />
          <div className="ml-[28vw] absolute text-[white] mt-[11.2vw]">
            <p className="text-[1.66vw] items-center font-neob">
              {' '}
              우리 아이와 어디 갈지 고민이라면
              <br />
              <span className="font-neoeb text-[1.97vw]">
                우아하게와 함께하세요!
              </span>
            </p>
          </div>
          <div className="flex absolute top-[18.2vw]">
            <img className="w-[12.4vw] ml-[26vw]" src={apple} alt="" />
            <a href="https://play.google.com/store/apps/details?id=com.hohocompany.uahage">
              <img className="w-[12.4vw] ml-[2vw]" src={google} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex w-[100vw] justify-center">
        <div className="w-[80vw] flex justify-end mb-[3.5vw]">
          <a href="https://pf.kakao.com/_Uexnws/chat">
            {' '}
            <img className="w-[14vw] hover:cursor-pointer" src={kakaouahage} />
          </a>
        </div>
      </div>

      <div className="w-[100vw] h-[15vw] flex justify-center bg-[#2b2b2b]">
        <div className="w-[80vw]">
          <div className="flex items-center mt-[1.6vw] mb-[1vw] ">
            <img className="w-[10vw] mr-[3.6vw]" src={flogo} />
            <p className="text-[white] text-[1vw] font-neol">
              서비스 이용약관 | 개인정보 보호정책 | 위치기반서비스 이용약관
            </p>
            <ul className="flex items-center ml-[26.9vw]">
              <li className="ml-[1.5vw]">
                {' '}
                <img className="w-[0.7vw]" src={facebook} alt="" />
              </li>
              <li className="ml-[1.5vw]">
                {' '}
                <img className="w-[1.6vw]" src={twitter} alt="" />
              </li>
              <li className="ml-[1.5vw]">
                {' '}
                <img className="w-[1.8vw]" src={instagram} alt="" />
              </li>
              <li className="ml-[1.5vw]">
                {' '}
                <img className="w-[1vw]" src={blog} alt="" />
              </li>
              <li className="ml-[1.5vw]">
                {' '}
                <img className="w-[1.9vw]" src={youtube} alt="" />
              </li>
            </ul>
          </div>
          <hr className="border-[#878787]" />
          <div>
            <p className="mt-[1.5vw] text-[#878787] font-neol text-[1vw] leading-[1.8vw]">
              사업자명 : (주)호호컴퍼니 | 대표 : 김화영 <br />
              사업자등록번호 : 322-86-01766 | TEL : 061-331-3117 | Email :
              hohoco0701@gmail.com <br />
              주소 : 58325)전라남도 나주시 빛가람로 740 한빛타워 6층 601호
              <br />
              COPYRIGHT(C) hohocompany Inc. ALL RIGHTS RESERVED
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
