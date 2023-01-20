import React, { useState } from 'react';
import './Login.scss';

const LoginHeylynn = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  console.log(userId, 'userId');
  console.log(userPw, 'userPw');

  const getUserId = event => {
    setUserId(event.target.value);
    // console.log(event.target.value);
  };
  const getUserPw = event => {
    setUserPw(event.target.value);
  };

  return (
    <main className="loginHeylynn">
      <div className="inner">
        <header className="header">
          <h1>Westagram</h1>
        </header>
        <form className="form">
          <div className="inputWrapper">
            <input
              onChange={getUserId}
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={getUserPw}
              id="password"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="buttonWrapper">
            <button type="button" className="btn">
              <span>로그인</span>
            </button>
          </div>
        </form>
        <div className="passwordForget">
          <a href="#" className="pageMove">
            <span>비밀번호를 잊으셨나요?</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default LoginHeylynn;
