import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function ResponsiveNavLinkModified({ href, active, as, children }) {
  const location = useLocation();
  let isActive = false;

  // Check if the current pathname matches the 'href' prop
  if (as === "button") {
    // If the link is a button, check if the location.pathname starts with the 'href' prop
    isActive = location.pathname.startsWith(href);
  } else {
    // Otherwise, check if the current pathname matches the 'href' prop
    isActive = location.pathname === href;
  }

  if (as === "button") {
    return (
      <button className={isActive ? 'active' : ''} onClick={() => window.location.href = href}>
        {children}
      </button>
    );
  }

  return (
    <Link to={href} className={isActive ? 'active' : ''}>
      {children}
    </Link>
  );
}

export default ResponsiveNavLinkModified;
