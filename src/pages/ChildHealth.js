import React from 'react';

const ChildHealth = () => {
  const healthServices = [
    {
      title: "Well-Child Visits",
      description: "Regular checkups to monitor growth and development.",
      icon: "📏",
      features: [
        "Growth monitoring",
        "Developmental assessments",
        "Immunizations",
        "Nutrition counseling"
      ]
    },
    {
      title: "Vaccination Program",
      description: "Comprehensive vaccination schedule for disease prevention.",
      icon: "💉",
      features: [
        "WHO-recommended vaccines",
        "Catch-up vaccinations",
        "Vaccine education",
        "International travel vaccines"
      ]
    },
    {
      title: "Pediatric Emergency Care",
      description: "Specialized emergency services for children.",
      icon: "🚨",
      features: [
        "Trained pediatric emergency staff",
        "Child-friendly environment",
        "Age-appropriate equipment",
        "Family-centered care"
      ]
    },
    {
      title: "Chronic Disease Management",
      description: "Ongoing care for children with chronic conditions.",
      icon: "🩺",
      features: [
        "Asthma management",
        "Diabetes care",
        "Epilepsy management",
        "Specialized care plans"
      ]
    }
  ];

  const ageGroups = [
    {
      title: "Infant Care (0-12 months)",
      description: "Specialized care for your baby's first year of life.",
      icon: "👶",
      milestones: [
        "Monthly checkups in first 6 months",
        "Developmental milestone assessments",
        "Immunization schedule",
        "Nutrition guidance"
      ]
    },
    {
      title: "Toddler Care (1-3 years)",
      description: "Supporting growth and development during rapid changes.",
      icon: "🏃",
      milestones: [
        "Growth monitoring",
        "Behavioral guidance",
        "Social development support",
        "Safety counseling"
      ]
    },
    {
      title: "School Age (4-12 years)",
      description: "Promoting healthy habits and preventing illness.",
      icon: "🎒",
      milestones: [
        "Annual physical exams",
        "Academic performance support",
        "Social and emotional health",
        "Preventive care"
      ]
    },
    {
      title: "Adolescent Care (13-18 years)",
      description: "Addressing unique health needs during puberty.",
      icon: "👩‍👦",
      milestones: [
        "Confidential healthcare services",
        "Mental health support",
        "Risk behavior counseling",
        "Transition to adult care"
      ]
    }
  ];

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <main className="child-health-page">
        <section className="service-hero">
          <div className="container">
            <h1>Child Health Services</h1>
            <p>Comprehensive healthcare for children from infancy through adolescence</p>
          </div>
        </section>

        <section className="health-intro">
          <div className="container">
            <div className="intro-content">
              <div className="intro-text">
                <h2>Supporting Healthy Growth and Development</h2>
                <p>At Aimero Hospital, our pediatric team is dedicated to providing exceptional healthcare for children of all ages. We understand that children are not just small adults - they have unique healthcare needs that require specialized knowledge and a compassionate approach.</p>
                <p>Our child health services encompass preventive care, acute illness management, and chronic disease support, all delivered in a child-friendly environment that helps reduce anxiety and promote healing.</p>
              </div>
              <div className="intro-visual">
                <div className="service-icon">🧒</div>
              </div>
            </div>
          </div>
        </section>

        <section className="health-services">
          <div className="container">
            <h2>Our Child Health Services</h2>
            <div className="services-grid">
              {healthServices.map((service, index) => (
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

        <section className="age-groups">
          <div className="container">
            <h2>Age-Specific Care</h2>
            <div className="groups-grid">
              {ageGroups.map((group, index) => (
                <div key={index} className="group-card">
                  <div className="group-icon">{group.icon}</div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                  <ul className="milestones">
                    {group.milestones.map((milestone, idx) => (
                      <li key={idx}>{milestone}</li>
                    ))}
                  </ul>
                  <a href="#" className="btn-service" onClick={handleClick}>Learn More</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="health-team">
          <div className="container">
            <h2>Our Pediatric Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Dr. Samuel Bekele" />
                </div>
                <div className="team-info">
                  <h3>Dr. Samuel Bekele</h3>
                  <p className="team-role">Chief of Pediatrics</p>
                  <p>Board-certified pediatrician with 10 years of experience in child health and development.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Dr. Aster Woldemariam" />
                </div>
                <div className="team-info">
                  <h3>Dr. Aster Woldemariam</h3>
                  <p className="team-role">Pediatric Cardiologist</p>
                  <p>Specialist in diagnosing and treating heart conditions in children.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Certified Pediatric Nurse" />
                </div>
                <div className="team-info">
                  <h3>Liya Asfaw</h3>
                  <p className="team-role">Pediatric Nurse Practitioner</p>
                  <p>Specializes in well-child care and chronic disease management.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="vaccination-info">
          <div className="container">
            <div className="vaccination-content">
              <div className="vaccination-text">
                <h2>Child Immunization Program</h2>
                <p>Our comprehensive vaccination program follows WHO and national guidelines to protect children from serious diseases. We provide education to parents about the importance of immunizations and address any concerns.</p>
                
                <h3>Essential Childhood Vaccines</h3>
                <ul>
                  <li>BCG (Tuberculosis)</li>
                  <li>Polio (IPV and OPV)</li>
                  <li>DPT (Diphtheria, Pertussis, Tetanus)</li>
                  <li>Hepatitis B</li>
                  <li>Hib (Haemophilus influenzae type b)</li>
                  <li>Measles</li>
                  <li>Yellow Fever</li>
                  <li>Pneumococcal Conjugate Vaccine</li>
                </ul>
                
                <h3>Vaccination Schedule</h3>
                <p>We follow the national immunization schedule while also providing catch-up vaccinations for children who may have missed doses. Our team ensures that your child receives all recommended vaccines at the appropriate ages.</p>
              </div>
              
              <div className="vaccination-image">
                <div className="hospital-img">
                  <img src="/mother_background.png" alt="Child Vaccination" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="development-monitoring">
          <div className="container">
            <h2>Child Development Monitoring</h2>
            <div className="monitoring-grid">
              <div className="monitoring-card">
                <div className="monitoring-icon">📏</div>
                <h3>Growth Tracking</h3>
                <p>Regular measurements of height, weight, and head circumference plotted on standardized growth charts.</p>
              </div>
              
              <div className="monitoring-card">
                <div className="monitoring-icon">🧠</div>
                <h3>Developmental Screening</h3>
                <p>Assessment of cognitive, motor, and social development milestones at each visit.</p>
              </div>
              
              <div className="monitoring-card">
                <div className="monitoring-icon">👀</div>
                <h3>Early Intervention</h3>
                <p>Identification of potential delays and referral to specialists when needed.</p>
              </div>
              
              <div className="monitoring-card">
                <div className="monitoring-icon">📋</div>
                <h3>Comprehensive Records</h3>
                <p>Maintenance of complete health records accessible to parents and authorized providers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="health-education">
          <div className="container">
            <h2>Parent Education & Support</h2>
            <div className="education-content">
              <div className="education-text">
                <h3>Common Child Health Topics</h3>
                <ul>
                  <li>Febrile illnesses and fever management</li>
                  <li>Respiratory infections and asthma</li>
                  <li>Gastrointestinal issues</li>
                  <li>Behavioral and developmental concerns</li>
                  <li>Nutrition and feeding</li>
                  <li>Safety and injury prevention</li>
                  <li>Mental health and emotional development</li>
                </ul>
                
                <h3>Emergency Preparedness</h3>
                <p>Knowing when to seek immediate medical attention is crucial for child safety. Contact emergency services if your child:</p>
                <ul>
                  <li>Has difficulty breathing or stops breathing</li>
                  <li>Has a seizure</li>
                  <li>Has severe persistent vomiting or diarrhea</li>
                  <li>Shows signs of severe dehydration</li>
                  <li>Has a high fever with a rash</li>
                  <li>Suffers a serious injury</li>
                </ul>
              </div>
              
              <div className="education-image">
                <div className="hospital-img">
                  <img src="/building.jpg" alt="Child Health Education" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="health-resources">
          <div className="container">
            <h2>Child Health Resources</h2>
            <div className="resources-grid">
              <div className="resource-card">
                <div className="resource-icon">📱</div>
                <h3>Child Health Tracker</h3>
                <p>Mobile app to track growth, vaccinations, and appointments.</p>
                <a href="#" className="resource-link" onClick={handleClick}>Download App</a>
              </div>
              
              <div className="resource-card">
                <div className="resource-icon">📖</div>
                <h3>Parent Guide</h3>
                <p>Comprehensive guide to child health, development, and safety.</p>
                <a href="#" className="resource-link" onClick={handleClick}>Download Guide</a>
              </div>
              
              <div className="resource-card">
                <div className="resource-icon">💬</div>
                <h3>Parent Support Group</h3>
                <p>Connect with other parents in our monthly support group meetings.</p>
                <a href="#" className="resource-link" onClick={handleClick}>Join Group</a>
              </div>
            </div>
          </div>
        </section>

        <section className="health-cta">
          <div className="container">
            <div className="cta-card">
              <h2>Start Your Child's Health Journey</h2>
              <p>Schedule your child's first visit with our pediatric team.</p>
              <div className="cta-buttons">
                <a href="/appointment-booking" className="btn-service" onClick={handleClick}>Book Appointment</a>
                <a href="/contact" className="btn-service-outline" onClick={handleClick}>Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
};

export default ChildHealth;