 

function AutoSliderChild({index,img}){
    console.log(img);
       return (
           <>
               <div className="">
                       <img className="height:14vw;" src={img}  />
               </div >
           </>
       )
   }
   export default AutoSliderChild;