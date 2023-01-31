import React from 'react';
import LoginForm from './LoginForm';
import './Login.scss';

const Login = () => {
  return (
    <section className="login">
      <div className="loginLayout">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
