import Scroll from "./Scroll";
import phone from "../../../assets/img/main-section2/phone.png";
import check from "../../../assets/img/main-section2/check.png";
import { useEffect, useRef, useState } from "react";
export default function PageTwoScroll() {
  const scrollContent1 = useRef();
  const scrollContent2 = useRef();
  return (
    <Scroll
      scrollbarSize={document.documentElement.scrollHeight / 20}
      content1={scrollContent1}
      content2={scrollContent2}
    >
      <div className="flex w-[80vw] mt-[1.7vw] justify-between ">
        <ul className="mt-[18vw] duration-[1.0s]" ref={scrollContent1}>
          <li className="flex text-[1.4vw] items-center font-neob mb-[0.5vw]">
            <img className="w-[1.8vw] mr-[0.9vw]" src={check} alt="" /> 엄마
            아빠가 편하게 나갈 수는 없을까요?
          </li>
          <li className="font-neob text-[2.6vw] mb-[0.5vw] ml-[2.6vw] leading-[2.9vw] ">
            유아를 동반한 부모가 외식할 때 <br />
            <p className="text-[#f93873]"> 각종 편의시설이 부족해요 </p>
          </li>
          <li className="font-neosb ml-[2.6vw] text-[1.4vw] leading-[1.9vw]">
            몇 번의 터치로 맞춤형 편의시설을 검색할 수 있어요 <br /> 필터를 통해
            목적지와 가까운 <br /> 주변 정보도 한눈에 확인 할 수 있어요
          </li>
        </ul>
        <img
          ref={scrollContent2}
          className="w-[41vw] h-[43.1vw] duration-[0.6s]"
          src={phone}
          alt=""
        />
      </div>
    </Scroll>
  );
}
