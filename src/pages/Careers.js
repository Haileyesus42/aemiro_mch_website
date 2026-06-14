import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Careers = () => {
  const [activeTab, setActiveTab] = useState('jobs');

  const jobListings = [
    {
      id: 1,
      title: "Obstetrician/Gynecologist",
      department: "Maternal Health",
      type: "Full-time",
      location: "Addis Ababa",
      posted: "2024-01-15",
      description: "Join our maternal health team providing comprehensive care for women throughout their reproductive lives.",
      requirements: [
        "MD degree from accredited institution",
        "Board certification in Obstetrics and Gynecology",
        "Minimum 3 years experience",
        "Valid medical license in Ethiopia"
      ],
      benefits: [
        "Competitive salary",
        "Health insurance",
        "Continuing education allowance",
        "Professional development opportunities"
      ]
    },
    {
      id: 2,
      title: "Pediatric Nurse",
      department: "Child Health",
      type: "Full-time",
      location: "Addis Ababa",
      posted: "2024-01-10",
      description: "Provide specialized nursing care to children from infancy through adolescence.",
      requirements: [
        "Bachelor's degree in Nursing",
        "Pediatric nursing certification",
        "Minimum 2 years pediatric experience",
        "Current nursing license"
      ],
      benefits: [
        "Competitive salary",
        "Health and dental insurance",
        "Paid time off",
        "Career advancement opportunities"
      ]
    },
    {
      id: 3,
      title: "Labor & Delivery Nurse",
      department: "Delivery Services",
      type: "Full-time",
      location: "Addis Ababa",
      posted: "2024-01-05",
      description: "Assist with labor and delivery processes, providing support to mothers and newborns.",
      requirements: [
        "RN license in good standing",
        "OB/NICU experience preferred",
        "BLS and ACLS certification",
        "Strong communication skills"
      ],
      benefits: [
        "Competitive salary",
        "Shift differentials",
        "Health insurance",
        "Retirement plan"
      ]
    },
    {
      id: 4,
      title: "Neonatal Intensive Care Specialist",
      department: "Newborn Care",
      type: "Full-time",
      location: "Addis Ababa",
      posted: "2023-12-28",
      description: "Provide specialized care for premature and critically ill newborns in our NICU.",
      requirements: [
        "MD degree with specialization in Neonatology",
        "NICU experience required",
        "Board certification preferred",
        "Strong critical thinking skills"
      ],
      benefits: [
        "Competitive salary",
        "Malpractice insurance",
        "Professional development fund",
        "Flexible scheduling"
      ]
    },
    {
      id: 5,
      title: "Medical Laboratory Technician",
      department: "Diagnostics",
      type: "Part-time",
      location: "Addis Ababa",
      posted: "2023-12-20",
      description: "Perform laboratory tests and analyze specimens to support patient care.",
      requirements: [
        "Associate degree in Medical Laboratory Science",
        "Laboratory certification",
        "Attention to detail",
        "Experience with lab equipment"
      ],
      benefits: [
        "Competitive hourly wage",
        "Health insurance",
        "Flexible schedule",
        "Skill development opportunities"
      ]
    }
  ];

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance for employees and dependents",
      icon: "🏥"
    },
    {
      title: "Professional Development",
      description: "Continuing education allowance and conference attendance support",
      icon: "🎓"
    },
    {
      title: "Work-Life Balance",
      description: "Flexible scheduling and paid time off to maintain balance",
      icon: "⚖️"
    },
    {
      title: "Retirement Planning",
      description: "401(k) matching program to secure your future",
      icon: "💰"
    },
    {
      title: "Family Support",
      description: "Parental leave and childcare assistance programs",
      icon: "👨‍👩‍👧‍👦"
    },
    {
      title: "Career Advancement",
      description: "Clear pathways for promotion and specialization",
      icon: "📈"
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
      
      <main className="careers-page">
        <section className="careers-hero">
          <div className="container">
            <h1>Careers at Aimero</h1>
            <p>Join our mission to provide exceptional maternal and child healthcare</p>
          </div>
        </section>

        <section className="careers-intro">
          <div className="container">
            <div className="intro-content">
              <div className="intro-text">
                <h2>Why Work With Us</h2>
                <p>At Aimero Hospital, we're committed to attracting and retaining the best healthcare professionals who share our passion for maternal and child health. We offer competitive compensation, comprehensive benefits, and opportunities for professional growth in a supportive environment.</p>
                <p>Our team members make a meaningful difference in the lives of families every day, and we recognize their dedication with the support and resources they need to succeed.</p>
              </div>
              <div className="intro-stats">
                <div className="stat-card">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Healthcare Professionals</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Employee Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="careers-tabs">
          <div className="container">
            <div className="tab-navigation">
              <button 
                className={`tab-btn ${activeTab === 'jobs' ? 'active' : ''}`}
                onClick={() => setActiveTab('jobs')}
              >
                Open Positions
              </button>
              <button 
                className={`tab-btn ${activeTab === 'benefits' ? 'active' : ''}`}
                onClick={() => setActiveTab('benefits')}
              >
                Benefits
              </button>
              <button 
                className={`tab-btn ${activeTab === 'culture' ? 'active' : ''}`}
                onClick={() => setActiveTab('culture')}
              >
                Our Culture
              </button>
            </div>

            {activeTab === 'jobs' && (
              <div className="jobs-tab">
                <h2>Current Openings</h2>
                <div className="jobs-list">
                  {jobListings.map(job => (
                    <div key={job.id} className="job-card">
                      <div className="job-header">
                        <h3>{job.title}</h3>
                        <span className="job-type">{job.type}</span>
                      </div>
                      
                      <div className="job-meta">
                        <span className="job-department">{job.department}</span>
                        <span className="job-location">{job.location}</span>
                        <span className="job-posted">Posted: {new Date(job.posted).toLocaleDateString()}</span>
                      </div>
                      
                      <p className="job-description">{job.description}</p>
                      
                      <div className="job-requirements">
                        <h4>Requirements:</h4>
                        <ul>
                          {job.requirements.map((req, idx) => (
                            <li key={idx}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="job-benefits">
                        <h4>Benefits:</h4>
                        <ul>
                          {job.benefits.map((benefit, idx) => (
                            <li key={idx}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="job-actions">
                        <a href="#" className="btn-service" onClick={handleClick}>Apply Now</a>
                        <a href="#" className="btn-service-outline" onClick={handleClick}>Learn More</a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'benefits' && (
              <div className="benefits-tab">
                <h2>Our Employee Benefits</h2>
                <div className="benefits-grid">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="benefit-card">
                      <div className="benefit-icon">{benefit.icon}</div>
                      <h3>{benefit.title}</h3>
                      <p>{benefit.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="benefits-additional">
                  <h3>Additional Perks</h3>
                  <ul>
                    <li>On-site cafeteria with healthy meal options</li>
                    <li>Wellness programs and fitness facilities</li>
                    <li>Employee assistance program</li>
                    <li>Professional mentorship opportunities</li>
                    <li>Annual performance bonuses</li>
                    <li>Conference and training reimbursement</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'culture' && (
              <div className="culture-tab">
                <h2>Our Workplace Culture</h2>
                
                <div className="culture-content">
                  <div className="culture-text">
                    <h3>Compassion-Driven Care</h3>
                    <p>Our culture is built on the foundation of compassionate care for patients and families. We support each other to provide the best possible outcomes in maternal and child health.</p>
                    
                    <h3>Continuous Learning</h3>
                    <p>We invest in our team's growth through continuing education, workshops, and conferences. We encourage innovation and evidence-based practice improvements.</p>
                    
                    <h3>Collaborative Environment</h3>
                    <p>Our multidisciplinary teams work together seamlessly, respecting each other's expertise and fostering an environment where everyone's voice is heard.</p>
                  </div>
                  
                  <div className="culture-image">
                    <div className="hospital-img">
                      <img src="/building.jpg" alt="Aimero Hospital Team" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                    </div>
                  </div>
                </div>
                
                <div className="values-section">
                  <h3>Our Core Values</h3>
                  <div className="values-grid">
                    <div className="value-card">
                      <h4>Compassion</h4>
                      <p>Caring for each patient with empathy and understanding</p>
                    </div>
                    <div className="value-card">
                      <h4>Excellence</h4>
                      <p>Delivering the highest quality care through skill and dedication</p>
                    </div>
                    <div className="value-card">
                      <h4>Integrity</h4>
                      <p>Maintaining the highest ethical standards in all we do</p>
                    </div>
                    <div className="value-card">
                      <h4>Respect</h4>
                      <p>Valuing each patient, family, and colleague</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="application-process">
          <div className="container">
            <h2>Application Process</h2>
            <div className="process-steps">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Submit Application</h3>
                  <p>Complete online application with resume and cover letter</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Initial Screening</h3>
                  <p>HR and hiring manager review applications</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Interview Process</h3>
                  <p>Multiple rounds including skills assessment</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Background Check</h3>
                  <p>Verification of credentials and references</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">5</div>
                <div className="step-content">
                  <h3>Job Offer</h3>
                  <p>Formal offer with compensation details</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="career-form">
          <div className="container">
            <div className="form-card">
              <h2>Express Interest</h2>
              <p>Don't see a perfect match? Submit your information and we'll contact you when suitable positions become available.</p>
              
              <form className="career-interest-form">
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="First Name" required />
                  </div>
                  
                  <div className="form-group">
                    <input type="text" placeholder="Last Name" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                
                <div className="form-group">
                  <select required>
                    <option value="" disabled selected>Select Area of Interest</option>
                    <option value="clinical">Clinical Positions</option>
                    <option value="nursing">Nursing Positions</option>
                    <option value="administrative">Administrative Positions</option>
                    <option value="technical">Technical Positions</option>
                    <option value="support">Support Staff</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <textarea placeholder="Tell us about your background and career goals" rows="4"></textarea>
                </div>
                
                <div className="form-group">
                  <label>
                    <input type="checkbox" required /> I agree to the processing of my personal data
                  </label>
                </div>
                
                <button type="submit" className="btn-service">Submit Interest</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Careers;