import React from 'react';
import { Link } from 'react-router-dom';

const Login1 = () => {
  return (
    <>
      <div className="logo">westagram</div>
      <input type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
      <input type="password" placeholder="비밀번호" />
      <Link
        style={{
          textDecoration: 'none',
          border: '1px solid',
          width: '80%',
          textAlign: 'center',
          marginTop: '1rem',
          padding: '0.5rem',
        }}
        to="/main-hansol"
      >
        로그인
      </Link>
      <div className="findPw">비밀번호를 잊으셨나요?</div>
    </>
  );
};

export default Login1;
