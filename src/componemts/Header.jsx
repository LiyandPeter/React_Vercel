import React from 'react';
import NavLink from './AuthContainer';

function Header() {
  return (
    <header>
      <div className="logo">
        <h1>棠吉訶德</h1>
      </div>
      <nav className="nav-links">
        <NavLink href="index.html" src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/home.png?raw=true" alt="Home Icon" text="主頁" />
        <NavLink href="Spring.hmtl.html" src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/ecology.png?raw=true" alt="Spring Icon" text="春季" />
        <NavLink href="Summer.html" src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/sun.png?raw=true" alt="Summer Icon" text="夏季" />
        <NavLink href="Autumn.html" src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/leaf.png?raw=true" alt="Autumn Icon" text="秋季" />
        <NavLink href="Winter.html" src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/snowflake.png?raw=true" alt="Winter Icon" text="冬季" />
        <NavLink href="LogIn.html" src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/person_man.png?raw=true" alt="Login Icon" text="登錄" />
      </nav>
      <nav className="header-nav">
        <NavLink href="page2.html" src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/search.png?raw=true" alt="圖示" text="搜尋" />
        <NavLink href="#" src="https://github.com/LiyandPeter/Private_Website/blob/main/Images/icon/%E5%9C%96%E7%A4%BA%E5%90%8D%E7%A8%B1.png?raw=true" alt="圖示" text="語言" />
      </nav>
    </header>
  );
}

export default Header;