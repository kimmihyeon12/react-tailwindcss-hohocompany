import phone from '../assets/img/main-section2/phone.png'
import check from '../assets/img/main-section2/check.png'
import tag from '../assets/img/main-section6/tag.png'
import phoneimg from '../assets/img/main-section6/phone.png'
import { useEffect, useRef, useState } from 'react'

function UpAnimation({ page }) {
  const text = useRef()
  const img = useRef()
  const text1 = useRef()
  const img1 = useRef()
  let scrollbarSize = (document.documentElement.scrollHeight - 736) / 13
  if (page === 4) {
    scrollbarSize = (document.documentElement.scrollHeight - 736) / 2.2
  }

  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      setScrollY(window.pageYOffset)
      if (page === 2) {
        if (scrollY < scrollbarSize) {
          text.current.style.transform = 'translate(0, 180%)'
          img.current.style.transform = 'translate(0, 30%)'
        }
        if (scrollY > scrollbarSize) {
          text.current.style.transform = 'translate(0, 0)'
          img.current.style.transform = 'translate(0, 0)'
        }
      }
      if (page === 4) {
        if (scrollY < scrollbarSize) {
          text1.current.style.transform = 'translate(0, 180%)'
          img1.current.style.transform = 'translate(0, 30%)'
        }
        if (scrollY > scrollbarSize) {
          text1.current.style.transform = 'translate(0, 0)'
          img1.current.style.transform = 'translate(0, 0)'
        }
      }
    })
  })

  if (page === 2) {
    return (
      <div className="flex w-[80vw] mt-[1.7vw] justify-between ">
        <ul className="mt-[18vw] duration-[1.0s]" ref={text}>
          <li className="flex text-[1.4vw] items-center font-neob mb-[0.5vw]">
            <img className="w-[1.8vw] mr-[0.9vw]" src={check} alt="" /> 엄마
            아빠가 편하게 나갈 수는 없을까요?
          </li>
          <li className="font-neob text-[2.6vw] mb-[0.5vw] ml-[2.6vw] leading-[2.9vw] ">
            유아를 동반한 부모가 외식할 때 <br />
            <p className="text-[#f93873]"> 각종 편의시설이 부족해요 </p>
          </li>
          <li className="font-neosb ml-[2.6vw] text-[1.4vw] leading-[1.9vw]">
            몇 번의 터치로 맞춤형 편의시설을 검색할 수 있어요 <br /> 필터를 통해
            목적지와 가까운 <br /> 주변 정보도 한눈에 확인 할 수 있어요
          </li>
        </ul>
        <img
          ref={img}
          className="w-[41vw] h-[43.1vw] duration-[0.6s]"
          src={phone}
          alt=""
        />
      </div>
    )
  }
  if (page === 4) {
    return (
      <div className="flex w-[80vw]">
        <div className="flex mt-[14.6vw] duration-[1.0s] " ref={text1}>
          <img
            className="w-[1.8vw] h-[1.8vw] mt-[0.3vw] mr-[1.5vw]"
            src={check}
            alt=""
          />
          <ul>
            <li className="text-[2.6vw] font-neob mb-[0.5vw] leading-[2.9vw]">
              육아맘과 육아대디에게 <br /> 꼭 필요한
              <span className="text-[#f93873]"> 정보를 편리하게 </span>
            </li>
            <li className="text-[1.4vw] font-neosb mb-[1vw] leading-[1.9vw]">
              상황과 필요에 맞춰 영· 유아 보호자를 위한 <br /> 위치· 장소 정보
              제공 서비스를 제공합니다
            </li>
            <li>
              <ul className="flex mb-[1vw]">
                <li>
                  <div className="border-[0.15vw] border-[#f93873] w-[7.6vw] h-[2.5vw] flex justify-center items-center text-[1.15vw] font-neob text-[#f93873] rounded-[2vw] mr-[0.5vw]">
                    #아기의자
                  </div>
                </li>
                <li>
                  <div className="border-[0.15vw] border-[#f93873] w-[7.6vw] h-[2.5vw] flex justify-center items-center text-[1.15vw] font-neob text-[#f93873] rounded-[2vw] mr-[0.5vw]">
                    #아기메뉴
                  </div>
                </li>
                <li>
                  <div className="border-[0.15vw] border-[#39396c] w-[7.6vw] h-[2.5vw] flex justify-center items-center text-[1.15vw] font-neob text-[#39396c] rounded-[2vw]">
                    #놀이방
                  </div>
                </li>
              </ul>
              <ul className="flex">
                <li>
                  <div className="border-[0.15vw] border-[#39396c] w-[7.6vw] h-[2.5vw] flex justify-center items-center text-[1.15vw] font-neob text-[#39396c] rounded-[2vw] mr-[0.5vw]">
                    #아기침대
                  </div>
                </li>
                <li>
                  <div className="border-[0.15vw] border-[#f93873] w-[7.6vw] h-[2.5vw] flex justify-center items-center text-[1.15vw] font-neob text-[#f93873] rounded-[2vw] mr-[0.5vw]">
                    #아기식기
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <img
          ref={img1}
          className="w-[45vw] h-[47vw] ml-[3.6vw] mt-[2.6vw] duration-[0.6s] "
          src={phoneimg}
          alt=""
        />
      </div>
    )
  }
}
export default UpAnimation
