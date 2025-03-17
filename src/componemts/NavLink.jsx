import React from 'react';

function NavLink({ href, src, alt, text }) {
  return (
    <a href={href} className="nav-item">
      <img src={src} alt={alt} />
      <span>{text}</span>
    </a>
  );
}

export default NavLink;