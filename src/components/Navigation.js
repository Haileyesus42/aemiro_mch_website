import React, { useState } from 'react';

const Navigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const handleClick = (e) => {
    e.preventDefault();
    // Handle navigation click functionality here if needed
  };
  
  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };
  
  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleDropdown = (menuName) => {
    setActiveDropdown(activeDropdown === menuName ? null : menuName);
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
          <li 
            onMouseEnter={() => handleMouseEnter('home')}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown('home')}
            className={activeDropdown === 'home' ? 'dropdown-open' : ''}
          >
            <a href="#" className="active" onClick={handleClick}>
              Home
            </a>
            {activeDropdown === 'home' && (
              <ul className="dropdown-menu">
                <li><a href="#" onClick={handleClick}>Main Page</a></li>
                <li><a href="#" onClick={handleClick}>Welcome Message</a></li>
                <li><a href="#" onClick={handleClick}>Our Mission</a></li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => handleMouseEnter('about')}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown('about')}
            className={activeDropdown === 'about' ? 'dropdown-open' : ''}
          >
            <a href="#" onClick={handleClick}>
              About Us
            </a>
            {activeDropdown === 'about' && (
              <ul className="dropdown-menu">
                <li><a href="#" onClick={handleClick}>Our History</a></li>
                <li><a href="#" onClick={handleClick}>Our Team</a></li>
                <li><a href="#" onClick={handleClick}>Facilities</a></li>
                <li><a href="#" onClick={handleClick}>Accreditations</a></li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => handleMouseEnter('services')}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown('services')}
            className={activeDropdown === 'services' ? 'dropdown-open' : ''}
          >
            <a href="#" onClick={handleClick}>
              Services
            </a>
            {activeDropdown === 'services' && (
              <ul className="dropdown-menu">
                <li><a href="#" onClick={handleClick}>Maternal Care</a></li>
                <li><a href="#" onClick={handleClick}>Delivery Services</a></li>
                <li><a href="#" onClick={handleClick}>Newborn Care</a></li>
                <li><a href="#" onClick={handleClick}>Child Healthcare</a></li>
                <li><a href="#" onClick={handleClick}>Women's Health</a></li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => handleMouseEnter('doctors')}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown('doctors')}
            className={activeDropdown === 'doctors' ? 'dropdown-open' : ''}
          >
            <a href="#" onClick={handleClick}>
              Doctors
            </a>
            {activeDropdown === 'doctors' && (
              <ul className="dropdown-menu">
                <li><a href="#" onClick={handleClick}>Obstetricians</a></li>
                <li><a href="#" onClick={handleClick}>Pediatricians</a></li>
                <li><a href="#" onClick={handleClick}>Neonatologists</a></li>
                <li><a href="#" onClick={handleClick}>Midwives</a></li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => handleMouseEnter('pregnancy')}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown('pregnancy')}
            className={activeDropdown === 'pregnancy' ? 'dropdown-open' : ''}
          >
            <a href="#" onClick={handleClick}>
              Pregnancy Care
            </a>
            {activeDropdown === 'pregnancy' && (
              <ul className="dropdown-menu">
                <li><a href="#" onClick={handleClick}>First Trimester</a></li>
                <li><a href="#" onClick={handleClick}>Second Trimester</a></li>
                <li><a href="#" onClick={handleClick}>Third Trimester</a></li>
                <li><a href="#" onClick={handleClick}>Delivery Prep</a></li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => handleMouseEnter('child')}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown('child')}
            className={activeDropdown === 'child' ? 'dropdown-open' : ''}
          >
            <a href="#" onClick={handleClick}>
              Child Health
            </a>
            {activeDropdown === 'child' && (
              <ul className="dropdown-menu">
                <li><a href="#" onClick={handleClick}>Vaccinations</a></li>
                <li><a href="#" onClick={handleClick}>Growth Monitoring</a></li>
                <li><a href="#" onClick={handleClick}>Pediatric Consultation</a></li>
                <li><a href="#" onClick={handleClick}>Nutrition Guidance</a></li>
              </ul>
            )}
          </li>
          <li 
            onMouseEnter={() => handleMouseEnter('contact')}
            onMouseLeave={handleMouseLeave}
            onClick={() => toggleDropdown('contact')}
            className={activeDropdown === 'contact' ? 'dropdown-open' : ''}
          >
            <a href="#" onClick={handleClick}>
              Contact
            </a>
            {activeDropdown === 'contact' && (
              <ul className="dropdown-menu">
                <li><a href="#" onClick={handleClick}>Hospital Location</a></li>
                <li><a href="#" onClick={handleClick}>Emergency Numbers</a></li>
                <li><a href="#" onClick={handleClick}>General Inquiry</a></li>
                <li><a href="#" onClick={handleClick}>Feedback</a></li>
              </ul>
            )}
          </li>
        </ul>
        <a href="#" className="btn-nav" onClick={handleClick}>Book Appointment</a>
      </div>
    </nav>
  );
};

export default Navigation;