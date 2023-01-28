import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login1 = () => {
  const navigate = useNavigate();
  const navigateToMain = () => {
    navigate('/main-hansol');
  };
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const saveUserId = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
  };

  return (
    <>
      <div className="logo">westagram</div>
      <input
        type="text"
        placeholder="전화번호, 사용자 이름 또는 이메일"
        onChange={saveUserId}
      />
      <input
        name="pwtext"
        type="password"
        placeholder="비밀번호"
        onChange={saveUserPw}
      />
      <button
        onClick={navigateToMain}
        disabled={!(id.includes('@') && pw.length >= 5)}
      >
        로그인
      </button>
      <div className="findPw">비밀번호를 잊으셨나요?</div>
    </>
  );
};

export default Login1;
