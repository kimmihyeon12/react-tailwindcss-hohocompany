import Modal from "../../../component/Modal";
import popup1 from "../../../assets/img/popup/popup1.png";
import popup2 from "../../../assets/img/popup/popup2.png";
import popup3 from "../../../assets/img/popup/popup3.png";
import popup4 from "../../../assets/img/popup/popup4.png";
const popup = [popup1, popup1, popup2, popup3, popup4];
export default function PreparPopup({ index, setIndex }) {
  let indexCount = index;
  if (!(index === 0)) {
    setTimeout(() => {
      setIndex(0);
    }, 1000);
  }
  if (indexCount === 0) {
    return <></>;
  } else {
    return (
      <Modal openState={true}>
        <img className=" w-[30vw] " src={popup[indexCount]} alt="" />
      </Modal>
    );
  }
}
