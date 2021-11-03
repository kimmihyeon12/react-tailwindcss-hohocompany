import highLight from '../assets/img/main-section1/high-light.png'
import appstoredown from '../assets/img/main-section1/appstore.png'
import googlestoredown from '../assets/img/main-section1/googleplay.png'
import { useRecoilState } from 'recoil'
import bannerCountState from '../atom/bannerCount'
import popupView from '../atom/popupView'
function SliderText({ count }) {
  const [bannerCount, setBannerCount] = useRecoilState(bannerCountState)
  //const [popupPageView, setcommunicationPageView] = useRecoilState(popupView)
  const Text1 = (
    <div className="absolute w-[50vw] top-[17.2vw]  left-[10.9vw]  leading-[3.6vw]">
      <img className="absolute w-[11.8vw] top-[5vw]" src={highLight} alt="" />
      <p className="absolute text-[1.9vw] font-neob">
        아기의자, 아기메뉴, 유모차 출입...
        <br />
      </p>
      <p className="absolute  z-10 top-[3.5vw]  text-[3.1vw] font-neoeb">
        미리 알고
        <br />
        방문할 수 없을까요?
      </p>
    </div>
  )
  const Text2 = (
    <div className="absolute w-[50vw] top-[20.2vw] left-[10.7vw] leading-[3.6vw] text-[3.1vw]">
      <p className="font-neom">
        아이와 함께하는 가족에게
        <br />
      </p>
      <p className="font-neoh text-[#f28446]">더 많은 추억을 쌓을 수 있도록</p>
    </div>
  )
  const Text3 = (
    <div className="absolute top-[17.2vw] w-[50vw] left-[10.9vw]  leading-[3.6vw]">
      <p className="text-[1.9vw] font-neob">
        처음이라 서툴고 어려운 육아
        <br />
      </p>
      <p className="text-[3.1vw] font-neom">
        <span className="text-[#f5967a] font-neoh">당신의 수고를 알기에</span>
        <br />
        든든한 힘이 되어드릴게요
      </p>
    </div>
  )
  const Text4 = (
    <div className="absolute top-[16.6vw] w-[50vw] left-[10.9vw]  leading-[3.6vw] text-[3.1vw] font-neosb">
      <p>
        특별한 날은
        <br />
      </p>
      <p className="mb-[0.9vw]">
        <span className="font-neoh text-[#d9427a]">우아하게</span>와 함께 하세요
      </p>
      <div className="flex">
        <img className="w-[11.8vw] mr-[1vw]" src={appstoredown} alt="" />
        <a
          href="https://play.google.com/store/apps/details?id=com.hohocompany.uahage"
          target="_blank"
          rel="noreferrer"
        >
          <img className="w-[11.8vw]" src={googlestoredown} alt="" />
        </a>
      </div>
    </div>
  )

  const bannerText = [Text1, Text2, Text3, Text4]

  return <div className="">{bannerText[count]}</div>
}
export default SliderText
