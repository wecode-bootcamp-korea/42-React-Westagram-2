import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main-junhyun');
  };

  const [input, setInput] = useState('');
  const [password, setPassword] = useState('');

  const saveUserId = e => {
    const inputVal = e.target.value;
    setInput(inputVal);
  };

  const saveUserPw = e => {
    const passwordVal = e.target.value;
    setPassword(passwordVal);
  };
  // 비밀 번호가 5와 같거나 크면 로그인 버튼이 활성화 아니면 비활성화

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
              // className={isDisabled ? 'btnLogin' : 'btnLoginabled'}
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
