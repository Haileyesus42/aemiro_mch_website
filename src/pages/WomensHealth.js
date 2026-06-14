import React from 'react';

const WomensHealth = () => {
  const healthServices = [
    {
      title: "Gynecological Care",
      description: "Comprehensive reproductive health services for women of all ages.",
      icon: "♀️",
      features: [
        "Annual wellness exams",
        "Pap smears and HPV testing",
        "Contraceptive counseling",
        "Treatment for gynecological conditions"
      ]
    },
    {
      title: "Family Planning",
      description: "Contraceptive options and fertility planning services.",
      icon: "👶",
      features: [
        "Birth control counseling",
        "Long-term contraceptive options",
        "Fertility awareness methods",
        "Preconception planning"
      ]
    },
    {
      title: "Menopause Management",
      description: "Specialized care for women transitioning through menopause.",
      icon: "🔄",
      features: [
        "Hormone replacement therapy",
        "Symptom management",
        "Bone health assessment",
        "Cardiovascular risk reduction"
      ]
    },
    {
      title: "Breast Health",
      description: "Screening and care for breast health maintenance.",
      icon: "🎗️",
      features: [
        "Clinical breast exams",
        "Mammography referrals",
        "Breast health education",
        "Risk assessment"
      ]
    }
  ];

  const lifeStages = [
    {
      title: "Adolescent Health (13-19 years)",
      description: "Establishing healthy habits and addressing unique adolescent concerns.",
      icon: "👧",
      focusAreas: [
        "Puberty and menstrual health",
        "Sexual health education",
        "Contraception counseling",
        "Preventive care and vaccinations"
      ]
    },
    {
      title: "Reproductive Years (20-39 years)",
      description: "Optimizing health during peak reproductive years.",
      icon: "👩",
      focusAreas: [
        "Family planning services",
        "Preconception care",
        "Gynecological health maintenance",
        "Sexually transmitted infection prevention"
      ]
    },
    {
      title: "Perimenopause (40-55 years)",
      description: "Managing changes as women approach menopause.",
      icon: "🔄",
      focusAreas: [
        "Hormonal changes monitoring",
        "Bone density screening",
        "Cardiovascular health",
        "Mental health support"
      ]
    },
    {
      title: "Postmenopause (55+ years)",
      description: "Maintaining health and preventing age-related conditions.",
      icon: "👵",
      focusAreas: [
        "Osteoporosis prevention",
        "Cardiovascular health",
        "Cancer screening",
        "Hormone therapy management"
      ]
    }
  ];

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <div className="page-container">
      <main className="womens-health-page">
        <section className="service-hero">
          <div className="container">
            <h1>Women's Health Services</h1>
            <p>Comprehensive care for women throughout all stages of life</p>
          </div>
        </section>

        <section className="health-intro">
          <div className="container">
            <div className="intro-content">
              <div className="intro-text">
                <h2>Empowering Women Through Comprehensive Healthcare</h2>
                <p>At Aimero Hospital, our women's health services are designed to support women throughout every stage of their lives. Our team of gynecologists, nurse practitioners, and healthcare professionals provide personalized, compassionate care that addresses the unique health needs of women at each life stage.</p>
                <p>We believe in empowering women with knowledge and options, offering evidence-based care in a respectful and confidential environment.</p>
              </div>
              <div className="intro-visual">
                <div className="service-icon">♀️</div>
              </div>
            </div>
          </div>
        </section>

        <section className="health-services">
          <div className="container">
            <h2>Our Women's Health Services</h2>
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

        <section className="life-stages">
          <div className="container">
            <h2>Life Stage Specific Care</h2>
            <div className="stages-grid">
              {lifeStages.map((stage, index) => (
                <div key={index} className="stage-card">
                  <div className="stage-icon">{stage.icon}</div>
                  <h3>{stage.title}</h3>
                  <p>{stage.description}</p>
                  <ul className="focus-areas">
                    {stage.focusAreas.map((area, idx) => (
                      <li key={idx}>{area}</li>
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
            <h2>Our Women's Health Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Dr. Hana Tesfaye" />
                </div>
                <div className="team-info">
                  <h3>Dr. Hana Tesfaye</h3>
                  <p className="team-role">Director of Women's Health</p>
                  <p>Board-certified gynecologist with 12 years of experience in women's health and reproductive medicine.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Dr. Aster Woldemariam" />
                </div>
                <div className="team-info">
                  <h3>Dr. Aster Woldemariam</h3>
                  <p className="team-role">Gynecologist</p>
                  <p>Specialist in minimally invasive gynecological procedures and reproductive health.</p>
                </div>
              </div>
              
              <div className="team-member">
                <div className="team-avatar">
                  <img src="/doctor.png" alt="Certified Nurse" />
                </div>
                <div className="team-info">
                  <h3>Meron Bekele</h3>
                  <p className="team-role">Women's Health Nurse Practitioner</p>
                  <p>Specializes in family planning and menopause management.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="preventive-screening">
          <div className="container">
            <div className="screening-content">
              <div className="screening-text">
                <h2>Preventive Screening Guidelines</h2>
                <p>Regular preventive screenings are essential for maintaining women's health and detecting conditions early when they're most treatable.</p>
                
                <h3>Recommended Screening Schedule</h3>
                <ul>
                  <li><strong>Annual Wellness Visit:</strong> Starting at age 21, annual visits include health history, physical exam, and counseling.</li>
                  <li><strong>Pap Smear:</strong> Begin at age 21, every 3 years if normal. Combined with HPV testing at age 30+ every 5 years.</li>
                  <li><strong>Mammograms:</strong> Annual screening mammography recommended starting at age 40, or earlier if high risk.</li>
                  <li><strong>Bone Density Test:</strong> Recommended at age 65, or earlier if risk factors present.</li>
                  <li><strong>Colonoscopy:</strong> Beginning at age 45, repeated every 10 years.</li>
                  <li><strong>Blood Pressure:</strong> At every healthcare visit.</li>
                  <li><strong>Diabetes Screening:</strong> Every 3 years starting at age 45, or earlier if risk factors present.</li>
                </ul>
                
                <h3>Genetic Testing Considerations</h3>
                <p>Women with a family history of breast, ovarian, or colorectal cancer may benefit from genetic counseling and testing for mutations in genes such as BRCA1 and BRCA2.</p>
              </div>
              
              <div className="screening-image">
                <div className="hospital-img">
                  <img src="/mother_background.png" alt="Women's Health Screening" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="family-planning">
          <div className="container">
            <h2>Family Planning Services</h2>
            <div className="planning-grid">
              <div className="planning-card">
                <div className="planning-icon">💊</div>
                <h3>Contraceptive Options</h3>
                <p>Our family planning services include education about all contraceptive methods to help you make informed decisions about your reproductive health.</p>
                <ul>
                  <li>Oral contraceptives</li>
                  <li>Long-acting reversible contraceptives (IUDs, implants)</li>
                  <li>Barrier methods</li>
                  <li>Natural family planning</li>
                </ul>
              </div>
              
              <div className="planning-card">
                <div className="planning-icon">🤰</div>
                <h3>Preconception Care</h3>
                <p>Planning ahead for pregnancy can help ensure the best possible outcomes for both mother and baby.</p>
                <ul>
                  <li>Folic acid supplementation</li>
                  <li>Chronic condition management</li>
                  <li>Vaccination updates</li>
                  <li>Lifestyle modifications</li>
                </ul>
              </div>
              
              <div className="planning-card">
                <div className="planning-icon">🔄</div>
                <h3>Fertility Awareness</h3>
                <p>Understanding your fertility cycle can help you achieve or prevent pregnancy naturally.</p>
                <ul>
                  <li>Tracking ovulation</li>
                  <li>Understanding menstrual cycles</li>
                  <li>Fertility awareness methods</li>
                  <li>When to seek fertility help</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="menopause-care">
          <div className="container">
            <h2>Menopause Care</h2>
            <div className="menopause-content">
              <div className="menopause-text">
                <h3>Navigating Menopause</h3>
                <p>Menopause is a natural part of aging that marks the end of menstrual cycles. While it can bring challenging symptoms, proper care and support can help women navigate this transition with minimal disruption to their daily lives.</p>
                
                <h3>Common Symptoms</h3>
                <ul>
                  <li>Hot flashes and night sweats</li>
                  <li>Sleep disturbances</li>
                  <li>Vaginal dryness</li>
                  <li>Mood changes</li>
                  <li>Changes in sexual function</li>
                  <li>Urinary symptoms</li>
                  <li>Joint and muscle aches</li>
                </ul>
                
                <h3>Management Options</h3>
                <p>Our approach to menopause management is individualized based on your symptoms, health history, and personal preferences:</p>
                <ul>
                  <li>Hormone therapy (when appropriate)</li>
                  <li>Non-hormonal medications</li>
                  <li>Lifestyle modifications</li>
                  <li>Alternative therapies</li>
                </ul>
              </div>
              
              <div className="menopause-image">
                <div className="hospital-img">
                  <img src="/building.jpg" alt="Menopause Care" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="health-education">
          <div className="container">
            <h2>Women's Health Education</h2>
            <div className="education-grid">
              <div className="education-topic">
                <h3>Sexual Health</h3>
                <p>Understanding sexual health is crucial for women's overall wellbeing. Our services include:</p>
                <ul>
                  <li>STI testing and treatment</li>
                  <li>HPV vaccination</li>
                  <li>Education about safe sex practices</li>
                  <li>Partner communication strategies</li>
                </ul>
              </div>
              
              <div className="education-topic">
                <h3>Mental Health</h3>
                <p>Women experience unique mental health challenges at different life stages:</p>
                <ul>
                  <li>Postpartum depression screening</li>
                  <li>Perimenopausal mood changes</li>
                  <li>Anxiety and stress management</li>
                  <li>Body image and self-esteem</li>
                </ul>
              </div>
              
              <div className="education-topic">
                <h3>Nutrition & Exercise</h3>
                <p>Maintaining good nutrition and exercise habits is especially important for women:</p>
                <ul>
                  <li>Calcium and vitamin D for bone health</li>
                  <li>Iron for menstruating women</li>
                  <li>Exercise for cardiovascular health</li>
                  <li>Weight management strategies</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="health-cta">
          <div className="container">
            <div className="cta-card">
              <h2>Begin Your Women's Health Journey</h2>
              <p>Schedule your annual wellness visit or consult with our women's health specialists.</p>
              <div className="cta-buttons">
                <a href="/appointment-booking" className="btn-service" onClick={handleClick}>Book Appointment</a>
                <a href="/contact" className="btn-service-outline" onClick={handleClick}>Contact Us</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default WomensHealth;