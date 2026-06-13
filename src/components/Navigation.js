import React from 'react';

const Navigation = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Handle navigation click functionality here if needed
  };

  return (
    <nav>
      <div className="nav-inner">
        <div className="logo">
          <div className="logo-icon">🤱</div>
          <div className="logo-text">
            <div className="name">AIMERO</div>
            <div className="sub">Maternal &amp; Child Birth Hospital</div>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#" className="active" onClick={handleClick}>Home</a></li>
          <li><a href="#" onClick={handleClick}>About Us</a></li>
          <li><a href="#" onClick={handleClick}>Services</a></li>
          <li><a href="#" onClick={handleClick}>Doctors</a></li>
          <li><a href="#" onClick={handleClick}>Pregnancy Care</a></li>
          <li><a href="#" onClick={handleClick}>Child Health</a></li>
          <li><a href="#" onClick={handleClick}>Contact</a></li>
        </ul>
        <a href="#" className="btn-nav" onClick={handleClick}>Book Appointment</a>
      </div>
    </nav>
  );
};

export default Navigation;