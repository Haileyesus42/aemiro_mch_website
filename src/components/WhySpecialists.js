import React from 'react';

const WhySpecialists = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <div className="why-specialists">
      <div className="why-specialists-inner">
        {/* Why Aimero */}
        <div className="why-card">
          <div>
            <h2>Why Choose Aimero?</h2>
            <div className="why-features">
              <div className="why-feature"><span className="check">✓</span> 24/7 Emergency Services</div>
              <div className="why-feature"><span className="check">✓</span> Personalized Care</div>
              <div className="why-feature"><span className="check">✓</span> Experienced Specialists</div>
              <div className="why-feature"><span className="check">✓</span> Family-Centered Approach</div>
              <div className="why-feature"><span className="check">✓</span> Modern Medical Equipment</div>
              <div className="why-feature"><span className="check">✓</span> Affordable Services</div>
              <div className="why-feature"><span className="check">✓</span> Safe Delivery Facilities</div>
              <div className="why-feature"><span className="check">✓</span> Compassionate Care Team</div>
            </div>
          </div>
          <div style={{ fontSize: '5rem', textAlign: 'right', opacity: '0.25', marginTop: '20px' }}>👩‍⚕️</div>
        </div>
        {/* Specialists */}
        <div className="specialists-panel">
          <h2>Meet Our Specialists</h2>
          <div className="underline"></div>
          <div className="doctors-grid">
            <div className="doctor-card">
              <div className="doctor-avatar f">👩‍⚕️</div>
              <div className="doctor-name">Dr. Hana Tesfaye</div>
              <div className="doctor-spec">Obstetrician &amp; Gynecologist</div>
            </div>
            <div className="doctor-card">
              <div className="doctor-avatar m">👨‍⚕️</div>
              <div className="doctor-name">Dr. Samuel Bekele</div>
              <div className="doctor-spec">Pediatric Specialist</div>
            </div>
            <div className="doctor-card">
              <div className="doctor-avatar f">
                <img src="/doctor.png" alt="Dr. Meron Desta" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <div className="doctor-name">Dr. Meron Desta</div>
              <div className="doctor-spec">Neonatal Care Specialist</div>
            </div>
            <div className="doctor-card">
              <div className="doctor-avatar m">
                <img src="/doctor.png" alt="Dr. Elias Alemu" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
              </div>
              <div className="doctor-name">Dr. Elias Alemu</div>
              <div className="doctor-spec">Maternal-Fetal Medicine Specialist</div>
            </div>
          </div>
          <a href="#" className="btn-view-all" onClick={handleClick}>View All Doctors</a>
        </div>
      </div>
    </div>
  );
};

export default WhySpecialists;