import hand from '../assets/img/popup/hand.png'
import filebtn from '../assets/img/popup/filebtn.png'
import cancel from '../assets/img/popup/cancel.png'
import { useRecoilState } from 'recoil'
import communicationView from '../atom/communicationView'
import { useRef, useState } from 'react'
import axios from 'axios'

function Communication() {
  const [communicationPageView, setcommunicationPageView] = useRecoilState(
    communicationView,
  )
  const type = 'communication'
  const [emailForm, setEmailForm] = useState({
    userName: '',
    userPhone: '',
    userEmail: '',
    title: '',
    context: '',
    selectedFile: '',
    checkbox: false,
  })

  const emailFormChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    if (name === 'userName') {
      setEmailForm({ ...emailForm, userName: value })
    } else if (name === 'userPhone') {
      setEmailForm({ ...emailForm, userPhone: value })
    } else if (name === 'userEmail') {
      setEmailForm({ ...emailForm, userEmail: value })
    } else if (name === 'title') {
      setEmailForm({ ...emailForm, title: value })
    } else if (name === 'context') {
      setEmailForm({ ...emailForm, context: value })
    } else if (name === 'checkbox') {
      setEmailForm({ ...emailForm, checkbox: !emailForm.checkbox })
    }
  }
  const handleFileChange = (event) => {
    if (event.target.files.length === 0) {
      event.target.value = ''
      return false
    }
    const file = event.target.files[0]
    setEmailForm({ ...emailForm, selectedFile: file })
  }

  const emailFormSubmit = async () => {
    if (emailForm.checkbox) {
      const formData = new FormData()
      formData.append('userName', emailForm.userName)
      formData.append('userPhone', emailForm.userPhone)
      formData.append('userEmail', emailForm.userEmail)
      formData.append('title', emailForm.title)
      formData.append('context', emailForm.context)
      formData.append('selectedFile', emailForm.selectedFile)
      formData.append('type', type)
      console.debug(emailForm)
      const data = await axios({
        method: 'post',
        url: `${process.env.REACT_APP_SERVER_URL}/mails`,
        data: formData,
      })
      console.debug(data)
    } else {
      alert('개인정보처리방침에 동의해주세요!')
    }
  }

  return (
    <div className="top-0 flex w-[100vw] h-[100vw]  fixed  justify-center z-30 custom-scroll">
      <div className="mt-[2vw] h-[90vh]   w-[60vw] pl-[5.6vw] pr-[5.6vw] pb-[5.6vw] pt-[2vw] bg-[white] p-[5.6vw] border-2 overflow-y-scroll custom-scroll">
        <img
          className="ml-[100%]  h-[4vw]"
          src={cancel}
          alt=""
          onClick={() => {
            setcommunicationPageView(!communicationPageView)
          }}
        />
        <div className="">
          <div className="flex  leading-[2.8vw] items-end">
            <h1 className="text-[2.5vw] font-neob">
              우아하게는
              <br />
              고객의 경험을 통해 서비스를
              <br />
              만들고 발전해 나가고자 합니다
            </h1>
          </div>
          <p className="mt-[1vw] font-neom text-[#434343] text-[1vw]">
            언제든지 문의사항이나, 지원이 필요한 부분을 알려주세요.
            <br />
            가능하면 최대한 지원하겠습니다. 감사합니다.
          </p>
        </div>
        <div className="mt-[2vw]">
          <h1 className="text-[1.5vw] font-neob">정보</h1>
          <ul>
            <li className="relative flex items-center">
              <p className="pb-[0.5vw]  pt-[1vw] w-[8.5vw] border-b font-neob text-[1.2vw]">
                성함
                <p className="absolute top-[1.1vw] left-[2.2vw] w-[6px] h-[6px] bg-[#f93873] rounded-full"></p>
              </p>
              <input
                value={emailForm.userName}
                onChange={emailFormChange}
                className="pt-[1.0vw] pb-[0.5vw] w-[100%]   border-b-[1px] focus:outline-none  font-neob text-[1.2vw]"
                type="text"
                id=""
                name="userName"
              />
            </li>
            <li className="relative flex items-center">
              <p className="pb-[0.5vw]  pt-[1vw] w-[8.5vw] border-b font-neob text-[1.2vw]">
                휴대전화
                <p className="absolute top-[1.1vw] left-[4.2vw] w-[6px] h-[6px] bg-[#f93873] rounded-full"></p>
              </p>
              <input
                value={emailForm.userPhone}
                onChange={emailFormChange}
                className="pt-[1.0vw] pb-[0.5vw] w-[100%]   border-b-[1px] focus:outline-none  font-neob text-[1.2vw]"
                type="text"
                id=""
                name="userPhone"
              />
            </li>
            <li className="relative flex items-center">
              <p className="pb-[0.5vw]  pt-[1vw] w-[8.5vw] border-b font-neob text-[1.2vw]">
                이메일주소
                <p className="absolute top-[1.1vw] left-[5.1vw] w-[6px] h-[6px] bg-[#f93873] rounded-full"></p>
              </p>
              <input
                value={emailForm.userEmail}
                onChange={emailFormChange}
                className="pt-[1.0vw] pb-[0.5vw] w-[100%]   border-b-[1px] focus:outline-none  font-neob text-[1.2vw]"
                type="text"
                id=""
                name="userEmail"
              />
            </li>
            <p className="mt-[1vw] font-neom text-[#434343] text-[1vw]">
              내용에 대한 답변은 입력하신 이메일 주소로 회신하여 드립니다.
            </p>
          </ul>
        </div>
        <div className="mt-[2vw]">
          <h1 className="text-[1.5vw] font-neob">내용</h1>
          <ul>
            <li className="relative flex items-center">
              <p className="pb-[0.5vw]  pt-[1vw] w-[8.5vw] border-b font-neob text-[1.2vw]">
                제목
                <p className="absolute top-[1.1vw] left-[2.2vw] w-[6px] h-[6px] bg-[#f93873] rounded-full"></p>
              </p>
              <input
                value={emailForm.title}
                onChange={emailFormChange}
                className="pt-[1.0vw] pb-[0.5vw] w-[100%]   border-b-[1px] focus:outline-none  font-neob text-[1.2vw]"
                type="text"
                id=""
                name="title"
              />
            </li>
            <li>
              <textarea
                value={emailForm.context}
                name="context"
                onChange={emailFormChange}
                className="mt-[1.5vw] mb-[1vw] text-[1.2vw] border-[1px]  focus:outline-none w-[100%] rounded-lg p-[1vw] placeholder-[#434343] font-neom"
                cols="50"
                rows="10"
                placeholder="내용을 입력해주세요"
              ></textarea>
            </li>
          </ul>
        </div>
        <div className="mb-[3.5vw]">
          <ul>
            <li>
              <p className="font-neom text-[1vw] mb-[1.5vw]">
                첨부파일은 최대 100MB까지 등록 가능합니다. 파일형식은 pptx, pdf,
                xlsx, docx, hwp, jpg, png만 가능합니다.
              </p>
            </li>
            <li className="flex justify-center">
              <img className="w-[11.6vw]" src={filebtn} alt="" />
            </li>
          </ul>
        </div>
        <div className="border font-neom text-[0.9vw] rounded-lg p-[0.9vw]">
          <p className="text-[1vw] font-neom">
            &lt; 개인정보보호를 위한 이용자 동의 사항 &gt; <br />
            우아하게는 제휴를 희망하는 기업 및 개인을 대상으로 아래와 같이
            개인정보를 수집하고 있습니다.
            <br />
            1. 수집 개인정보 항목 _ [필수] 성함, 메일 주소, 휴대전화 번호 <br />
            2. 개인정보의 수집 및 이용목적 _ 제휴신청에 따른 본인확인 및 원활한
            의사소통 경로 확보
            <br />
            3. 개인정보의 이용기간 _ 제휴 신청일로부터 4개월까지
            <br />그 밖의 사항은 개인정보취급방침을 준수합니다.
          </p>
        </div>
        <div className="mt-[4vw] text-[1.2vw] font-neom flex flex-col items-center">
          <div className="flex items-center">
            <input
              className="mr-[0.58vw] transform scale-[1.2]"
              type="checkbox"
              id="cb1"
            />
            <p>
              <span className="font-neob">개인정보처리방침</span>에 동의합니다.
            </p>
          </div>
          <div className="flex mt-[4vw]">
            <div className="font-neob flex justify-center items-center rounded-lg text-[1vw] w-[12.5vw] h-[3vw] text-[white] ml-[0.8vw] bg-[#c7c7c7]">
              취소
            </div>
            <div className="font-neob flex justify-center items-center rounded-lg text-[1vw] w-[12.5vw] h-[3vw] text-[white] ml-[0.8vw] bg-[#f93873]">
              확인
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Communication
