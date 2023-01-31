import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-junhyun');
  };

  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');

  const saveUserId = e => {
    setInput(e.target.value);
  };

  const saveUserPw = e => {
    setPassword(e.target.value);
  };

  const isDisabled = input.includes('@') && password.length >= 5 ? false : true;

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
              onChange={saveUserId}
              value={input}
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
