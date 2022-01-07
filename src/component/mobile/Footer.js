import icon1 from "../../assets/img/mobile/icon1.png";
import icon2 from "../../assets/img/mobile/icon2.png";
import icon3 from "../../assets/img/mobile/icon3.png";
import icon4 from "../../assets/img/mobile/icon4.png";
import icon5 from "../../assets/img/mobile/icon5.png";
import icon6 from "../../assets/img/mobile/icon6.png";
import logob from "../../assets/img/mobile/logob.png";
export default function Footer() {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];
  return (
    <div>
      <img className="  w-[40vw]  mt-[6vh] " src={logob} alt="" />
      <p className="  text-[3.2vw]  mt-[5vh]  text-white font-neol">
        서비스 이용약관 | 개인정보 보호정책 | 위치기반서비스 이용약관
      </p>
      <p className="  text-[3.2vw] leading-[2.8vh] mt-[2.5vh]  text-[#c7c7c7] font-neol border-b pb-7 border-[#c7c7c7]">
        사업자명 : (주)호호컴퍼니 | 대표 : 김화영
        <br /> 사업자등록번호 : 322-86-01766 | TEL : 061-331-3117 <br />
        Email : hohoco0701@gmail.com <br />
        주소 : 58325)전라남도 나주시 빛가람로 740 한빛타워 6층 601호 <br />
        COPYRIGHT(C) hohocompany Inc. ALL RIGHTS RESERVED
      </p>
      <div className="flex pt-[2vh]">
        {" "}
        {icons.map((icon) => {
          return <img src={icon} className="w-[9vw]" alt="" />;
        })}
      </div>
    </div>
  );
}
