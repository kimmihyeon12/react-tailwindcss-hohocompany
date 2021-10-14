function CompanyBox({img}){
 
    return(
    <li className="ml-[2.3vw] mr-[2.3vw]">
        <div className="relative w-[34.8vw] h-[10.4vw] overflow-hidden bg-[rgba(0, 0, 0, 0.28)] rounded-[2vw]">
        <img className="absolute w-[34.8vw] h-[10.4vw] z-[-1]" src={img.background} alt=""/>
        <div className="absolute flex flex-col">
            <p className="mt-[2.13vw] ml-[1.45vw] text-[1.4vw] font-neob">Partnership Proposal</p>
            <p className="mt-[1.5vw] ml-[1.45vw] text-[1.2vw] font-neosb">함께 성장할 비즈니스 제휴와 <br/>파트너쉽을 기다립니다</p>
            <img className="absolute   h-[3vw] right-[-19vw] top-[6.5vw]" src={img.button} alt=""/>
        </div>
        </div>
    </li>
    );
}
export default CompanyBox;