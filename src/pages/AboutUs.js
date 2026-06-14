import React from 'react';

const AboutUs = () => {
  return (
    <main className="about-us-page">
        <section className="about-hero">
          <div className="container">
            <h1>About Aimero Hospital</h1>
            <p>Dedicated to providing exceptional maternal and child healthcare services since 2020</p>
          </div>
        </section>

        <section className="about-mission">
          <div className="container">
            <div className="row">
              <div className="col">
                <h2>Our Mission</h2>
                <p>At Aimero Hospital, we are committed to providing comprehensive, compassionate, and high-quality healthcare for women, newborns, and children. Our mission is to support families through every stage of the maternal and child health journey with evidence-based care and innovative practices.</p>
              </div>
              <div className="col">
                <h2>Our Vision</h2>
                <p>To be the leading maternal and child healthcare provider in Ethiopia, recognized for excellence in clinical outcomes, patient satisfaction, and community impact. We envision a future where every mother and child receives the highest standard of care regardless of their circumstances.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-facilities">
          <div className="container">
            <h2>Our Facilities</h2>
            <div className="facilities-grid">
              <div className="facility-card">
                <div className="facility-icon">🏥</div>
                <h3>Modern Delivery Suites</h3>
                <p>Equipped with the latest technology for safe and comfortable deliveries</p>
              </div>
              <div className="facility-card">
                <div className="facility-icon">👶</div>
                <h3>Neonatal ICU</h3>
                <p>Advanced care for premature and critically ill newborns</p>
              </div>
              <div className="facility-card">
                <div className="facility-icon">🌡️</div>
                <h3>Monitoring Systems</h3>
                <p>State-of-the-art equipment for continuous patient monitoring</p>
              </div>
              <div className="facility-card">
                <div className="facility-icon">🛡️</div>
                <h3>Infection Control</h3>
                <p>Strict protocols to ensure patient safety and hygiene</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-history">
          <div className="container">
            <h2>Our History</h2>
            <p>Founded in 2020, Aimero Hospital was established with a vision to address the critical need for specialized maternal and child healthcare services in Ethiopia. Our founders, a group of dedicated medical professionals and healthcare advocates, recognized the challenges faced by mothers and children in accessing quality healthcare.</p>
            
            <p>Starting with a modest team of 15 healthcare professionals, we have grown to become a trusted name in maternal and child health. Today, we serve thousands of families annually, with over 50 experienced doctors, nurses, and support staff.</p>
            
            <p>Over the years, we have expanded our services and facilities to meet growing demand while maintaining our commitment to excellence. Our achievements include receiving the National Excellence in Healthcare Award in 2022 and achieving a 98% patient satisfaction rate.</p>
          </div>
        </section>

        <section className="about-awards">
          <div className="container">
            <h2>Awards & Accreditations</h2>
            <div className="awards-grid">
              <div className="award-card">
                <div className="award-icon">🏆</div>
                <h3>National Excellence in Healthcare</h3>
                <p>2022</p>
              </div>
              <div className="award-card">
                <div className="award-icon">⭐</div>
                <h3>Best Maternal Care Facility</h3>
                <p>2021 Ethiopian Healthcare Awards</p>
              </div>
              <div className="award-card">
                <div className="award-icon">✅</div>
                <h3>JCI Accreditation</h3>
                <p>Joint Commission International Standards</p>
              </div>
              <div className="award-card">
                <div className="award-icon">🌱</div>
                <h3>Green Hospital Initiative</h3>
                <p>Environmental Leadership in Healthcare</p>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default AboutUs;