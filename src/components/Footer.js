import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      TinderCat - {currentYear}
    </div>
  );
}

export default Footer;
