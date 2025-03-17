import React from 'react';

function RegisterForm() {
  return (
    <form action="#" method="post">
      <label htmlFor="register-email">電子郵件</label>
      <input
        type="email"
        id="register-email"
        name="register-email"
        placeholder="輸入電子郵件"
        required
      />
      <label htmlFor="register-password">密碼</label>
      <input
        type="password"
        id="register-password"
        name="register-password"
        placeholder="設定密碼"
        required
      />
      <label htmlFor="register-confirm-password">確認密碼</label>
      <input
        type="password"
        id="register-confirm-password"
        name="register-confirm-password"
        placeholder="再次輸入密碼"
        required
      />
      <button type="submit">註冊</button>
    </form>
  );
}

export default RegisterForm;