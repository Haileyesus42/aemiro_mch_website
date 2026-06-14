import React from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PatientResources = () => {
  const resources = [
    {
      category: "Forms",
      items: [
        { name: "New Patient Registration", type: "PDF", size: "125 KB", link: "#" },
        { name: "Medical History Form", type: "PDF", size: "98 KB", link: "#" },
        { name: "Consent for Treatment", type: "PDF", size: "110 KB", link: "#" },
        { name: "Insurance Verification", type: "PDF", size: "87 KB", link: "#" },
        { name: "HIPAA Authorization", type: "PDF", size: "102 KB", link: "#" }
      ]
    },
    {
      category: "Guides",
      items: [
        { name: "Preparing for Delivery", type: "PDF", size: "245 KB", link: "#" },
        { name: "Newborn Care Basics", type: "PDF", size: "187 KB", link: "#" },
        { name: "Breastfeeding Guide", type: "PDF", size: "210 KB", link: "#" },
        { name: "Postpartum Recovery", type: "PDF", size: "195 KB", link: "#" },
        { name: "Child Vaccination Schedule", type: "PDF", size: "165 KB", link: "#" }
      ]
    },
    {
      category: "Policies",
      items: [
        { name: "Visiting Hours Policy", type: "PDF", size: "78 KB", link: "#" },
        { name: "Patient Rights & Responsibilities", type: "PDF", size: "95 KB", link: "#" },
        { name: "Privacy Policy", type: "PDF", size: "142 KB", link: "#" },
        { name: "Billing & Payment Policy", type: "PDF", size: "88 KB", link: "#" },
        { name: "Complaint Process", type: "PDF", size: "76 KB", link: "#" }
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
      
      <main className="patient-resources-page">
        <section className="resources-hero">
          <div className="container">
            <h1>Patient Resources</h1>
            <p>Access helpful forms, guides, and information for your healthcare journey</p>
          </div>
        </section>

        <section className="resources-intro">
          <div className="container">
            <div className="intro-content">
              <div className="intro-text">
                <h2>Everything You Need for Your Visit</h2>
                <p>Prepare for your visit to Aimero Hospital with these helpful resources. Download forms in advance, learn about our policies, and access educational materials to support your health journey.</p>
                <p>All documents are provided in PDF format for easy download and printing.</p>
              </div>
              <div className="intro-visual">
                <div className="resource-icon">📋</div>
              </div>
            </div>
          </div>
        </section>

        <section className="resources-download">
          <div className="container">
            <h2>Download Resources</h2>
            
            {resources.map((category, index) => (
              <div key={index} className="resource-category">
                <h3>{category.category}</h3>
                <div className="resources-grid">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="resource-card">
                      <div className="resource-icon-large">📄</div>
                      <div className="resource-info">
                        <h4>{item.name}</h4>
                        <div className="resource-meta">
                          <span className="resource-type">{item.type}</span>
                          <span className="resource-size">{item.size}</span>
                        </div>
                      </div>
                      <a href={item.link} className="resource-download" onClick={handleClick}>
                        Download
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="preparation-guides">
          <div className="container">
            <h2>Preparation Guides</h2>
            <div className="guides-grid">
              <div className="guide-card">
                <div className="guide-icon">🤰</div>
                <h3>Before Your Visit</h3>
                <ul>
                  <li>Arrive 15 minutes early</li>
                  <li>Bring valid ID and insurance card</li>
                  <li>Prepare a list of current medications</li>
                  <li>Write down questions for your doctor</li>
                </ul>
              </div>
              
              <div className="guide-card">
                <div className="guide-icon">👶</div>
                <h3>Bringing Children</h3>
                <ul>
                  <li>Children under 12 must be supervised</li>
                  <li>Bring comfort items for your child</li>
                  <li>Consider arranging childcare if possible</li>
                  <li>Inform staff of any special needs</li>
                </ul>
              </div>
              
              <div className="guide-card">
                <div className="guide-icon">🏥</div>
                <h3>After Your Visit</h3>
                <ul>
                  <li>Follow all prescribed treatments</li>
                  <li>Attend all follow-up appointments</li>
                  <li>Call with any concerns</li>
                  <li>Keep your medical records updated</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="patient-rights">
          <div className="container">
            <div className="rights-card">
              <h2>Your Rights as a Patient</h2>
              <div className="rights-grid">
                <div className="right-item">
                  <div className="right-icon">⚖️</div>
                  <h3>Right to Information</h3>
                  <p>You have the right to receive clear information about your health condition, treatment options, and associated risks.</p>
                </div>
                
                <div className="right-item">
                  <div className="right-icon">🔒</div>
                  <h3>Right to Privacy</h3>
                  <p>Your medical information is confidential and protected under privacy laws. You control who can access your information.</p>
                </div>
                
                <div className="right-item">
                  <div className="right-icon">🤝</div>
                  <h3>Right to Respect</h3>
                  <p>You have the right to be treated with dignity and respect regardless of your race, religion, gender, or health condition.</p>
                </div>
                
                <div className="right-item">
                  <div className="right-icon">❓</div>
                  <h3>Right to Ask Questions</h3>
                  <p>You can ask questions about your care and expect clear, understandable answers from your healthcare team.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="support-services">
          <div className="container">
            <h2>Support Services</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">💬</div>
                <h3>Patient Advocate</h3>
                <p>Need help navigating the healthcare system? Our patient advocates can assist with questions and concerns.</p>
                <a href="#" className="btn-service-small" onClick={handleClick}>Contact Advocate</a>
              </div>
              
              <div className="service-card">
                <div className="service-icon">👥</div>
                <h3>Support Groups</h3>
                <p>Connect with others facing similar health challenges through our support groups.</p>
                <a href="#" className="btn-service-small" onClick={handleClick}>Join Group</a>
              </div>
              
              <div className="service-card">
                <div className="service-icon">💰</div>
                <h3>Financial Counseling</h3>
                <p>Get help understanding your bills and exploring payment options.</p>
                <a href="#" className="btn-service-small" onClick={handleClick}>Schedule Session</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PatientResources;