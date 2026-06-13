import React from 'react';

const Hero = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <span className="hero-badge">Welcome to Aimero</span>
          <h1>Safe Motherhood.<br /><span className="accent">Healthy Babies.</span><br />Stronger Families.</h1>
          <p>Aimero Maternal &amp; Child Birth Hospital provides comprehensive maternal, newborn, and pediatric healthcare services with compassionate specialists and modern medical facilities.</p>
          <div className="hero-btns">
            <a href="#" className="btn-primary" onClick={handleClick}>📅 Book Appointment</a>
            <a href="#" className="btn-emergency" onClick={handleClick}>📞 Emergency Care</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-img-frame" style={{ backgroundImage: 'url(/mother_background.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'transparent' }}>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;