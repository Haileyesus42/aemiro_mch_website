import React from 'react';

const Services = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <section className="services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <div className="underline"></div>
        </div>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon teal">🤰</div>
            <h3 className="teal">Maternal Care</h3>
            <ul>
              <li>Antenatal Care (ANC)</li>
              <li>Pregnancy Monitoring</li>
              <li>High-Risk Management</li>
              <li>Nutrition Counseling</li>
            </ul>
            <a href="#" className="btn-learn teal" onClick={handleClick}>Learn More</a>
          </div>
          <div className="service-card">
            <div className="service-icon pink">🏥</div>
            <h3 className="pink">Delivery Services</h3>
            <ul>
              <li>Normal Delivery</li>
              <li>Cesarean Section</li>
              <li>Labor Monitoring</li>
              <li>Emergency Obstetric Care</li>
            </ul>
            <a href="#" className="btn-learn pink" onClick={handleClick}>Learn More</a>
          </div>
          <div className="service-card">
            <div className="service-icon teal">👶</div>
            <h3 className="teal">Newborn Care</h3>
            <ul>
              <li>Neonatal Intensive Care</li>
              <li>Newborn Screening</li>
              <li>Jaundice Treatment</li>
              <li>Breastfeeding Support</li>
            </ul>
            <a href="#" className="btn-learn teal" onClick={handleClick}>Learn More</a>
          </div>
          <div className="service-card">
            <div className="service-icon pink">🧒</div>
            <h3 className="pink">Child Healthcare</h3>
            <ul>
              <li>Vaccinations</li>
              <li>Growth Monitoring</li>
              <li>Pediatric Consultation</li>
              <li>Child Nutrition Services</li>
            </ul>
            <a href="#" className="btn-learn pink" onClick={handleClick}>Learn More</a>
          </div>
          <div className="service-card">
            <div className="service-icon teal">💊</div>
            <h3 className="teal">Women's Health</h3>
            <ul>
              <li>Gynecology Services</li>
              <li>Family Planning</li>
              <li>Reproductive Health</li>
              <li>Health Screenings</li>
            </ul>
            <a href="#" className="btn-learn teal" onClick={handleClick}>Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;