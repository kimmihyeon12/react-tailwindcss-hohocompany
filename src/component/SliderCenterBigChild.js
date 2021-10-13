 

function SliderCenterBigChild({index,img}){
 console.log(img);
    return (
        <>
            <div className="mt-[3.5vw]">
                    <img className="w-[13.6]vw drop-shadow" src={img} style={{filter:"drop-shadow(0px 0px 0.6vw #c7c7c7)"}}/>
			</div >
        </>
    )
}
export default SliderCenterBigChild;