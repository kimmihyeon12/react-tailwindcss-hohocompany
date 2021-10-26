import { useRecoilState } from 'recoil'
import recruitmentView from '../atom/recruitmentView'
import communicationView from '../atom/communicationView'

function CompanyBox({ img, index }) {
  const [recruitmentPageView, setRecruitmentPageView] = useRecoilState(
    recruitmentView,
  )
  const [communicationPageView, setcommunicationPageView] = useRecoilState(
    communicationView,
  )
  return (
    <li
      className="ml-[2.3vw] mr-[2.3vw] group "
      onClick={(e) => {
        if (index === 0) setRecruitmentPageView(!recruitmentPageView)
        if (index === 1) setcommunicationPageView(!communicationPageView)
      }}
    >
      <div className=" relative w-[34.8vw] h-[10.4vw] overflow-hidden bg-[rgba(1,1,1,0.3)] rounded-[2vw] cursor-pointer">
        <img
          className="absolute w-[34.8vw] h-[10.4vw]  duration-1000  z-[-1] transform group-hover:scale-110"
          src={img.background}
          alt=""
        />
        <div className="absolute flex flex-col">
          <p className="mt-[2.13vw] ml-[1.45vw] text-[1.4vw] font-neob">
            {img.title}
          </p>
          <p className=" w-[18vw] mt-[1.5vw] ml-[1.45vw] text-[1.2vw] font-neosb">
            {img.content}
          </p>
          <div className="absolute  right-[-14.5vw] top-[6.5vw] h-[3vw] bg-[#fb6b79] rounded-[2vw]  text-[1.2vw] font-neosb  pl-[1.5vw] pr-[1.5vw] pt-[0.7vw] pb-[0.7vw]">
            {img.text}
          </div>
        </div>
      </div>
    </li>
  )
}
export default CompanyBox
