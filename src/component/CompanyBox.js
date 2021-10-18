import { useRecoilState } from "recoil";
import recruitmentView from "../atom/recruitmentView";
import communicationView from "../atom/communicationView";

function CompanyBox({img,index,text}){
 
    const [recruitmentPageView,setRecruitmentPageView] = useRecoilState(recruitmentView);    
    const [communicationPageView,setcommunicationPageView] = useRecoilState(communicationView);            
    return(
    <li className="ml-[2.3vw] mr-[2.3vw] group">
        <div className=" relative w-[34.8vw] h-[10.4vw] overflow-hidden bg-[rgba(1,1,1,0.3)] rounded-[2vw]  ">
            <img className="absolute w-[34.8vw] h-[10.4vw]  duration-1000  z-[-1] transform group-hover:scale-110" src={img.background} alt=""/>
            <div className="absolute flex flex-col">
                <p className="mt-[2.13vw] ml-[1.45vw] text-[1.4vw] font-neob">Partnership Proposal</p>
                <p className="mt-[1.5vw] ml-[1.45vw] text-[1.2vw] font-neosb">함께 성장할 비즈니스 제휴와 <br/>파트너쉽을 기다립니다</p>
                <div className="absolute  right-[-19vw] top-[6.5vw] h-[3vw] bg-[#fb6b79] rounded-[2vw]  text-[1.2vw] font-neosb  pl-[1.5vw] pr-[1.5vw] pt-[0.7vw] pb-[0.7vw]"  onClick={(e)=>
                {   
                    if(index===0)setRecruitmentPageView(!recruitmentPageView)
                    if(index===1)setcommunicationPageView(!communicationPageView)}
                    }>{img.text}</div>
                
            </div>
        </div>
    </li>
    );
}
export default CompanyBox;