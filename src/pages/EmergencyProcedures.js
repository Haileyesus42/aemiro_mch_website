import React from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const EmergencyProcedures = () => {
  const emergencyContacts = [
    {
      name: "Emergency Line",
      number: "+251 911 123 456",
      description: "Available 24/7 for all medical emergencies",
      icon: "🚨"
    },
    {
      name: "Maternity Emergency",
      number: "+251 911 123 457",
      description: "Specific line for pregnancy-related emergencies",
      icon: "🤰"
    },
    {
      name: "Pediatric Emergency",
      number: "+251 911 123 458",
      description: "For children's medical emergencies",
      icon: "👶"
    },
    {
      name: "Poison Control",
      number: "+251 911 123 459",
      description: "For suspected poisoning cases",
      icon: "☣️"
    }
  ];

  const emergencyGuidelines = [
    {
      title: "When to Call Emergency Services",
      items: [
        "Severe chest pain or difficulty breathing",
        "Signs of stroke (facial drooping, slurred speech)",
        "Severe bleeding that won't stop",
        "Severe allergic reactions",
        "Loss of consciousness",
        "Severe abdominal pain",
        "Complications during pregnancy or delivery",
        "Child choking or not breathing"
      ]
    },
    {
      title: "During Pregnancy Emergencies",
      items: [
        "Heavy vaginal bleeding",
        "Severe abdominal pain",
        "Sudden severe headache with blurred vision",
        "Decreased fetal movement",
        "Fluid leaking from vagina",
        "Regular contractions before 37 weeks",
        "High fever with chills",
        "Severe nausea and vomiting"
      ]
    },
    {
      title: "Child Emergency Signs",
      items: [
        "Difficulty breathing or stopping breathing",
        "High fever in infants under 3 months",
        "Persistent vomiting or diarrhea",
        "Signs of dehydration",
        "Seizures",
        "Severe injury from fall or accident",
        "Swallowing poisonous substance",
        "Severe allergic reaction"
      ]
    }
  ];

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <div className="page-container">
      <TopBar />
      <Navigation />
      
      <main className="emergency-procedures-page">
        <section className="emergency-hero">
          <div className="container">
            <h1>Emergency Procedures</h1>
            <p>Know what to do in case of a medical emergency</p>
          </div>
        </section>

        <section className="emergency-contacts">
          <div className="container">
            <h2>Emergency Contact Numbers</h2>
            <div className="contacts-grid">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="contact-card">
                  <div className="contact-icon">{contact.icon}</div>
                  <div className="contact-info">
                    <h3>{contact.name}</h3>
                    <p className="contact-number">{contact.number}</p>
                    <p className="contact-description">{contact.description}</p>
                  </div>
                  <a href={`tel:${contact.number}`} className="btn-emergency-call">
                    Call Now
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="emergency-guidelines">
          <div className="container">
            <h2>Emergency Guidelines</h2>
            <div className="guidelines-grid">
              {emergencyGuidelines.map((guideline, index) => (
                <div key={index} className="guideline-card">
                  <h3>{guideline.title}</h3>
                  <ul>
                    {guideline.items.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="emergency-location">
          <div className="container">
            <div className="location-card">
              <div className="location-content">
                <h2>Emergency Department Location</h2>
                <p>Our Emergency Department is located on the ground floor of the main building, clearly marked with emergency signage. The entrance is accessible 24/7 and has dedicated parking for emergency vehicles.</p>
                
                <div className="location-details">
                  <div className="detail-item">
                    <div className="detail-icon">📍</div>
                    <div>
                      <h4>Address</h4>
                      <p>Bole Road, Aimero<br />Addis Ababa, Ethiopia</p>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">🚗</div>
                    <div>
                      <h4>Parking</h4>
                      <p>Emergency parking available directly in front of ED entrance</p>
                    </div>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">🚪</div>
                    <div>
                      <h4>Entrance</h4>
                      <p>Automatic doors, wheelchair accessible</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="location-image">
                <div className="hospital-img">
                  <img src="/building.jpg" alt="Aimero Hospital Emergency Entrance" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="triage-info">
          <div className="container">
            <h2>Triage Process</h2>
            <div className="triage-steps">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Registration</h3>
                  <p>Provide basic information at the triage desk</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Nursing Assessment</h3>
                  <p>Quick evaluation of vital signs and symptoms</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Prioritization</h3>
                  <p>Based on severity of condition (not arrival time)</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Treatment</h3>
                  <p>By physician based on priority level</p>
                </div>
              </div>
            </div>
            
            <div className="triage-info-text">
              <p>Our triage system prioritizes patients based on the severity of their condition, not the order of arrival. While we strive to minimize wait times, critically ill patients will receive immediate attention.</p>
            </div>
          </div>
        </section>

        <section className="what-to-bring">
          <div className="container">
            <h2>What to Bring to Emergency</h2>
            <div className="bring-grid">
              <div className="bring-card">
                <div className="bring-icon">✅</div>
                <h3>Essential Items</h3>
                <ul>
                  <li>Valid ID or passport</li>
                  <li>Insurance card</li>
                  <li>List of current medications</li>
                  <li>Medical history summary</li>
                  <li>Emergency contact information</li>
                </ul>
              </div>
              
              <div className="bring-card">
                <div className="bring-icon">👶</div>
                <h3>For Pediatric Emergencies</h3>
                <ul>
                  <li>Child's identification</li>
                  <li>Immunization record</li>
                  <li>List of medications</li>
                  <li>Comfort items for child</li>
                  <li>Parent/guardian ID</li>
                </ul>
              </div>
              
              <div className="bring-card">
                <div className="bring-icon">🤰</div>
                <h3>For Pregnancy Emergencies</h3>
                <ul>
                  <li>Prenatal records</li>
                  <li>Current medications</li>
                  <li>Doctor's contact information</li>
                  <li>Partner's contact information</li>
                  <li>Delivery plan if available</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="non-emergency">
          <div className="container">
            <div className="non-emergency-card">
              <h2>Non-Emergency Care</h2>
              <div className="non-emergency-content">
                <div className="non-emergency-text">
                  <p>For non-emergency medical needs, please contact our primary care department or book an appointment:</p>
                  <ul>
                    <li>Mild cold or flu symptoms</li>
                    <li>Minor cuts or bruises</li>
                    <li>Routine check-ups</li>
                    <li>Prescription refills</li>
                    <li>Non-urgent specialist referrals</li>
                  </ul>
                  <a href="/appointment-booking" className="btn-service" onClick={handleClick}>Book Appointment</a>
                </div>
                <div className="non-emergency-icon">🏥</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EmergencyProcedures;