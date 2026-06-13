import React from 'react';

const InfoGrid = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    // In a real app, this would initiate a phone call
    window.location.href = 'tel:+251911123456';
  };

  return (
    <div className="info-grid-section">
      <div className="info-grid">
        {/* Testimonials */}
        <div className="info-panel">
          <h3>💬 Patient Testimonials</h3>
          <div className="testimonial-text">
            <span className="quote-icon">"</span>
            The doctors and nurses provided excellent care throughout my pregnancy. I felt safe and well-supported at every step.
          </div>
          <div className="stars">★★★★★</div>
          <div className="author">— Mother of Newborn</div>
        </div>
        {/* Health Education */}
        <div className="info-panel">
          <h3>📖 Health Education</h3>
          <ul className="edu-list">
            <li>Signs of a Healthy Pregnancy</li>
            <li>Breastfeeding Tips for New Mothers</li>
            <li>Childhood Vaccination Schedule</li>
            <li>Nutrition During Pregnancy</li>
            <li>Newborn Care Essentials</li>
          </ul>
          <a href="#" className="btn-read-more" onClick={handleClick}>Read More Articles</a>
        </div>
        {/* Book Appointment */}
        <div className="info-panel">
          <h3>📅 Book Appointment</h3>
          <p className="appointment-text">Schedule your appointment online and get the best care for you and your baby. Our team is ready to assist you.</p>
          <a href="#" className="btn-book-now" onClick={handleClick}>Book Now</a>
        </div>
        {/* Emergency */}
        <div className="info-panel emergency">
          <div className="title">24/7 Emergency Care</div>
          <div style={{ fontSize: '2rem' }}>📞</div>
          <div className="phone">+251 911 123 456</div>
          <div className="ambulance">🚑 Ambulance Available</div>
          <a href="tel:+251911123456" className="btn-call" onClick={handlePhoneClick}>Call Now</a>
        </div>
      </div>
    </div>
  );
};

export default InfoGrid;