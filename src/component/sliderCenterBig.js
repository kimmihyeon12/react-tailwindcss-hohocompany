import slider1 from "../assets/img/main-section5/slider1.png"
import slider2 from "../assets/img/main-section5/slider2.png"
import slider3 from "../assets/img/main-section5/slider3.png"
import slider4 from "../assets/img/main-section5/slider4.png"
import slider5 from "../assets/img/main-section5/slider5.png"
import slider6 from "../assets/img/main-section5/slider6.png"
import slider7 from "../assets/img/main-section5/slider7.png"

function SliderCenterBig(){
    const silder = [slider1,slider2,slider3,slider4,slider5,slider6,slider7];
    return(<>
    <div >
         <ul className="flex relative w-[100vw] h-[36.8] border">
            <li><img src={silder[0]} alt=""/></li>
            <li><img src={silder[1]} alt=""/></li>
            <li><img src={silder[2]} alt=""/></li>
            <li><img src={silder[3]} alt=""/></li>
            <li><img src={silder[4]} alt=""/></li>
            <li><img src={silder[5]} alt=""/></li>
            <li><img src={silder[6]} alt=""/></li>
        </ul>
    </div>
    <div>
        <img/>
        <p></p>
        <img/>
    </div>
    </>
   );
}
export default SliderCenterBig;