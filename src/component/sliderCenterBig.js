import React, { Component, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../assets/img/main-section5/slider1.png"
import slider2 from "../assets/img/main-section5/slider2.png"
import slider3 from "../assets/img/main-section5/slider3.png"
import slider4 from "../assets/img/main-section5/slider4.png"
import slider5 from "../assets/img/main-section5/slider5.png"
import slider6 from "../assets/img/main-section5/slider6.png"
import slider7 from "../assets/img/main-section5/slider7.png"
import SliderCenterBigChild from "./SliderCenterBigChild";
import prev from "../assets/img/main-section5/prev.png"
import next from "../assets/img/main-section5/next.png"
export default class SliderCenterBig extends Component {
    state = {
        activeSlide: 0,
      };
    render() {
        let sliderContent = ["인트로","카테고리 한 눈에 보기","즐겨찾기","목적지 정보","매장 상세 정보" ,"편의시설 필터 설정하기","방문자 리뷰",]
        const slider = [
        {id:3,img:slider3},
        {id:4,img:slider5},
        {id:5,img:slider5},
        {id:6,img:slider6},
        {id:7,img:slider7},
        {id:1,img:slider1},
        {id:2,img:slider2},];
		const settings = {
			className: "center",
			centerMode: true,
			infinite: true,
			centerPadding: "-40vw",
			slidesToShow: 6.4,
			speed: 500,
            beforeChange: (current, next) => {
                this.setState({ activeSlide:next%7 })
            }
		};
		return (
			<div>	
				<style>{cssstyle}</style>
				<Slider {...settings}>
				    {slider.map((slider) => {
                        return <SliderCenterBigChild key={slider.id} id={slider.id} img={slider.img} />;
                    })
                    }
                    {slider.map((slider) => {
                        return <SliderCenterBigChild key={slider.id} id={slider.id} img={slider.img} />;
                    })
                    }  
				</Slider>
                <p  className="flex items-center justify-center h-[5vw] text-[1.4vw] font-neob">{sliderContent[this.state.activeSlide]}</p>
			</div>
		);
	}
}

const cssstyle = `
 .slick-prev{
    background-image: url('${prev}');
    background-size:5.8vw;
    width:6vw;
    height:6vw;
    background-repeat: no-repeat;
    left:39vw;
    outline:none;
}
.slick-next{
    background-image: url('${next}');    background-size:5.8vw;
    width:5vw;
    height:5vw;
    background-repeat: no-repeat;
    left:56vw;
    outline:none;
}
.slick-prev:focus {
    outline:none;
 }
 .slick-next:focus {
    outline:none;
 }
 
.center .slick-center img {
    color: #e67e22;
    opacity: 1;
    -ms-transform: scale(1.08);
    transform: scale(1.15);
}
.center h3 {
    transition: all .3s ease;
}
`