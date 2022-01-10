function CenterImgSliderChild({ index, img }) {
  return (
    <>
      <div className="mt-[3.5vw] mb-[3.5vw]">
        <img
          className="w-[13.6vw] drop-shadow"
          src={img}
          style={{ filter: "drop-shadow(0px 0px 0.6vw #c7c7c7)" }}
          alt="img"
        />
      </div>
    </>
  );
}
export default CenterImgSliderChild;
