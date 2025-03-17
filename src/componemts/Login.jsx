import React from 'react';

function LoginForm() {
  return (
    <form action="#" method="post">
      <label htmlFor="login-email">電子郵件</label>
      <input
        type="email"
        id="login-email"
        name="login-email"
        placeholder="輸入電子郵件"
        required
      />
      <label htmlFor="login-password">密碼</label>
      <input
        type="password"
        id="login-password"
        name="login-password"
        placeholder="輸入密碼"
        required
      />
      <button type="submit">登錄</button>
    </form>
  );
}

export default LoginForm;