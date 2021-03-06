import cancel from "../../../assets/img/popup/cancel.png";
import check from "../../../assets/img/popup/check.png";
import { useRef, useState } from "react";
import axios from "axios";
import Loading from "../../../component/Loading";
import Modal from "../../../component/Modal";
function Communication({ index, setIndex }) {
  const checkboxLabel = useRef();
  const type = "communication";
  const [LoadingPageView, setLoadingPageView] = useState(false);
  const [emailForm, setEmailForm] = useState({
    userName: "",
    userPhone: "",
    userEmail: "",
    title: "",
    context: "",
    selectedFiles: [],
    checkbox: false,
  });

  const emailFormChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "userName") {
      setEmailForm({ ...emailForm, userName: value });
    } else if (name === "userPhone") {
      setEmailForm({ ...emailForm, userPhone: value });
    } else if (name === "userEmail") {
      setEmailForm({ ...emailForm, userEmail: value });
    } else if (name === "title") {
      setEmailForm({ ...emailForm, title: value });
    } else if (name === "context") {
      setEmailForm({ ...emailForm, context: value });
    } else if (name === "checkbox") {
      setEmailForm({ ...emailForm, checkbox: !emailForm.checkbox });
      if (!emailForm.checkbox) {
        checkboxLabel.current.style.backgroundColor = "#f93873";
      } else {
        checkboxLabel.current.style.backgroundColor = "white";
      }
    }
  };
  const handleFileChange = (event) => {
    if (event.target.files.length === 0) {
      event.target.value = "";
      return false;
    }
    let files = [];
    for (let i = 0; i < event.target.files.length; i++) {
      files.push(event.target.files[i]);
    }
    if (files.length + emailForm.selectedFiles.length > 5) {
      alert("5장까지만 가능합니다");
      return;
    }
    setEmailForm({
      ...emailForm,
      selectedFiles: emailForm.selectedFiles.concat(files),
    });
  };

  const emailFormSubmit = async () => {
    console.log("emailFormSubmit");
    if (
      emailForm.userName === "" ||
      emailForm.userPhone === "" ||
      emailForm.userEmail === "" ||
      emailForm.title === "" ||
      emailForm.context === ""
    ) {
      alert("필수항목들을 입력해주세요");
      return;
    }
    if (!emailForm.checkbox) {
      alert("개인정보처리방침에 동의해주세요!");
      return;
    }

    const formData = new FormData();
    formData.append("userName", emailForm.userName);
    formData.append("userPhone", emailForm.userPhone);
    formData.append("userEmail", emailForm.userEmail);
    formData.append("title", emailForm.title);
    formData.append("context", emailForm.context);
    emailForm.selectedFiles.forEach((file) => {
      formData.append("selectedFiles", file);
    });
    formData.append("type", type);
    setLoadingPageView(!LoadingPageView);
    try {
      const data = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URL}/mails`,
        data: formData,
        // withCredentials: true,
      });
      setLoadingPageView(!LoadingPageView);
    } catch (e) {
      console.log("실패!!");
      alert("정보전송에 실패했어요");
      setLoadingPageView(!LoadingPageView);
    }
    setIndex(false);
  };

  const selectedfileName = () => {
    const result = [];
    for (let i = 0; i < emailForm.selectedFiles.length; i++) {
      result.push(
        <p key={i}>
          {i + 1}. {emailForm.selectedFiles[i].name}
        </p>
      );
    }

    return result;
  };

  return (
    <Modal openState={index}>
      <div className="top-0 flex w-[100vw] h-[100vw]  fixed  justify-center z-30 custom-scroll">
        {LoadingPageView ? <Loading /> : null}
        <div className="w-[100vw] h-[100vh] pl-[5.6vw] pr-[4vw] pb-[4vw] pt-[2vw] bg-[white] p-[5.6vw] border-2 overflow-y-scroll custom-scroll">
          <img
            className="ml-[96%]  h-[10vw]"
            src={cancel}
            alt=""
            onClick={() => {
              setIndex(false);
            }}
          />
          <div className="">
            <div className="flex items-end">
              <h1 className="text-[7vw] leading-[9.4vw] tracking-[-1.5px] font-neob">
                우아하게는
                <br />
                고객의 경험을 통해 서비스를
                <br />
                만들고 발전해 나가고자 합니다
              </h1>
            </div>
            <p className="mt-[4vw] font-neom text-[#434343] text-[4vw]">
              언제든지 문의사항이나, 지원이 필요한 부분을 알려주세요. 가능하면
              최대한 지원하겠습니다. 감사합니다.
            </p>
          </div>
          <div className="mt-[2vw]">
            <h1 className="text-[4vw] font-neob">정보</h1>
            <ul>
              <li className="relative flex items-center mt-2">
                <p className="w-[25vw] border-b font-neob text-[3.8vw]">
                  성함
                  <p className="absolute top-[0.5vh] left-[7vw] w-[6px] h-[6px] bg-[#f93873] rounded-full"></p>
                </p>
                <input
                  value={emailForm.userName}
                  onChange={emailFormChange}
                  className=" w-[100%]   border-b focus:outline-none  font-neob text-[3.8vw]"
                  type="text"
                  id=""
                  name="userName"
                />
              </li>
              <li className="relative flex items-center mt-4">
                <p className="w-[25vw] border-b font-neob text-[3.8vw]">
                  휴대전화
                  <p className="absolute top-[0.2vh] left-[13.5vw] w-[6px] h-[6px] bg-[#f93873] rounded-full"></p>
                </p>
                <input
                  value={emailForm.userPhone}
                  onChange={emailFormChange}
                  className=" w-[100%]   border-b focus:outline-none  font-neob text-[3.8vw]"
                  type="text"
                  id=""
                  name="userPhone"
                />
              </li>
              <li className="relative flex items-center mt-4">
                <p className="w-[25vw] border-b font-neob text-[3.8vw]">
                  이메일주소
                  <p className="absolute top-[0.2vh] left-[16.5vw] w-[6px] h-[6px] bg-[#f93873] rounded-full"></p>
                </p>
                <input
                  value={emailForm.userEmail}
                  onChange={emailFormChange}
                  className=" w-[100%]   border-b focus:outline-none  font-neob text-[3.8vw]"
                  type="text"
                  id=""
                  name="userEmail"
                />
              </li>
              <p className="mt-[4vw] font-neom text-[#434343] text-[3vw]">
                내용에 대한 답변은 입력하신 이메일 주소로 회신하여 드립니다.
              </p>
            </ul>
          </div>
          <div className="mt-[2vw]">
            <h1 className="text-[4vw] font-neob ">내용</h1>
            <ul>
              <li className="relative flex items-center mt-2">
                <p className="w-[25vw] border-b font-neob text-[3.8vw]">
                  제목
                  <p className="absolute top-[0.5vh] left-[7vw] w-[6px] h-[6px] bg-[#f93873] rounded-full"></p>
                </p>
                <input
                  value={emailForm.title}
                  onChange={emailFormChange}
                  className=" w-[100%]   border-b focus:outline-none  font-neob text-[3.8vw]"
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
                  className="mt-[1.5vw] mb-[4vw] text-[3.8vw] border-[1px]  focus:outline-none w-[100%] rounded-lg p-[4vw] placeholder-[#434343] font-neom"
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
                <p className="font-neom text-[4vw] mb-[1.5vw]">
                  첨부파일은 최대 10MB까지 등록 가능합니다. 파일형식은 pptx,
                  pdf, xlsx, docx, hwp, jpg, png만 가능합니다.
                </p>
              </li>
              <li className="flex justify-center">
                <label
                  className="border-[1px] border-[#f93873]  flex justify-center items-center w-[22vw] h-[4vh] text-[4vw] font-neob rounded-full text-[#f93873]"
                  htmlFor="input-file"
                >
                  파일첨부
                </label>
                <input
                  id="input-file"
                  className="hidden"
                  multiple="multiple"
                  type="file"
                  onChange={handleFileChange}
                />
              </li>
              <div className="font-neom text-[1.0vw]">{selectedfileName()}</div>
            </ul>
          </div>
          <div className="border font-neom text-[0.9vw] rounded-lg p-[0.9vw]">
            <p className="text-[4vw] font-neom">
              &lt; 개인정보보호를 위한 이용자 동의 사항 &gt; <br />
              우아하게는 제휴를 희망하는 기업 및 개인을 대상으로 아래와 같이
              개인정보를 수집하고 있습니다.
              <br />
              1. 수집 개인정보 항목 _ [필수] 성함, 메일 주소, 휴대전화 번호{" "}
              <br />
              2. 개인정보의 수집 및 이용목적 _ 제휴신청에 따른 본인확인 및
              원활한 의사소통 경로 확보
              <br />
              3. 개인정보의 이용기간 _ 제휴 신청일로부터 4개월까지
              <br />그 밖의 사항은 개인정보취급방침을 준수합니다.
            </p>
          </div>
          <div className="mt-[4vw] text-[3.8vw] font-neom flex flex-col items-center">
            <div className="relative flex items-center">
              <label
                className="w-[4vw] h-[4vw] border mr-[0.5vw] rounded-sm bg-[white] cursor-pointer "
                htmlFor="cb1"
                ref={checkboxLabel}
              >
                <img
                  className="absolute top-[0.2vw] w-[4vw] "
                  src={check}
                  alt="img"
                />
              </label>

              <input
                className="hidden"
                type="checkbox"
                name="checkbox"
                id="cb1"
                onChange={emailFormChange}
                defaultChecked={emailForm.checkbox}
              />

              <p>
                <span className="font-neob">개인정보처리방침</span>에
                동의합니다.
              </p>
            </div>
            <div className="flex mt-[4vw]">
              <div
                onClick={() => {
                  setIndex(false);
                }}
                className="font-neob flex justify-center items-center rounded-full text-[4vw] w-[18vw] h-[4vh] text-[white] ml-[0.8vw] bg-[#c7c7c7]"
              >
                취소
              </div>
              <div
                onClick={emailFormSubmit}
                className="font-neob flex justify-center items-center rounded-full text-[4vw] w-[18vw] h-[4vh] text-[white] ml-[0.8vw] bg-[#f93873] cursor-pointer"
              >
                확인
              </div>
            </div>
          </div>
          <img
            className="ml-[96%]  h-[10vw] mt-[5vw]"
            src={cancel}
            alt=""
            onClick={() => {
              setIndex(false);
            }}
          />
        </div>
      </div>
    </Modal>
  );
}
export default Communication;
