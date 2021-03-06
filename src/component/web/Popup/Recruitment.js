import hand from "../../../assets/img/popup/hand.png";
import cancel from "../../../assets/img/popup/cancel.png";
import { useEffect, useRef, useState } from "react";
import check from "../../../assets/img/popup/check.png";
import axios from "axios";
import Loading from "../../../component/Loading";
import Modal from "../../../component/Modal";
import emailjs from "emailjs-com";
import storage from "../../../utils/firebase";

function Recruitment({ index, setIndex }) {
  const checkboxLabel = useRef();
  const type = "recruitment";

  const [LoadingPageView, setLoadingPageView] = useState(false);

  const [emailForm, setEmailForm] = useState({
    companyName: "",
    userName: "",
    userPhone: "",
    userEmail: "",
    title: "",
    context: "",
    selectedFiles: [],
    storageFiles: [],
    checkbox: false,
  });
  useEffect(() => {
    console.log(emailForm.selectedFiles);
  }, [emailForm.selectedFiles]);

  const emailFormChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    if (name === "companyName") {
      setEmailForm({ ...emailForm, companyName: value });
    } else if (name === "userName") {
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
      alert("5???????????? ???????????????");
      return;
    }
    setEmailForm({
      ...emailForm,
      selectedFiles: emailForm.selectedFiles.concat(files),
    });
  };

  const emailFormSubmit = async () => {
    emailForm.selectedFiles.forEach(async (file) => {
      console.log(file.name);
      await storage.ref(`/images/${file.name}`).put(file);
      storage
        .ref(`/images/${file.name}`)
        .getDownloadURL()
        .then((url) => {
          setEmailForm({
            ...emailForm,
            selectedFiles: emailForm.selectedFiles.concat(url),
          });
        });
    });

    /*if (
      emailForm.companyName === "" ||
      emailForm.userName === "" ||
      emailForm.userPhone === "" ||
      emailForm.userEmail === "" ||
      emailForm.title === "" ||
      emailForm.context === ""
    ) {
      alert("?????????????????? ??????????????????");
      return;
    }
    if (!emailForm.checkbox) {
      alert("??????????????????????????? ??????????????????!");
      return;
    }
    const formData = new FormData();
    formData.append("companyName", emailForm.companyName);
    formData.append("userName", emailForm.userName);
    formData.append("userPhone", emailForm.userPhone);
    formData.append("userEmail", emailForm.userEmail);
    formData.append("title", emailForm.title);
    formData.append("context", emailForm.context);
    emailForm.selectedFiles.forEach((file) => {
      formData.append("selectedFiles", file);
    });
    formData.append("type", type);

    // setLoadingPageView(!LoadingPageView);
    console.log(emailForm);
    emailjs
      .send(
        "service_hfmauf3",
        "template_5s72u89",
        emailForm,
        "user_KXvfNoNAVUWCT1DrMl2Mb"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    /* const data = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URL}/mails`,
        data: formData,
        withCredentials: true,
      });
      setLoadingPageView(!LoadingPageView);*/
    // setIndex(false);*/
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
    <>
      <Modal openState={index}>
        <div className="top-0 flex w-[100vw] h-[100vw]  fixed  justify-center z-30 custom-scroll">
          {LoadingPageView ? <Loading /> : null}
          <div className="mt-[2vw]   w-[60vw] h-[90vh] bg-[white]  pl-[5.6vw] pr-[4vw] pb-[1vw] pt-[2vw] border-2 overflow-y-scroll custom-scroll">
            <img
              className="ml-[100%] h-[4vw]"
              src={cancel}
              alt=""
              onClick={() => {
                setIndex(false);
              }}
            />
            <div className="">
              <div className="flex  leading-[2.8vw] items-end">
                <h1 className="text-[2.5vw] font-neob">
                  ???????????????.
                  <br /> ??????????????? ?????????
                  <br /> ?????? ???????????????????
                </h1>
                <img className=" h-[3vw]" src={hand} alt="" />
              </div>
              <p className="mt-[1vw] font-neom text-[#434343] text-[1vw]">
                ????????? ?????? ????????? ???????????? ????????? ????????? ???????????? ????????????.
              </p>
            </div>
            <div className="mt-[2vw]">
              <h1 className="text-[1.5vw] font-neob">????????? ??????</h1>
              <ul>
                <li className="relative flex items-center">
                  <p className="pb-[0.5vw]  pt-[1vw] w-[7.5vw] border-b font-neob text-[1.2vw]">
                    ?????????
                    <p className="absolute top-[1.1vw] left-[3.2vw] w-[6px] h-[6px] bg-[#f93873] rounded-full"></p>
                  </p>
                  <input
                    value={emailForm.companyName}
                    onChange={emailFormChange}
                    className="pt-[1.0vw] pb-[0.5vw] w-[100%]   border-b-[1px] focus:outline-none  font-neob text-[1.2vw]"
                    type="text"
                    id=""
                    name="companyName"
                  />
                </li>
                <li className="relative flex items-center">
                  <p className="pb-[0.5vw]  pt-[1vw] w-[7.5vw] border-b font-neob text-[1.2vw]">
                    ?????? / ??????
                    <p className="absolute top-[1.1vw] left-[5.4vw] w-[6px] h-[6px] bg-[#f93873] rounded-full"></p>
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
                  <p className="pb-[0.5vw]  pt-[1vw] w-[7.5vw] border-b font-neob text-[1.2vw]">
                    ????????????
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
                  <p className="pb-[0.5vw]  pt-[1vw] w-[7.5vw] border-b font-neob text-[1.2vw]">
                    ???????????????
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
              </ul>
            </div>
            <div className="mt-[2vw]">
              <h1 className="text-[1.5vw] font-neob">????????????</h1>
              <ul>
                <li className="relative flex items-center">
                  <p className="pb-[0.5vw]  pt-[1vw] w-[4vw] border-b font-neob text-[1.2vw]">
                    ??????
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
                    placeholder="????????? ??????????????????"
                  ></textarea>
                </li>
              </ul>
            </div>
            <div className="mb-[3.5vw]">
              <ul>
                <li>
                  <p className="font-neom text-[1vw] mb-[1.5vw]">
                    ??????????????? ?????? 10MB?????? ?????? ???????????????. ??????????????? pptx,
                    pdf, xlsx, docx, hwp, jpg, png??? ???????????????.
                  </p>
                </li>
                <li className="flex justify-center">
                  <label
                    className="border-[1px] border-[#f93873]  flex justify-center items-center w-[11.6vw] h-[2.6vw] text-[1.15vw] font-neob rounded-lg text-[#f93873]"
                    htmlFor="input-file"
                  >
                    ????????????
                  </label>
                  <input
                    id="input-file"
                    className="hidden"
                    multiple="multiple"
                    type="file"
                    onChange={handleFileChange}
                  />
                </li>

                <div className="font-neom text-[1.0vw]">
                  {selectedfileName()}
                </div>
              </ul>
            </div>
            <div className="border font-neom text-[0.9vw] rounded-lg p-[0.9vw]">
              <p className="text-[1vw] font-neom">
                &lt; ????????????????????? ?????? ????????? ?????? ?????? &gt; <br />
                ??????????????? ????????? ???????????? ?????? ??? ????????? ???????????? ????????? ??????
                ??????????????? ???????????? ????????????.
                <br />
                1. ?????? ???????????? ?????? _ [??????] ??????, ?????? ??????, ???????????? ??????{" "}
                <br />
                2. ??????????????? ?????? ??? ???????????? _ ??????????????? ?????? ???????????? ???
                ????????? ???????????? ?????? ??????
                <br />
                3. ??????????????? ???????????? _ ?????? ?????????????????? 4????????????
                <br />??? ?????? ????????? ??????????????????????????? ???????????????.
              </p>
            </div>
            <div className="mt-[4vw] text-[1.2vw] font-neom flex flex-col items-center">
              <div className="relative flex items-center">
                <label
                  className="w-[1.4vw] h-[1.4vw] border mr-[0.5vw] rounded-sm bg-[white] cursor-pointer "
                  htmlFor="cb1"
                  ref={checkboxLabel}
                >
                  <img
                    className="absolute top-[0.2vw] w-[1.4vw] "
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
                  <span className="font-neob">????????????????????????</span>???
                  ???????????????.
                </p>
              </div>
              <div className="flex mt-[4vw]">
                <div
                  onClick={() => {
                    setIndex(false);
                  }}
                  className="font-neob flex justify-center items-center rounded-lg text-[1vw] w-[12.5vw] h-[3vw] text-[white] ml-[0.8vw] bg-[#c7c7c7] cursor-pointer"
                >
                  ??????
                </div>
                <div
                  onClick={emailFormSubmit}
                  className="font-neob flex justify-center items-center rounded-lg text-[1vw] w-[12.5vw] h-[3vw] text-[white] ml-[0.8vw] bg-[#f93873] cursor-pointer"
                >
                  ??????
                </div>
              </div>
            </div>
            <img
              className="ml-[100%] h-[4vw] mt-[5vw]"
              src={cancel}
              alt=""
              onClick={() => {
                setIndex(false);
              }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
}
export default Recruitment;
