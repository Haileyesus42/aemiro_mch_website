import React from 'react';

const MaternalCare = () => {
  const services = [
    {
      title: "Prenatal Care",
      description: "Comprehensive care throughout your pregnancy with regular checkups, monitoring, and support.",
      icon: "🤰",
      details: [
        "Monthly checkups during first two trimesters",
        "Bi-weekly visits during third trimester",
        "Blood pressure and weight monitoring",
        "Fetal development tracking",
        "Nutritional counseling"
      ]
    },
    {
      title: "High-Risk Pregnancy Management",
      description: "Specialized care for pregnancies with increased risk factors.",
      icon: "⚠️",
      details: [
        "Enhanced monitoring protocols",
        "Specialist consultations",
        "Additional testing as needed",
        "Individualized care plans",
        "Coordination with subspecialists"
      ]
    },
    {
      title: "Pregnancy Nutrition Counseling",
      description: "Personalized dietary guidance for optimal maternal and fetal health.",
      icon: "🥗",
      details: [
        "Individualized meal planning",
        "Supplement recommendations",
        "Weight gain guidance",
        "Food safety education",
        "Management of gestational diabetes"
      ]
    },
    {
      title: "Labor Preparation Classes",
      description: "Classes to help you prepare for a positive birthing experience.",
      icon: "📚",
      details: [
        "Breathing and relaxation techniques",
        "Pain management options",
        "Birth plan development",
        "Partner participation strategies",
        "Postpartum preparation"
      ]
    }
  ];

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <main className="maternal-care-page">
        <section className="service-hero">
          <div className="container">
            <h1>Maternal Care Services</h1>
            <p>Comprehensive care for mothers throughout pregnancy, delivery, and postpartum</p>
          </div>
        </section>

        <section className="service-intro">
          <div className="container">
            <div className="intro-content">
              <div className="intro-text">
                <h2>Compassionate Care for Every Stage of Pregnancy</h2>
                <p>At Aimero Hospital, we understand that pregnancy is a unique and precious time in a woman's life. Our maternal care services provide comprehensive, personalized care from conception through postpartum recovery, ensuring the health and wellbeing of both mother and baby.</p>
                <p>Our team of experienced obstetricians, nurses, and support staff are dedicated to providing evidence-based care in a warm, supportive environment that respects your individual needs and preferences.</p>
              </div>
              <div className="intro-visual">
                <div className="service-icon">🤰</div>
              </div>
            </div>
          </div>
        </section>

        <section className="care-services">
          <div className="container">
            <h2>Our Maternal Care Services</h2>
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon-large">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-details">
                    {service.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <a href="#" className="btn-service" onClick={handleClick}>Learn More</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="care-team">
          <div className="container">
            <h2>Meet Our Maternal Care Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Dr. Hana Tesfaye" />
                </div>
                <div className="team-info">
                  <h3>Dr. Hana Tesfaye</h3>
                  <p className="team-role">Lead Obstetrician & Gynecologist</p>
                  <p>12+ years of experience in maternal care with specialization in high-risk pregnancies.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Dr. Elias Alemu" />
                </div>
                <div className="team-info">
                  <h3>Dr. Elias Alemu</h3>
                  <p className="team-role">Maternal-Fetal Medicine Specialist</p>
                  <p>Expert in managing complex pregnancies and fetal medicine procedures.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Certified Nurse" />
                </div>
                <div className="team-info">
                  <h3>Almaz Tadesse</h3>
                  <p className="team-role">Certified Nurse Midwife</p>
                  <p>Specializes in natural birthing and postpartum care support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="care-process">
          <div className="container">
            <h2>What to Expect During Your Care</h2>
            <div className="process-steps">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Initial Consultation</h3>
                  <p>Comprehensive evaluation including medical history, physical exam, and initial tests to establish your baseline health status.</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Personalized Care Plan</h3>
                  <p>Development of an individualized care plan based on your health status, risk factors, and personal preferences.</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Ongoing Monitoring</h3>
                  <p>Regular checkups to monitor maternal and fetal health, with increased frequency as you approach your due date.</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Delivery Planning</h3>
                  <p>Collaborative planning for your delivery experience, including discussing preferences and addressing any concerns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="care-resources">
          <div className="container">
            <h2>Maternal Care Resources</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">📖</div>
                <h3>Pregnancy Guide</h3>
                <p>Comprehensive guide covering each trimester of pregnancy and what to expect.</p>
                <a href="#" className="resource-link" onClick={handleClick}>Download Guide</a>
              </div>
              
              <div className="resource-card">
                <div className="resource-icon">📋</div>
                <h3>Checkup Schedule</h3>
                <p>Recommended schedule for prenatal visits and important milestones.</p>
                <a href="#" className="resource-link" onClick={handleClick}>View Schedule</a>
              </div>
              
              <div className="resource-card">
                <div className="resource-icon">📱</div>
                <h3>Mobile App</h3>
                <p>Track your pregnancy, appointments, and important health metrics.</p>
                <a href="#" className="resource-link" onClick={handleClick}>Download App</a>
              </div>
            </div>
          </div>
        </section>

        <section className="care-testimonials">
          <div className="container">
            <h2>What Mothers Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"The care I received at Aimero was exceptional. My doctor took time to answer all my questions and made me feel confident throughout my pregnancy."</p>
                </div>
                <div className="testimonial-author">
                  <p>— Selam A.</p>
                  <p>First-time mother</p>
                </div>
              </div>
              
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <p>"As someone with a high-risk pregnancy, I appreciated the extra attention and monitoring. The team made me feel safe and well-cared for."</p>
                </div>
                <div className="testimonial-author">
                  <p>— Almaz T.</p>
                  <p>Mother of twins</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="care-cta">
          <div className="container">
            <div className="cta-card">
              <h2>Begin Your Maternal Care Journey</h2>
              <p>Schedule your initial consultation to start receiving personalized care for you and your baby.</p>
              <div className="cta-buttons">
                <a href="/appointment-booking" className="btn-service" onClick={handleClick}>Book Consultation</a>
                <a href="/contact" className="btn-service-outline" onClick={handleClick}>Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default MaternalCare;