import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  // 로그인 유효성 검사
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  const [btnDisabled, setbtnDisabled] = useState(true);

  const saveUserId = event => {
    setUserId(event.target.value);
  };

  const saveUserPw = event => {
    setUserPw(event.target.value);
  };

  const isValid = () => {
    userId.indexOf('@') >= 0 && userPw.length > 5
      ? setbtnDisabled(false)
      : setbtnDisabled(true);
  };

  // 페이지 이동
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/main-eunjung');
  };

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
            onKeyUp={isValid}
          />
          <input
            value={userPw || ''}
            className="loginInput"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
            onKeyUp={isValid}
          />
          <button
            className="loginBtn"
            type="button"
            onClick={goToMain}
            disabled={btnDisabled}
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
};

export default Login;
