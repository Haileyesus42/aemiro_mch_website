import React from 'react';

const NewbornCare = () => {
  const careServices = [
    {
      title: "Neonatal Intensive Care",
      description: "Specialized care for premature and critically ill newborns.",
      icon: "👶",
      features: [
        "24/7 monitoring by neonatal specialists",
        "Advanced respiratory support",
        "Nutritional management",
        "Developmental care programs"
      ]
    },
    {
      title: "Well Baby Care",
      description: "Comprehensive care for healthy newborns in the first days of life.",
      icon: "🌟",
      features: [
        "Initial health assessments",
        "Feeding support and education",
        "Discharge planning",
        "Parent education programs"
      ]
    },
    {
      title: "Newborn Screening",
      description: "Early detection of genetic, metabolic, and hormonal conditions.",
      icon: "🔬",
      features: [
        "Heel prick blood test",
        "Hearing screening",
        "Heart defect screening",
        "Metabolic disorder detection"
      ]
    },
    {
      title: "Jaundice Treatment",
      description: "Phototherapy and monitoring for newborn jaundice.",
      icon: "☀️",
      features: [
        "Bilirubin level monitoring",
        "Phototherapy treatment",
        "Feeding optimization",
        "Follow-up care coordination"
      ]
    }
  ];

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <main className="newborn-care-page">
        <section className="service-hero">
          <div className="container">
            <h1>Newborn Care Services</h1>
            <p>Specialized care for your little ones from the first breath to healthy development</p>
          </div>
        </section>

        <section className="care-intro">
          <div className="container">
            <div className="intro-content">
              <div className="intro-text">
                <h2>Gentle Care for the Tiniest Patients</h2>
                <p>Welcome to our comprehensive newborn care services at Aimero Hospital. From the moment your baby takes their first breath, our specialized team of neonatologists, pediatric nurses, and support staff provide gentle, expert care tailored to your newborn's unique needs. We understand that the first days of life are precious, and we're honored to be part of your baby's journey.</p>
                <p>Our newborn care services encompass everything from immediate post-delivery care to specialized support for premature or medically complex infants, ensuring the healthiest start in life for every child.</p>
              </div>
              <div className="intro-visual">
                <div className="service-icon">👶</div>
              </div>
            </div>
          </div>
        </section>

        <section className="care-services">
          <div className="container">
            <h2>Our Newborn Care Services</h2>
            <div className="services-grid">
              {careServices.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon-large">{service.icon}</div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                  <a href="#" className="btn-service" onClick={handleClick}>Learn More</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="nicu-info">
          <div className="container">
            <div className="nicu-content">
              <div className="nicu-text">
                <h2>Neonatal Intensive Care Unit (NICU)</h2>
                <p>Our Level III NICU provides advanced care for premature and critically ill newborns. Equipped with state-of-the-art technology and staffed by board-certified neonatologists, our NICU offers:</p>
                <ul>
                  <li>Advanced ventilatory support</li>
                  <li>Continuous monitoring systems</li>
                  <li>Specialized nutritional support</li>
                  <li>Developmental care programs</li>
                  <li>Family-centered care approach</li>
                  <li>24/7 pharmacy and laboratory services</li>
                </ul>
                <p>Our NICU team includes neonatologists, pediatric residents, specially trained nurses, respiratory therapists, and social workers who work together to provide comprehensive care for your baby.</p>
              </div>
              <div className="nicu-image">
                <div className="hospital-img">
                  <img src="/building.jpg" alt="NICU" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="care-team">
          <div className="container">
            <h2>Our Newborn Care Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Dr. Meron Desta" />
                </div>
                <div className="team-info">
                  <h3>Dr. Meron Desta</h3>
                  <p className="team-role">Director of Neonatal Care</p>
                  <p>Board-certified neonatologist with 8 years of experience in neonatal intensive care.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Dr. Samuel Bekele" />
                </div>
                <div className="team-info">
                  <h3>Dr. Samuel Bekele</h3>
                  <p className="team-role">Pediatric Specialist</p>
                  <p>Expert in newborn care and pediatric emergency medicine.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Certified Nurse" />
                </div>
                <div className="team-info">
                  <h3>Almaz Kidane</h3>
                  <p className="team-role">Neonatal Nurse Specialist</p>
                  <p>Specializes in developmental care and family support in the NICU.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="care-protocols">
          <div className="container">
            <h2>Newborn Care Protocols</h2>
            <div className="protocols-grid">
              <div className="protocol-card">
                <div className="protocol-icon">🌡️</div>
                <h3>Temperature Regulation</h3>
                <p>Ensuring proper body temperature through appropriate warming measures and environmental controls.</p>
              </div>
              
              <div className="protocol-card">
                <div className="protocol-icon">🥛</div>
                <h3>Nutritional Support</h3>
                <p>Optimal feeding strategies including breastfeeding support and specialized formulas when needed.</p>
              </div>
              
              <div className="protocol-card">
                <div className="protocol-icon">💉</div>
                <h3>Immunizations</h3>
                <p>Timely vaccination schedule including Hepatitis B vaccine in the first 24 hours.</p>
              </div>
              
              <div className="protocol-card">
                <div className="protocol-icon">🩸</div>
                <h3>Screening Tests</h3>
                <p>Comprehensive newborn screening for genetic and metabolic disorders.</p>
              </div>
              
              <div className="protocol-card">
                <div className="protocol-icon">👂</div>
                <h3>Hearing Assessment</h3>
                <p>Early detection of hearing impairments for timely intervention.</p>
              </div>
              
              <div className="protocol-card">
                <div className="protocol-icon">❤️</div>
                <h3>Heart Screening</h3>
                <p>Critical congenital heart disease screening using pulse oximetry.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="parent-education">
          <div className="container">
            <h2>Parent Education & Support</h2>
            <div className="education-content">
              <div className="education-text">
                <h3>Essential Newborn Care Training</h3>
                <p>We provide comprehensive education to parents on caring for their newborn, including:</p>
                <ul>
                  <li>Feeding techniques (breast and bottle)</li>
                  <li>Diapering and bathing</li>
                  <li>Safe sleep practices</li>
                  <li>Recognizing signs of illness</li>
                  <li>Soother and comforting techniques</li>
                  <li>Immunization schedules</li>
                </ul>
                
                <h3>Discharge Planning</h3>
                <p>Our team works closely with families to ensure a smooth transition home with:</p>
                <ul>
                  <li>Follow-up appointment scheduling</li>
                  <li>Home care instructions</li>
                  <li>Emergency contact information</li>
                  <li>Referral to community resources</li>
                  <li>24/7 nurse helpline access</li>
                </ul>
              </div>
              
              <div className="education-image">
                <div className="hospital-img">
                  <img src="/mother_background.png" alt="Parent Education" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="care-resources">
          <div className="container">
            <h2>Resources for New Parents</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">📱</div>
                <h3>Newborn Care App</h3>
                <p>Track feeding, diapering, and sleep patterns with our specialized mobile app.</p>
                <a href="#" className="resource-link" onClick={handleClick}>Download App</a>
              </div>
              
              <div className="resource-card">
                <div className="resource-icon">📖</div>
                <h3>Parent Handbook</h3>
                <p>Comprehensive guide to newborn care, feeding, and development milestones.</p>
                <a href="#" className="resource-link" onClick={handleClick}>Download Guide</a>
              </div>
              
              <div className="resource-card">
                <div className="resource-icon">💬</div>
                <h3>Support Groups</h3>
                <p>Connect with other new parents in our monthly support group meetings.</p>
                <a href="#" className="resource-link" onClick={handleClick}>Join Group</a>
              </div>
            </div>
          </div>
        </section>

        <section className="care-cta">
          <div className="container">
            <div className="cta-card">
              <h2>Learn About Our Newborn Care</h2>
              <p>Discover how we provide exceptional care for your little one from their first moments.</p>
              <div className="cta-buttons">
                <a href="/appointment-booking" className="btn-service" onClick={handleClick}>Schedule Consultation</a>
                <a href="/contact" className="btn-service-outline" onClick={handleClick}>Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default NewbornCare;