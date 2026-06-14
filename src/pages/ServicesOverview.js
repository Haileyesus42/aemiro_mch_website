import React from 'react';

const ServicesOverview = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <main className="services-overview-page">
        <section className="services-hero">
          <div className="container">
            <h1>Our Comprehensive Services</h1>
            <p>Providing complete healthcare solutions for women, newborns, and children</p>
          </div>
        </section>

        <section className="services-categories">
          <div className="container">
            <div className="services-grid">
              <div className="service-category-card">
                <div className="service-icon">🤰</div>
                <h3>Maternal Care</h3>
                <p>Complete prenatal, antenatal, and postnatal care with personalized attention</p>
                <ul className="service-list">
                  <li>Antenatal Care (ANC)</li>
                  <li>Pregnancy Monitoring</li>
                  <li>High-Risk Management</li>
                  <li>Nutrition Counseling</li>
                  <li>Labor & Delivery Preparation</li>
                </ul>
                <a href="/maternal-care" className="btn-service" onClick={handleClick}>Learn More</a>
              </div>

              <div className="service-category-card">
                <div className="service-icon">🏥</div>
                <h3>Delivery Services</h3>
                <p>Safe and supportive delivery options for every family's needs</p>
                <ul className="service-list">
                  <li>Normal Delivery</li>
                  <li>Cesarean Section</li>
                  <li>Labor Monitoring</li>
                  <li>Emergency Obstetric Care</li>
                  <li>Pain Management Options</li>
                </ul>
                <a href="/delivery-services" className="btn-service" onClick={handleClick}>Learn More</a>
              </div>

              <div className="service-category-card">
                <div className="service-icon">👶</div>
                <h3>Newborn Care</h3>
                <p>Specialized care for infants from birth through early development</p>
                <ul className="service-list">
                  <li>Neonatal Intensive Care</li>
                  <li>Newborn Screening</li>
                  <li>Jaundice Treatment</li>
                  <li>Breastfeeding Support</li>
                  <li>Vaccination Programs</li>
                </ul>
                <a href="/newborn-care" className="btn-service" onClick={handleClick}>Learn More</a>
              </div>

              <div className="service-category-card">
                <div className="service-icon">🧒</div>
                <h3>Child Healthcare</h3>
                <p>Comprehensive care for children from infancy through adolescence</p>
                <ul className="service-list">
                  <li>Vaccinations</li>
                  <li>Growth Monitoring</li>
                  <li>Pediatric Consultation</li>
                  <li>Child Nutrition Services</li>
                  <li>Developmental Assessments</li>
                </ul>
                <a href="/child-health" className="btn-service" onClick={handleClick}>Learn More</a>
              </div>

              <div className="service-category-card">
                <div className="service-icon">💊</div>
                <h3>Women's Health</h3>
                <p>Specialized gynecological and reproductive health services</p>
                <ul className="service-list">
                  <li>Gynecology Services</li>
                  <li>Family Planning</li>
                  <li>Reproductive Health</li>
                  <li>Health Screenings</li>
                  <li>Menopause Management</li>
                </ul>
                <a href="/womens-health" className="btn-service" onClick={handleClick}>Learn More</a>
              </div>

              <div className="service-category-card">
                <div className="service-icon">🩺</div>
                <h3>Diagnostic Services</h3>
                <p>Advanced diagnostic tools for accurate and timely assessments</p>
                <ul className="service-list">
                  <li>Ultrasound Imaging</li>
                  <li>Lab Tests</li>
                  <li>X-Ray Services</li>
                  <li>ECG Services</li>
                  <li>Consultation Services</li>
                </ul>
                <a href="#" className="btn-service" onClick={handleClick}>Learn More</a>
              </div>
            </div>
          </div>
        </section>

        <section className="service-packages">
          <div className="container">
            <h2>Our Service Packages</h2>
            <div className="packages-grid">
              <div className="package-card">
                <h3>Essential Pregnancy Package</h3>
                <p className="package-price">ETB 45,000</p>
                <ul>
                  <li>10 Antenatal Visits</li>
                  <li>3 Ultrasounds</li>
                  <li>Labor & Delivery</li>
                  <li>Postnatal Care (2 visits)</li>
                  <li>Newborn Care (1 visit)</li>
                </ul>
                <a href="#" className="btn-service" onClick={handleClick}>Select Package</a>
              </div>

              <div className="package-card featured">
                <h3>Premium Pregnancy Package</h3>
                <p className="package-price">ETB 85,000</p>
                <ul>
                  <li>Unlimited Antenatal Visits</li>
                  <li>4 Ultrasounds</li>
                  <li>Private Delivery Room</li>
                  <li>Postnatal Care (5 visits)</li>
                  <li>Newborn Care (3 visits)</li>
                  <li>Nutrition Counseling</li>
                </ul>
                <a href="#" className="btn-service btn-service-primary" onClick={handleClick}>Select Package</a>
              </div>

              <div className="package-card">
                <h3>Newborn Care Package</h3>
                <p className="package-price">ETB 25,000</p>
                <ul>
                  <li>Newborn Screening</li>
                  <li>Jaundice Assessment</li>
                  <li>Vaccinations</li>
                  <li>Feeding Support</li>
                  <li>Well-Baby Visits (3)</li>
                </ul>
                <a href="#" className="btn-service" onClick={handleClick}>Select Package</a>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default ServicesOverview;