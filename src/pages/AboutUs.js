import React from 'react';
import '../styles/pages/AboutUs.css';

const AboutUs = () => {
  return (
    <main className="about-us-page">
      <section className="about-header">
        <div className="container">
          <h1>About Aemiro Healthcare</h1>
          <p>Our mission, vision, and commitment to exceptional care</p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="section-title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          // ... mission, vision, and team content will be added here ...
        </div>
      </section>
    </main>
  );
};

export default AboutUs;