import React, { Component } from "react";
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
 
    render() {
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
        	
			slidesToShow: 6.3,
			speed: 200,
            autoplay: true,
            autoplaySpeed: 500,
            slidesToScroll: 3,
            //centerPadding: '-60vw',
		};
		return (       
			<div className="mt-[3.5vw] mb-[3.5vw] borde ">
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
                </div>
		);
	}
}

const cssstyle = `
.slick-prev{
    background-image: url('${next}');
    width:6vw;
    height:6vw;
    background-repeat: no-repeat;
}
.slick-next{
    background-image: url('${prev}');
    width:6vw;
    height:6vw;
    background-repeat: no-repeat;
}
.center .slick-center  {
    transform: scale(1.2);
    margin-bottom:5vw
}
.center img {
    transition: all .3s ease;
}
`
