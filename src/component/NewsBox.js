function NewsBox({img}){
   
    return(
    <li className="flex flex-col items-center w-[23.4vw] h-[22.1vw]">
        <div className="w-[20.4vw] overflow-hidden rounded-[1.6vw] shadow-lg"><img className="duration-1000 transform  hover:scale-110" src={img} alt="" /></div>
        <div className="mt-[1.6vw] ">
            <p className="font-neob text-[1.4vw] pl-[1.9vw] pr-[1.9vw]" >우아하게 새로운 캐릭터 친구를 소개합니다!</p>
            <p className="font-neom text-[1.1vw] text-[#7d7d7d] pl-[1.9vw] pr-[1.9vw]">2021.08.05</p>
        </div>
    </li>
    );
}
export default NewsBox;