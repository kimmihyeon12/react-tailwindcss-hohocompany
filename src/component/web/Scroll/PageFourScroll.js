import Scroll from "./Scroll";
import phoneimg from "../../../assets/img/main-section6/phone.png";
import check from "../../../assets/img/main-section2/check.png";
import { useRef } from "react";
export default function PageFourScroll() {
  const scrollContent1 = useRef();
  const scrollContent2 = useRef();
  console.log(document.documentElement.scrollHeight - 736);
  return (
    <Scroll
      scrollbarSize={document.documentElement.scrollHeight / 2.45}
      content1={scrollContent1}
      content2={scrollContent2}
    >
      <div className="flex w-[80vw]">
        <div className="flex mt-[14.6vw] duration-[1.5s] " ref={scrollContent1}>
          <img
            className="w-[1.8vw] h-[1.8vw] mt-[0.3vw] mr-[1.5vw]"
            src={check}
            alt=""
          />
          <ul>
            <li className="text-[2.6vw] font-neob mb-[0.5vw] leading-[2.9vw]">
              육아맘과 육아대디에게 <br /> 꼭 필요한
              <span className="text-[#f93873]"> 정보를 편리하게 </span>
            </li>
            <li className="text-[1.4vw] font-neosb mb-[1vw] leading-[1.9vw]">
              상황과 필요에 맞춰 영· 유아 보호자를 위한 <br /> 위치· 장소 정보
              제공 서비스를 제공합니다
            </li>
            <li>
              <ul className="flex mb-[1vw]">
                <li>
                  <div className="border-[0.15vw] border-[#f93873] w-[7.6vw] h-[2.5vw] flex justify-center items-center text-[1.15vw] font-neob text-[#f93873] rounded-[2vw] mr-[0.5vw]">
                    #아기의자
                  </div>
                </li>
                <li>
                  <div className="border-[0.15vw] border-[#f93873] w-[7.6vw] h-[2.5vw] flex justify-center items-center text-[1.15vw] font-neob text-[#f93873] rounded-[2vw] mr-[0.5vw]">
                    #아기메뉴
                  </div>
                </li>
                <li>
                  <div className="border-[0.15vw] border-[#39396c] w-[7.6vw] h-[2.5vw] flex justify-center items-center text-[1.15vw] font-neob text-[#39396c] rounded-[2vw]">
                    #놀이방
                  </div>
                </li>
              </ul>
              <ul className="flex">
                <li>
                  <div className="border-[0.15vw] border-[#39396c] w-[7.6vw] h-[2.5vw] flex justify-center items-center text-[1.15vw] font-neob text-[#39396c] rounded-[2vw] mr-[0.5vw]">
                    #아기침대
                  </div>
                </li>
                <li>
                  <div className="border-[0.15vw] border-[#f93873] w-[7.6vw] h-[2.5vw] flex justify-center items-center text-[1.15vw] font-neob text-[#f93873] rounded-[2vw] mr-[0.5vw]">
                    #아기식기
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <img
          ref={scrollContent2}
          className="w-[45vw] h-[47vw] ml-[3.6vw] mt-[2.6vw] duration-[0.8s] "
          src={phoneimg}
          alt=""
        />
      </div>
    </Scroll>
  );
}
