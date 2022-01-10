function CenterImgSliderChild({ index, img }) {
  return (
    <>
      <div className="mt-[4vh] mb-[4vh]">
        <img
          className="h-[37.5vh] drop-shadow"
          src={img}
          style={{ filter: "drop-shadow(0px 0px 0.6vw #c7c7c7)" }}
          alt="img"
        />
      </div>
    </>
  );
}
export default CenterImgSliderChild;
