// import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

// function LoginPage() {
//   값   //값 정하는 func   //기본 값
//   const [Id, setInput] = useState("");
//   //const [inputPw, setInput] = useState("");
//   const [bgColor, setBgcolor] = useState("");

//   const updateInput = (e) => {
//     const inputVal = e.target.value;
//     setInput(inputVal);
//     if (inputVal.length > 4) {
//       setBgcolor("blue");
//     } else {
//       setBgcolor("#red");
//     }
//   };

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate("/main");
  };

  return (
    <div className="Login">
      <div className="container">
        <div className="inner">
          <h1 className="logoName">WesTagram</h1>
          <div className="inputBox">
            <input
              id="id"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일 "
              //onChange={updateInput}
            />
          </div>
          <div className="inputBox">
            <input
              id="password"
              type="password"
              placeholder="비밀번호"
              // onChange={updateInput}
            />
          </div>
          <div className="buttonBox">
            <button
              type="button"
              className="btn"
              // disabled="disabled"
              // onChange={updateInput}
              onClick={goToMain}
            >
              <span>로그인</span>
            </button>
          </div>
          <div className="pwForgot">
            <a href="" className="forgotPw">
              <span>비밀번호를 잊으셨나요?</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
