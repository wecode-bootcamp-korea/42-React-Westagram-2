import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    fetch('http://10.58.52.199:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: JSON.stringify({
        email: inputID,
        password: password,
      }),
    })
      .then(res => res.json())
      .then(response => {
        if (response.accessToken) {
          localStorage.getItem('jhp-token');
          navigate('/main-junhyun');
        } else {
          alert('로그인 실패 ');
        }
      });
  };
  //

  const [inputID, setInputID] = useState('');
  const [password, setPassword] = useState('');

  const saveUserId = e => {
    setInputID(e.target.value);
  };

  const saveUserPw = e => {
    setPassword(e.target.value);
  };

  const isDisabled =
    inputID.includes('@') && password.length >= 5 ? false : true;

  return (
    <div className="logIn">
      <div className="container">
        <div className="inner">
          <h1 className="logoName">WesTagram</h1>
          <div className="inputBox">
            <input
              className="id"
              type="text"
              placeholder="전화번호,사용자 이름 또는 이메일 "
              onChange={saveUserId}
              value={inputID}
            />
          </div>
          <div className="inputBox">
            <input
              id="pW"
              type="password"
              placeholder="비밀번호"
              onChange={saveUserPw}
              value={password}
            />
          </div>
          <div className="buttonBox">
            <button
              type="button"
              className="btnLogin"
              onClick={goToMain}
              disabled={isDisabled}
            >
              <span>로그인</span>
            </button>
          </div>

          <div className="pwForgot">
            <a href=" " className="forgotPw">
              <span>비밀번호를 잊으셨나요?</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
