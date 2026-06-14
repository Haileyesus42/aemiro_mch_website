import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Telemedicine = () => {
  const [activeTab, setActiveTab] = useState('how-it-works');

  const services = [
    {
      id: 1,
      title: "Prenatal Consultations",
      description: "Virtual consultations with obstetricians for routine prenatal checkups and pregnancy concerns.",
      icon: "🤰",
      eligibility: "Available for low-risk pregnancies"
    },
    {
      id: 2,
      title: "Postpartum Follow-up",
      description: "Virtual checkups after delivery to monitor recovery and address concerns.",
      icon: "🤱",
      eligibility: "Within 6 weeks post-delivery"
    },
    {
      id: 3,
      title: "Pediatric Checkups",
      description: "Routine health assessments and developmental evaluations for children.",
      icon: "👶",
      eligibility: "For children up to 5 years old"
    },
    {
      id: 4,
      title: "Lactation Support",
      description: "Virtual consultations with certified lactation specialists.",
      icon: "🍼",
      eligibility: "Mothers with breastfeeding concerns"
    },
    {
      id: 5,
      title: "Women's Health",
      description: "Virtual consultations for gynecological concerns and reproductive health.",
      icon: "♀️",
      eligibility: "General women's health concerns"
    },
    {
      id: 6,
      title: "Mental Health Support",
      description: "Virtual counseling sessions for maternal mental health and adjustment.",
      icon: "🧠",
      eligibility: "All patients with mental health concerns"
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
      
      <main className="telemedicine-page">
        <section className="telemedicine-hero">
          <div className="container">
            <h1>Virtual Healthcare Services</h1>
            <p>Quality medical care delivered directly to you through secure video consultations</p>
            <a href="#" className="btn-service" onClick={handleClick}>Start Consultation</a>
          </div>
        </section>

        <section className="telemedicine-intro">
          <div className="container">
            <div className="intro-content">
              <div className="intro-text">
                <h2>Access Quality Care From Home</h2>
                <p>Our telemedicine platform allows you to connect with our healthcare professionals from the comfort of your home. Whether you need a routine checkup, follow-up consultation, or expert advice, our virtual care services provide convenient and secure access to quality healthcare.</p>
                <p>All consultations are conducted through our encrypted, HIPAA-compliant platform to ensure your privacy and security.</p>
              </div>
              <div className="intro-visual">
                <div className="telemedicine-icon">💻</div>
              </div>
            </div>
          </div>
        </section>

        <section className="telemedicine-tabs">
          <div className="container">
            <div className="tabs-navigation">
              <button 
                className={`tab-btn ${activeTab === 'how-it-works' ? 'active' : ''}`}
                onClick={() => setActiveTab('how-it-works')}
              >
                How It Works
              </button>
              <button 
                className={`tab-btn ${activeTab === 'services' ? 'active' : ''}`}
                onClick={() => setActiveTab('services')}
              >
                Available Services
              </button>
              <button 
                className={`tab-btn ${activeTab === 'requirements' ? 'active' : ''}`}
                onClick={() => setActiveTab('requirements')}
              >
                Technical Requirements
              </button>
              <button 
                className={`tab-btn ${activeTab === 'security' ? 'active' : ''}`}
                onClick={() => setActiveTab('security')}
              >
                Security & Privacy
              </button>
            </div>

            {activeTab === 'how-it-works' && (
              <div className="how-it-works-tab">
                <h2>Getting Started with Virtual Care</h2>
                <div className="steps-grid">
                  <div className="step-card">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <h3>Schedule Appointment</h3>
                      <p>Book your virtual appointment online or through our patient portal</p>
                    </div>
                  </div>
                  
                  <div className="step-card">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <h3>Receive Confirmation</h3>
                      <p>Get appointment details and instructions via email</p>
                    </div>
                  </div>
                  
                  <div className="step-card">
                    <div className="step-number">3</div>
                    <div className="step-content">
                      <h3>Prepare for Visit</h3>
                      <p>Check your device and find a quiet, private space</p>
                    </div>
                  </div>
                  
                  <div className="step-card">
                    <div className="step-number">4</div>
                    <div className="step-content">
                      <h3>Join Video Call</h3>
                      <p>Click the link at your appointment time</p>
                    </div>
                  </div>
                  
                  <div className="step-card">
                    <div className="step-number">5</div>
                    <div className="step-content">
                      <h3>Receive Care</h3>
                      <p>Consult with your healthcare provider virtually</p>
                    </div>
                  </div>
                  
                  <div className="step-card">
                    <div className="step-number">6</div>
                    <div className="step-content">
                      <h3>Follow-up</h3>
                      <p>Get prescriptions and next steps as needed</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div className="services-tab">
                <h2>Available Telemedicine Services</h2>
                <div className="services-grid">
                  {services.map(service => (
                    <div key={service.id} className="service-card">
                      <div className="service-icon">{service.icon}</div>
                      <h3>{service.title}</h3>
                      <p>{service.description}</p>
                      <div className="service-eligibility">
                        <strong>Eligibility:</strong> {service.eligibility}
                      </div>
                      <a href="#" className="btn-service-small" onClick={handleClick}>Schedule Consultation</a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'requirements' && (
              <div className="requirements-tab">
                <h2>Technical Requirements</h2>
                <div className="requirements-content">
                  <div className="requirements-list">
                    <h3>Device Requirements</h3>
                    <ul>
                      <li>Computer, tablet, or smartphone with camera and microphone</li>
                      <li>Reliable internet connection (minimum 5 Mbps download speed)</li>
                      <li>Updated web browser (Chrome, Firefox, Safari, or Edge)</li>
                      <li>Operating system: Windows 7+, macOS 10.12+, iOS 11+, Android 6+</li>
                    </ul>
                  </div>
                  
                  <div className="setup-checklist">
                    <h3>Setup Checklist</h3>
                    <ul>
                      <li>Test your camera and microphone before the appointment</li>
                      <li>Ensure adequate lighting in your space</li>
                      <li>Find a quiet, private location for your consultation</li>
                      <li>Have any relevant medical information ready to share</li>
                      <li>Charge your device or connect to power</li>
                    </ul>
                  </div>
                  
                  <div className="supported-platforms">
                    <h3>Supported Platforms</h3>
                    <div className="platforms-grid">
                      <div className="platform-card">
                        <div className="platform-icon">🖥️</div>
                        <h4>Desktop</h4>
                        <p>Windows, Mac via web browser</p>
                      </div>
                      
                      <div className="platform-card">
                        <div className="platform-icon">📱</div>
                        <h4>Mobile</h4>
                        <p>iOS and Android apps available</p>
                      </div>
                      
                      <div className="platform-card">
                        <div className="platform-icon">💻</div>
                        <h4>Tablet</h4>
                        <p>iPad and Android tablets</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'security' && (
              <div className="security-tab">
                <h2>Security & Privacy</h2>
                <div className="security-content">
                  <div className="security-features">
                    <h3>Protecting Your Information</h3>
                    <ul>
                      <li>End-to-end encryption for all video consultations</li>
                      <li>Compliance with HIPAA and Ethiopian data protection laws</li>
                      <li>Secure, cloud-based platform with regular security audits</li>
                      <li>Two-factor authentication for account access</li>
                      <li>Automatic session encryption and data protection</li>
                    </ul>
                  </div>
                  
                  <div className="privacy-measures">
                    <h3>Privacy Measures</h3>
                    <p>Our telemedicine platform is designed with your privacy in mind:</p>
                    <ul>
                      <li>Consultations are never recorded without explicit consent</li>
                      <li>Only authorized healthcare providers can access your information</li>
                      <li>Session data is automatically purged after required retention periods</li>
                      <li>De-identified data may be used for quality improvement</li>
                    </ul>
                  </div>
                  
                  <div className="trust-seal">
                    <h3>Trusted Platform</h3>
                    <p>Our telemedicine platform has been certified for security and privacy compliance. We regularly undergo third-party security audits to ensure continued protection of your health information.</p>
                    <div className="seals-grid">
                      <div className="seal-card">
                        <div className="seal-icon">🔒</div>
                        <h4>Encrypted</h4>
                        <p>All data encrypted</p>
                      </div>
                      
                      <div className="seal-card">
                        <div className="seal-icon">✅</div>
                        <h4>Compliant</h4>
                        <p>HIPAA compliant</p>
                      </div>
                      
                      <div className="seal-card">
                        <div className="seal-icon">🛡️</div>
                        <h4>Protected</h4>
                        <p>Secure platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="telemedicine-benefits">
          <div className="container">
            <h2>Benefits of Virtual Care</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <div className="benefit-icon">⏱️</div>
                <h3>Convenience</h3>
                <p>Access healthcare from anywhere, saving travel time and reducing exposure risks</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">💰</div>
                <h3>Cost Effective</h3>
                <p>Often lower cost than in-person visits with no travel expenses</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">👨‍👩‍👧‍👦</div>
                <h3>Family Friendly</h3>
                <p>Easily include family members in consultations without additional travel</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">📅</div>
                <h3>Flexible Scheduling</h3>
                <p>More scheduling options including evenings and weekends</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">📋</div>
                <h3>Digital Records</h3>
                <p>Automatic digital records accessible through patient portal</p>
              </div>
              
              <div className="benefit-card">
                <div className="benefit-icon">🔒</div>
                <h3>Secure Platform</h3>
                <p>Encrypted communication with full privacy protection</p>
              </div>
            </div>
          </div>
        </section>

        <section className="get-started">
          <div className="container">
            <div className="started-card">
              <h2>Get Started with Virtual Care</h2>
              <p>Ready to experience convenient healthcare from home? Schedule your first virtual consultation today.</p>
              <div className="started-actions">
                <a href="#" className="btn-service" onClick={handleClick}>Schedule Consultation</a>
                <a href="#" className="btn-service-outline" onClick={handleClick}>Download App</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Telemedicine;