import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
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
    userId.indexOf('@') >= 0 && userPw.length > 3
      ? setbtnDisabled(false)
      : setbtnDisabled(true);
  };

  const signUp = () => {
    fetch('http://10.58.52.134:3000/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        email: userId,
        password: userPw,
      }),
    })
      .then(response => response.json())
      .then(data => {
        // console.log(data);
        localStorage.setItem('token', data.accessToken);
      });
    //useNavigate();
  };

  // const navigate = useNavigate();
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
            disabled={btnDisabled}
            onClick={signUp}
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
