import React, { useState } from 'react';
import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';

function LoginEunjung() {
  // userId 저장
  const [userId, setUserId] = useState('');

  const saveUserId = event => {
    setUserId(event.target.value);
  };

  // userPw 저장
  const [userPw, setUserPw] = useState('');

  const saveUserPw = event => {
    setUserPw(event.target.value);
  };

  // 페이지 이동
  const navigate = useNavigate();

  return (
    <div className="login">
      <main className="loginMain">
        <Link className="logo" to="/main-eunjung">
          westagram
        </Link>
        <form className="loginForm">
          <input
            value={userId || ''}
            className="loginInput"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            value={userPw || ''}
            className="loginInput"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          <button
            className="loginBtn"
            type="button"
            onClick={() => {
              navigate('/main-eunjung');
            }}
          >
            로그인
          </button>
        </form>
        <Link className="forgotPw" to="/main-eunjung">
          비밀번호를 잊으셨나요?
        </Link>
      </main>
    </div>
  );
}

export default LoginEunjung;
