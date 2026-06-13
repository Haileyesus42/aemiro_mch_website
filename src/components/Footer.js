import React from 'react';

const Footer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <div className="icon">🤱</div>
            <div>
              <div className="name">AIMERO</div>
              <div style={{ fontSize: '0.6rem', opacity: '0.6', letterSpacing: '0.07em', textTransform: 'uppercase' }}>Maternal &amp; Child Birth Hospital</div>
            </div>
          </div>
          <p className="footer-about">Aimero Maternal &amp; Child Birth Hospital is dedicated to providing quality healthcare for women, newborns, and children. Your health and well-being are our priority.</p>
          <div className="hospital-img">
            <img src="/building.jpg" alt="Hospital Building" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#" onClick={handleClick}>Home</a></li>
            <li><a href="#" onClick={handleClick}>About Us</a></li>
            <li><a href="#" onClick={handleClick}>Services</a></li>
            <li><a href="#" onClick={handleClick}>Doctors</a></li>
            <li><a href="#" onClick={handleClick}>Pregnancy Care</a></li>
            <li><a href="#" onClick={handleClick}>Child Health</a></li>
            <li><a href="#" onClick={handleClick}>Appointments</a></li>
            <li><a href="#" onClick={handleClick}>Blog</a></li>
            <li><a href="#" onClick={handleClick}>Contact Us</a></li>
            <li><a href="#" onClick={handleClick}>Privacy Policy</a></li>
          </ul>
        </div>
        <div>
          <h4>Our Services</h4>
          <ul>
            <li><a href="#" onClick={handleClick}>Maternal Care</a></li>
            <li><a href="#" onClick={handleClick}>Delivery Services</a></li>
            <li><a href="#" onClick={handleClick}>Newborn Care</a></li>
            <li><a href="#" onClick={handleClick}>Child Healthcare</a></li>
            <li><a href="#" onClick={handleClick}>Women's Health</a></li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <div className="contact-item">📍 Bole Road, Aimero, Addis Ababa, Ethiopia</div>
          <div className="contact-item">📞 +251 911 123 456</div>
          <div className="contact-item">✉️ info@aimerohospital.com</div>
          <div className="contact-item">🕐 24/7 Emergency Service</div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Aimero Maternal &amp; Child Birth Hospital. All Rights Reserved.</p>
        <div className="footer-social">
          <a href="#" onClick={handleClick}>f</a>
          <a href="#" onClick={handleClick}>✈</a>
          <a href="#" onClick={handleClick}>📷</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;