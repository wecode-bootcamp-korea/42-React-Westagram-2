import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';

const LoginForm = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const navigateToMain = () => {
    fetch('http://10.58.52.229:3000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.accessToken) {
          localStorage.setItem('login-token', response.accessToken);
          navigate('/main-hansol');
        }
      });
  };

  const saveUserId = e => {
    setId(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
  };

  const signup = () => {
    fetch('http://10.58.52.229:3000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(response => console.log(response));
  };
  const token = localStorage.getItem('login-token');
  return (
    <div className="loginForm">
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
        //onClick={signin}
        disabled={!(id.includes('@') && pw.length >= 5)}
      >
        로그인
      </button>
      <button onClick={signup}>회원가입</button>
      <div className="findPw">비밀번호를 잊으셨나요?</div>
    </div>
  );
};

export default LoginForm;
