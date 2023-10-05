import React from 'react';
import { useLocation } from 'react-router-dom';

function NavLinkModified({ href, active, children }) {
  const location = useLocation();

  const isActive = location.pathname === active;

  return (
    <a href={href} className={isActive ? 'active' : ''}>
      {children}
    </a>
  );
}

export default NavLinkModified;
