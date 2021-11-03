import popup1 from '../assets/img/popup/popup1.png'
import popup2 from '../assets/img/popup/popup2.png'
import popup3 from '../assets/img/popup/popup3.png'
import popup4 from '../assets/img/popup/popup4.png'
import { useRecoilValue, useRecoilState } from 'recoil'
import popupView from '../atom/popupView'
function Popup() {
  const popup = [popup1, popup1, popup2, popup3, popup4]
  const popupPageView = useRecoilValue(popupView)
  return (
    <div className="top-0 flex w-[100vw] h-[100vh]  fixed  justify-center items-center z-30">
      <img src={popup[popupPageView]} alt="" />
    </div>
  )
}
export default Popup
