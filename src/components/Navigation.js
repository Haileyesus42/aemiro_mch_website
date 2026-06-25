import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

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
          <li>
            <Link to="/" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services">
              Services
            </Link>
          </li>
          <li><a href="/doctors">Doctors</a></li>
          <li>
            <Link to="/services#maternal-care">
              Pregnancy Care
            </Link>
          </li>
          <li>
            <Link to="/services#child-health">
              Child Health
            </Link>
          </li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
        <Link to="/appointment" className="btn-nav">Book Appointment</Link>
      </div>
    </nav>
  );
};

export default Navigation;