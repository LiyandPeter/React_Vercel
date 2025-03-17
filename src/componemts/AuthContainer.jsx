import React from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

function AuthContainer() {
  return (
    <div className="auth-container">
      <div className="login-section">
        <h2>登錄</h2>
        <LoginForm />
      </div>
      <div className="register-section">
        <h2>註冊帳號</h2>
        <RegisterForm />
      </div>
    </div>
  );
}

export default AuthContainer;