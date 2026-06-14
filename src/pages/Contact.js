import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <div className="page-container">
      <main className="contact-page">
        <section className="contact-hero">
          <div className="container">
            <h1>Contact Us</h1>
            <p>We're here to assist you with any questions or concerns</p>
          </div>
        </section>

        <section className="contact-info">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-card">
                <div className="contact-icon">📍</div>
                <h3>Hospital Location</h3>
                <p>Bole Road, Aimero<br />Addis Ababa, Ethiopia</p>
                <a href="#" className="contact-link" onClick={handleClick}>Get Directions</a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">📞</div>
                <h3>Emergency Care</h3>
                <p>+251 911 123 456</p>
                <p className="contact-subtext">Available 24/7</p>
              </div>

              <div className="contact-card">
                <div className="contact-icon">✉️</div>
                <h3>General Inquiry</h3>
                <p>info@aimerohospital.com</p>
                <a href="mailto:info@aimerohospital.com" className="contact-link" onClick={handleClick}>Send Email</a>
              </div>

              <div className="contact-card">
                <div className="contact-icon">🕒</div>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                <p>Saturday: 8:00 AM - 4:00 PM</p>
                <p>Sunday: Emergency Only</p>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-map">
          <div className="container">
            <h2>Find Us</h2>
            <div className="map-container">
              <div className="hospital-img">
                <img src="/building.jpg" alt="Aimero Hospital Building" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
              </div>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-details">
                <h2>Get in Touch</h2>
                <p>Have questions about our services? Need to book an appointment? Reach out to us and our friendly team will assist you.</p>
                
                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">💬</div>
                    <div>
                      <h4>Live Chat</h4>
                      <p>Chat with our support team during business hours</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">📱</div>
                    <div>
                      <h4>WhatsApp</h4>
                      <p>Message us at +251 911 123 456</p>
                    </div>
                  </div>
                  
                  <div className="contact-method">
                    <div className="method-icon">📋</div>
                    <div>
                      <h4>Online Form</h4>
                      <p>Fill out the form and we'll get back to you</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <h3>Send us a Message</h3>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="Subject" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn-service">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        <section className="emergency-info">
          <div className="container">
            <div className="emergency-card">
              <h2>Emergency Information</h2>
              <div className="emergency-grid">
                <div className="emergency-item">
                  <div className="emergency-icon">🚨</div>
                  <div>
                    <h3>Emergency Number</h3>
                    <p>Call +251 911 123 456 immediately</p>
                  </div>
                </div>
                
                <div className="emergency-item">
                  <div className="emergency-icon">🏥</div>
                  <div>
                    <h3>Emergency Department</h3>
                    <p>Located on the ground floor, clearly marked</p>
                  </div>
                </div>
                
                <div className="emergency-item">
                  <div className="emergency-icon">🚗</div>
                  <div>
                    <h3>Directions</h3>
                    <p>From Bole Road, turn right at the traffic light</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

    </div>
  );
};

export default Contact;