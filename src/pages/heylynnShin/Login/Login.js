import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [userPw, setUserPw] = useState('');
  // console.log(userId, 'userId');
  // console.log(userPw, 'userPw');

  const getUserId = event => {
    setUserId(event.target.value);
  };
  const getUserPw = event => {
    setUserPw(event.target.value);
  };

  const [active, setActive] = useState(false);

  const passLogin = () => {
    return userId.includes('@') && userPw.length >= 5
      ? setActive(true)
      : setActive(false);
  };
  const navigate = useNavigate();

  const goToMain = () => {
    console.log('클릭');
    fetch('http://10.58.52.53:3000/users/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        // name: '신혜린',
        email: userId,
        password: userPw,
      }),
    })
      .then(response => {
        if (response.ok === true) {
          return response.json();
        }
        throw new Error('통신실패!');
      })
      .catch(error => console.log(error))
      .then(data => {
        console.log(data);
        if (data.result) {
          localStorage.setItem('token', data.result);
          alert('로그인 성공');
          navigate('/main-heylynn');
        } else {
          alert('아이디 혹은 비밀번호를 확인 해 주세요.');
        }
      });
    // if (userId.includes('@') && userPw.length >= 5) {
    //   navigate('/main-heylynn');
    // } else {
    //   alert('회원 정보를 다시 입력해주세요.');
    // }
  };

  return (
    <main className="login">
      <div className="inner">
        <header className="header">
          <h1>Westagram</h1>
        </header>
        <form className="form">
          <div className="inputWrapper">
            <input
              onKeyUp={passLogin}
              onChange={getUserId}
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onKeyUp={passLogin}
              onChange={getUserPw}
              id="password"
              type="password"
              placeholder="비밀번호"
            />
          </div>
          <div className="buttonWrapper">
            <button
              type="button"
              className={active ? 'activeBtn' : 'btn'} // "btn"
              onClick={goToMain}
              disabled={userId && userPw ? false : true}
            >
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

export default Login;
