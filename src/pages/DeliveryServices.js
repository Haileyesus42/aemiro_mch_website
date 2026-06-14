import React from 'react';

const DeliveryServices = () => {
  const deliveryOptions = [
    {
      title: "Natural Vaginal Delivery",
      description: "Traditional delivery with minimal medical intervention.",
      icon: "👶",
      features: [
        "Labor support with certified staff",
        "Various comfort measures available",
        "Partner presence encouraged",
        "Skin-to-skin contact immediately after birth"
      ]
    },
    {
      title: "Cesarean Section",
      description: "Surgical delivery performed when necessary for safety.",
      icon: "🏥",
      features: [
        "Advanced surgical facilities",
        "Experienced surgical team",
        "Comprehensive post-op care",
        "Family-centered recovery process"
      ]
    },
    {
      title: "Water Birth",
      description: "Delivery in a warm water tub for pain relief and relaxation.",
      icon: "💧",
      features: [
        "Specialized birthing tubs",
        "Experienced water birth attendants",
        "Hydrotherapy benefits",
        "Natural pain management option"
      ]
    },
    {
      title: "Planned Delivery",
      description: "Scheduled delivery for medical or personal reasons.",
      icon: "📅",
      features: [
        "Coordinated timing with care team",
        "Dedicated delivery suite",
        "Predictable delivery schedule",
        "Specialized care protocols"
      ]
    }
  ];

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <main className="delivery-services-page">
      <section className="service-hero">
        <div className="container">
          <h1>Delivery Services</h1>
          <p>Safe, supportive, and personalized birthing experiences for every family</p>
        </div>
      </section>

      <section className="delivery-intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Welcoming Life with Care and Compassion</h2>
              <p>At Aimero Hospital, we believe that every delivery is a unique and significant event. Our delivery services are designed to support your preferences while ensuring the safety and health of both mother and baby. Our experienced team of obstetricians, nurses, and midwives provide continuous support throughout your birthing journey.</p>
              <p>Whether you're planning a natural delivery, require a cesarean section, or have specific preferences for your birthing experience, we offer personalized care plans tailored to your individual needs.</p>
            </div>
            <div className="intro-visual">
              <div className="service-icon">👶</div>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-options">
        <div className="container">
          <h2>Delivery Options</h2>
          <div className="options-grid">
            {deliveryOptions.map((option, index) => (
              <div key={index} className="option-card">
                <div className="option-icon">{option.icon}</div>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <ul className="option-features">
                  {option.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <a href="#" className="btn-service" onClick={handleClick}>Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="delivery-facilities">
        <div className="container">
          <h2>Our Delivery Facilities</h2>
          <div className="facilities-grid">
            <div className="facility-card">
              <div className="facility-image">
                <div className="hospital-img">
                  <img src="/building.jpg" alt="Delivery Suite" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
              </div>
              <div className="facility-info">
                <h3>Private Delivery Rooms</h3>
                <p>Spacious, comfortable rooms designed for your birthing experience with space for family members.</p>
                <ul>
                  <li>Adjustable beds for comfort</li>
                  <li>Advanced monitoring equipment</li>
                  <li>Family accommodation space</li>
                  <li>Private bathroom facilities</li>
                </ul>
              </div>
            </div>
            
            <div className="facility-card">
              <div className="facility-image">
                <div className="hospital-img">
                  <img src="/mother_background.png" alt="Birthing Center" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
              </div>
              <div className="facility-info">
                <h3>Specialized Birthing Center</h3>
                <p>Dedicated area with equipment for various delivery methods and pain management options.</p>
                <ul>
                  <li>Water birthing tubs</li>
                  <li>Massage therapy equipment</li>
                  <li>Various birthing positions supported</li>
                  <li>Dim lighting options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-support">
        <div className="container">
          <h2>Delivery Support Services</h2>
          <div className="support-grid">
            <div className="support-card">
              <div className="support-icon">💆‍♀️</div>
              <h3>Labor Support</h3>
              <p>Continuous support from trained nurses and doulas throughout your labor process.</p>
            </div>
            
            <div className="support-card">
              <div className="support-icon">💊</div>
              <h3>Pain Management</h3>
              <p>Various options including epidurals, medications, and non-pharmacological methods.</p>
            </div>
            
            <div className="support-card">
              <div className="support-icon">👨‍👩‍👧‍👦</div>
              <h3>Family Integration</h3>
              <p>Encouraging partner and family involvement in the birthing experience.</p>
            </div>
            
            <div className="support-card">
              <div className="support-icon">🤱</div>
              <h3>Immediate Care</h3>
              <p>Support for immediate breastfeeding and skin-to-skin contact.</p>
            </div>
            
            <div className="support-card">
              <div className="support-icon">👩‍⚕️</div>
              <h3>Experienced Team</h3>
              <p>Board-certified obstetricians, nurses, and pediatricians on standby.</p>
            </div>
            
            <div className="support-card">
              <div className="support-icon">🛡️</div>
              <h3>Safety Protocols</h3>
              <p>Rigorous safety measures and emergency preparedness protocols.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-process">
        <div className="container">
          <h2>Delivery Day Process</h2>
          <div className="process-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Admission</h3>
                <p>Upon arrival, you'll be assessed by our nursing team and moved to your assigned delivery room.</p>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Monitoring</h3>
                <p>Continuous monitoring of mother and baby's well-being throughout labor.</p>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Active Labor</h3>
                <p>Support through the active phase of labor with comfort measures and pain management.</p>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Delivery</h3>
                <p>Assisted delivery with immediate care for both mother and baby.</p>
              </div>
            </div>
            
            <div className="step-card">
              <div className="step-number">5</div>
              <div className="step-content">
                <h3>Immediate Postpartum</h3>
                <p>Monitoring and support in the first critical hours after delivery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-preparation">
        <div className="container">
          <h2>Preparing for Delivery</h2>
          <div className="prep-content">
            <div className="prep-text">
              <h3>What to Pack</h3>
              <ul>
                <li>Comfortable clothing for your stay</li>
                <li>Toiletries and personal items</li>
                <li>Phone and charger</li>
                <li>Camera for capturing memories</li>
                <li>Insurance and identification documents</li>
                <li>Birth plan (if you have one)</li>
              </ul>
              
              <h3>When to Come to the Hospital</h3>
              <p>Generally, come to the hospital when:</p>
              <ul>
                <li>Contractions are 5 minutes apart, lasting 1 minute, for 1 hour (the 5-1-1 rule)</li>
                <li>Your water breaks</li>
                <li>You notice decreased fetal movement</li>
                <li>You experience heavy bleeding</li>
                <li>You have severe headaches or vision changes</li>
              </ul>
            </div>
            
            <div className="prep-image">
              <div className="hospital-img">
                <img src="/doctor.png" alt="Delivery Preparation" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-faq">
        <div className="container">
          <h2>Delivery Services FAQ</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Can my partner be present during delivery?</h3>
              <p>Yes, we encourage partner presence during delivery. Your partner can provide emotional support and participate in the birthing process as you desire.</p>
            </div>
            
            <div className="faq-item">
              <h3>What pain management options are available?</h3>
              <p>We offer various options including epidurals, IV medications, nitrous oxide, and non-pharmacological methods like massage, hydrotherapy, and breathing techniques.</p>
            </div>
            
            <div className="faq-item">
              <h3>How long is the typical hospital stay after delivery?</h3>
              <p>For vaginal deliveries, the typical stay is 2-3 days. For cesarean sections, it's usually 3-4 days. The length depends on your recovery and any complications.</p>
            </div>
            
            <div className="faq-item">
              <h3>Will I have a private room?</h3>
              <p>Yes, all our delivery rooms are private suites with space for family members to stay comfortably during your stay.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="delivery-cta">
        <div className="container">
          <div className="cta-card">
            <h2>Plan Your Delivery Experience</h2>
            <p>Discuss your delivery preferences with our team and create a personalized birth plan.</p>
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

export default DeliveryServices;