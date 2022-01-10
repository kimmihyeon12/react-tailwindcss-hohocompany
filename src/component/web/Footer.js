import facebook from "../../assets/img/footer/facebook.png";
import instagram from "../../assets/img/footer/instagram.png";
import blog from "../../assets/img/footer/blog.png";
import twitter from "../../assets/img/footer/twitter.png";
import youtube from "../../assets/img/footer/youtube.png";
import flogo from "../../assets/img/footer/logo.png";

export default function Footer({ setPreparIndex }) {
  return (
    <div className="w-[100vw] h-[15vw] flex justify-center bg-[#2b2b2b]">
      <div className="w-[80vw]">
        <div className="flex items-center mt-[1.6vw] mb-[1vw] ">
          <img className="w-[10vw] mr-[3.6vw]" src={flogo} alt="img" />
          <p className="text-[white] text-[1vw] font-neol">
            서비스 이용약관 | 개인정보 보호정책 | 위치기반서비스 이용약관
          </p>
          <ul
            className="flex items-center ml-[26.9vw] "
            onClick={() => {
              setPreparIndex(4);
            }}
          >
            <li className="ml-[1.5vw]">
              <img className="w-[0.7vw]" src={facebook} alt="" />
            </li>
            <li className="ml-[1.5vw]">
              <img className="w-[1.6vw]" src={twitter} alt="" />
            </li>
            <li className="ml-[1.5vw]">
              <img className="w-[1.8vw]" src={instagram} alt="" />
            </li>
            <li className="ml-[1.5vw]">
              <img className="w-[1vw]" src={blog} alt="" />
            </li>
            <li className="ml-[1.5vw]">
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
  );
}
