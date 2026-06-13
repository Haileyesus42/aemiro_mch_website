import React from 'react';

const TopBar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">
          <span>🕐 24/7 Emergency Care</span>
          <span>📞 +251 911 123 456</span>
          <span>✉️ info@aimerohospital.com</span>
        </div>
        <div className="topbar-right">
          <a href="#" className="lang" onClick={handleClick}>English</a>
          <span className="lang-sep">|</span>
          <a href="#" onClick={handleClick}>አማርኛ</a>
          <div className="social-icons">
            <a href="#" onClick={handleClick}>f</a>
            <a href="#" onClick={handleClick}>✈</a>
            <a href="#" onClick={handleClick}>📷</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;