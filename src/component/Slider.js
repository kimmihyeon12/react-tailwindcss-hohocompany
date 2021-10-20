
import { useState ,useRef, useEffect, Component } from "react"
import banner1 from "../assets/img/main-section1/main-banner1.png"
import banner2 from "../assets/img/main-section1/main-banner2.png"
import banner3 from "../assets/img/main-section1/main-banner3.png"
import banner4 from "../assets/img/main-section1/main-banner4.png"
import leftBtn from "../assets/img/main-section1/left.png"
import rightBtn from "../assets/img/main-section1/right.png"
import play from "../assets/img/main-section1/play.png"
import stop from "../assets/img/main-section1/stop.png"
import { useRecoilState } from "recoil";
import bannerCountState from "../atom/bannerCount";
import SliderText from "./SliderText";
import Slider from "react-slick";

export default class FadeSlider extends Component { 

     
    render() {  
        
        const banner = [banner1,banner2,banner3,banner4];
        let barwidth = 10;
        let sliderCount = 0;
        let btnState = false;

        let time  = setInterval(() => {
            barwidth += 3.2;
            if(barwidth>=document.querySelector(".backbar").clientWidth-6){
                this.slider.slickGoTo(sliderCount+1);
            }
            let barEl = document.querySelector(".bar")
            barEl.style.width=`${barwidth}px`;
        }, 100);
        const settings = {
            dots: false,
            arrows: false,
            fade: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4000,
            pauseOnHover:false,
            beforeChange: (current, next) => {
                sliderCount = next;
                let page = document.querySelector(`.page${next}`);
                document.querySelector(`.leftText`).innerHTML =`0${next+1}`
                if(next+2>4){
                    document.querySelector(`.rightText`).innerHTML =`01`
                }else{
                    document.querySelector(`.rightText`).innerHTML =`0${next+2}`
                }
                page.style.transform="none";
                page.style.transition="none";
                clearInterval(time);
                barwidth = 10;
                time = setInterval(() => {
                    console.log(barwidth)
                    barwidth += 3.3;
                    if(barwidth>=document.querySelector(".backbar").clientWidth-6){
                        this.slider.slickGoTo(sliderCount+1);
                    }
                    let barEl = document.querySelector(".bar")
                    barEl.style.width=`${barwidth}px`;
                }, 100);
              
               
            },
            afterChange:(current, next)=>{
                
                let page = document.querySelector(`.page${current}`)
                page.style.transform="scale(1.09)";
                page.style.transition="6s";
            }
        };
    

    return (
        <>
        <div className="">
            <style>{}</style>
                <Slider ref={slider => (this.slider = slider)}{...settings}>
                <div className="">
                    <img className="page0" src={banner[0]} alt=""  />
                    <SliderText count={0}/>
                </div>
                <div className="">
                    <img className="page1" src={banner[1]} alt="" />
                    <SliderText count={1}/>
                </div>
                <div className="">
                    <img className="page2" src={banner[2]} alt="" />
                    <SliderText count={2}/>
                </div>
                <div className="">
                    <img className="page3" src={banner[3]} alt="" />
                    <SliderText count={3}/>
                </div>
            </Slider>
        </div>
        <div className="absolute top-[45vw] left-[13.6vw] w-[10vw] h-[0.5vw]">
                <div className="backbar absolute w-[10vw] h-[0.5vw] z-10 bg-[rgba(0,0,0,0.2)] rounded-[1vw]" ></div>
                <div className="bar absolute w-[1vw] h-[0.5vw] z-10 bg-[white] rounded-[1vw] " ></div>
        </div>
        <div className="absolute top-[44.5vw] left-[10.5vw] flex  font-neob text-[white]">
            
            <img src={leftBtn} className="top-0 rightbtn h-[1.5vw] mr-[0.5vw] " alt="" onClick={(e)=>{ 
            if(!btnState) this.slider.slickGoTo(sliderCount-1);}}/>
            <h1 className="leftText mr-[11vw] text-[1.2vw] ">01</h1>
            <h1 className="rightText text-[1.2vw] mr-[0.5vw] ">02</h1>
            <img src={rightBtn} className="top-0 rightbtn h-[1.5vw] " alt=""  onClick={(e)=>{ 
            if(!btnState)  this.slider.slickGoTo(sliderCount+1);}}/>
           <img src={play} className="top-0 mt-[0.1vw] ml-[1vw] w-[0.9vw] h-[1.4vw] playbtn" alt=""  onClick={(e)=>{ 
               if(btnState){
                time = setInterval(() => {
                    
                    barwidth += 3.3;
                    if(barwidth>=document.querySelector(".backbar").clientWidth-6){
                        this.slider.slickGoTo(sliderCount+1);
                    }
                    let barEl = document.querySelector(".bar")
                    barEl.style.width=`${barwidth}px`;
                    
                }, 100);
                this.slider.slickPlay();
                document.querySelector(".playbtn").src=`${play}`;
               }else{
               clearInterval(time);
                this.slider.slickPause();
                document.querySelector(".playbtn").src=`${stop}`;
               }
               btnState = !btnState
              
           }}/>
        </div>
       
        </>
    );
}
}
 
// function Slider(){
//     const imageRef = useRef();
//     const bar = useRef();
//     const backbar = useRef();
//     const playBtn = useRef();
//     let [btnstate,setBtnstate] = useState(false);
//     const banner = [banner1,banner2,banner3,banner4];
//     const [bannerCount,setBannerCount] = useRecoilState(bannerCountState);             
//     const [barwidth,setBarwidth] = useState(0);
//     let usetime = 300;
//     let imageEl;
//     useEffect(()=>{
//          imageEl = imageRef.current;

//         if(bannerCount==4) usetime =0 ;
//         else usetime = 300;

//         setTimeout(() => {
//             // setBarwidth(0);
        
//            //     imageEl.classList.add("animate-fade-in");
          
           
//             if(bannerCount<0){
//                 setBannerCount(3)
//             }
//             if(bannerCount>3){
//                 setBannerCount(0);
//             }
           
           
//        //     imageRef.current.style.transform='scale(1.09)';
//        //     imageRef.current.style.transition='6s';
//         }, 0);

        
//         return () => {
            
//             for(let i = 0; i < imageEl.classList.length; i++){
//                 console.debug(imageEl.classList.item(i));
//                 if(imageEl.classList.item(i) === "animate-fade-in"){
//                     imageEl.classList.remove("animate-fade-in");
//                 }
//             }
//             //    imageRef.current.style.transform='none';
//            //     imageRef.current.style.transition='none';
//         }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, [bannerCount]);
//     useEffect(()=>{
//         let time = setTimeout(() => {
//             if(barwidth < backbar.current.clientWidth){
//                 setBarwidth(barwidth+backbar.current.clientWidth/400);
//             }
//             if(barwidth >= backbar.current.clientWidth){
//                 setBarwidth(0);
//                 setBannerCount(bannerCount + 1);

//             }
//             bar.current.style.width = `${barwidth}px`;
//         }, 10);
//         if(btnstate){
//             clearTimeout(time)
//         }else{
//             time = setTimeout(() => {
//                 if(barwidth < backbar.current.clientWidth){
//                     setBarwidth(barwidth+backbar.current.clientWidth/400);
//                 }
//                 if(barwidth >= backbar.current.clientWidth){
//                     setBannerCount(bannerCount + 1);
//                     setBarwidth(0);
                   
//                 }
//                 bar.current.style.width = `${barwidth}px`;
//             }, 10);
//         }

//     },[barwidth,btnstate])
    

    
//     return(
//     <div className="relative">
//         <div className="absolute truncate">
//             <div className="w-full ">
//                 <img className="" src={banner[bannerCount]} alt="" ref={imageRef}/>
//             </div>
//             <SliderText />
//         </div>
//         <div className="absolute flex items-center text-[1.2vw] font-neob text-[white] left-[10vw] top-[42vw]">
//             <img onClick={()=>{setBannerCount(bannerCount-1)}} className="w-[0.8vw] mr-[0.5vw] " src={leftBtn} alt=""/>
//             <p className="mt-[0.2vw] mr-[0.5vw]">0{bannerCount+1}</p>
//             <div className="relative w-[10vw] h-[0.5vw]">
//                 <div className="absolute w-[10vw] h-[0.5vw] z-10 bg-[rgba(0,0,0,0.2)] rounded-[1vw]" ref={backbar}></div>
//                 <div className="absolute w-[1vw] h-[0.5vw] z-10 bg-[white] rounded-[1vw] " ref={bar}></div>
//             </div>
//             <p className="mt-[0.2vw] ml-[0.5vw] mr-[0.5vw]">0{bannerCount !== 3?bannerCount+2:"1"}</p>
//             <img onClick={()=>{setBannerCount(bannerCount+1)}} className="w-[0.8vw]" src={rightBtn} alt=""/>
//             <img onClick={()=>{
//                 // 멈춰야함
                
//                 setBtnstate(!btnstate);
//             }} className="w-[0.9vw] ml-[0.8vw]" src={btnstate?stop:play} alt=""  ref={playBtn}/>
//         </div>
//     </div>
//     );
// }
 