import React from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const PrivacyLegal = () => {
  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <div className="page-container">
      <TopBar />
      <Navigation />
      
      <main className="privacy-legal-page">
        <section className="legal-hero">
          <div className="container">
            <h1>Privacy Policy & Legal Information</h1>
            <p>Important information about your privacy and legal rights</p>
          </div>
        </section>

        <section className="policy-overview">
          <div className="container">
            <div className="overview-content">
              <div className="overview-text">
                <h2>Our Commitment to Privacy</h2>
                <p>At Aimero Hospital, we are committed to protecting your privacy and safeguarding your personal and medical information. This policy explains how we collect, use, and protect your information when you visit our website or receive care at our facility.</p>
                <p>This policy is compliant with Ethiopian data protection regulations and international standards for healthcare privacy.</p>
              </div>
              <div className="overview-icon">🔒</div>
            </div>
          </div>
        </section>

        <section className="privacy-policy">
          <div className="container">
            <h2>Privacy Policy</h2>
            
            <div className="policy-section">
              <h3>Information We Collect</h3>
              <p>We collect several types of information for various purposes to provide and improve our services to you:</p>
              <ul>
                <li><strong>Personal Information:</strong> Name, address, phone number, email, date of birth, gender</li>
                <li><strong>Medical Information:</strong> Medical history, diagnoses, treatments, medications, test results</li>
                <li><strong>Insurance Information:</strong> Insurance provider details, policy numbers, coverage information</li>
                <li><strong>Website Usage Data:</strong> IP address, browser type, pages visited, time spent on site</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3>How We Use Your Information</h3>
              <p>We use your information for the following purposes:</p>
              <ul>
                <li>To provide and maintain our healthcare services</li>
                <li>To schedule and manage your appointments</li>
                <li>To process billing and insurance claims</li>
                <li>To communicate with you about your care</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3>Data Protection Measures</h3>
              <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:</p>
              <ul>
                <li>Encryption of data transmission and storage</li>
                <li>Secure access controls and authentication</li>
                <li>Regular security audits and updates</li>
                <li>Staff training on privacy and security</li>
                <li>Physical security measures at our facilities</li>
              </ul>
            </div>

            <div className="policy-section">
              <h3>Your Rights</h3>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li>The right to access your personal information</li>
                <li>The right to rectify inaccurate information</li>
                <li>The right to erasure of your information under certain conditions</li>
                <li>The right to restrict processing of your information</li>
                <li>The right to data portability</li>
                <li>The right to withdraw consent at any time</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="terms-of-service">
          <div className="container">
            <h2>Terms of Service</h2>
            
            <div className="terms-section">
              <h3>Use of Our Services</h3>
              <p>By using our website and services, you agree to the following terms:</p>
              <ul>
                <li>You must be at least 18 years old to use this site independently</li>
                <li>You agree to provide accurate, current, and complete information</li>
                <li>You agree to maintain the security of your account credentials</li>
                <li>You agree not to misuse our services or help anyone else do so</li>
                <li>You acknowledge that medical information provided is for educational purposes only</li>
              </ul>
            </div>

            <div className="terms-section">
              <h3>Medical Disclaimer</h3>
              <p>The information provided on this website is for general informational and educational purposes only and is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or treatment.</p>
              
              <p>Information on this website is not designed to replace a physician's independent judgment about the appropriateness or risks of a procedure for a given patient.</p>
            </div>

            <div className="terms-section">
              <h3>Limitation of Liability</h3>
              <p>Aimero Hospital shall not be liable for any special, consequential, or exemplary damages resulting from your access, use, or inability to access or use the website, even if Aimero Hospital has been advised of the possibility of such damages.</p>
            </div>
          </div>
        </section>

        <section className="hipaa-compliance">
          <div className="container">
            <div className="compliance-card">
              <h2>Medical Records Policy</h2>
              <div className="compliance-content">
                <div className="compliance-text">
                  <p>Our medical records policy ensures the confidentiality, integrity, and availability of your health information in compliance with applicable laws and regulations:</p>
                  
                  <h3>Access to Medical Records</h3>
                  <p>You have the right to access your medical records. To request a copy of your records:</p>
                  <ul>
                    <li>Contact our Health Information Management department</li>
                    <li>Provide valid identification</li>
                    <li>Submit a written request specifying the records needed</li>
                    <li>Allow 15 business days for processing</li>
                  </ul>
                  
                  <h3>Sharing of Information</h3>
                  <p>We may share your health information for treatment, payment, and healthcare operations purposes. We will only share your information with your authorization or as permitted by law.</p>
                </div>
                <div className="compliance-icon">📋</div>
              </div>
            </div>
          </div>
        </section>

        <section className="cookie-policy">
          <div className="container">
            <h2>Cookie Policy</h2>
            <div className="cookie-section">
              <h3>What Are Cookies</h3>
              <p>As is common practice with almost all professional websites, this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it, and why we sometimes need to store these files.</p>
            </div>

            <div className="cookie-section">
              <h3>How We Use Cookies</h3>
              <p>We use cookies for various purposes, including:</p>
              <ul>
                <li>Enabling basic functions of the website</li>
                <li>Storing user preferences</li>
                <li>Providing analytics to improve our services</li>
                <li>Recognizing returning users</li>
              </ul>
            </div>

            <div className="cookie-section">
              <h3>Managing Cookies</h3>
              <p>You can prevent the setting of cookies by adjusting the settings on your browser. Be aware that disabling cookies will affect the functionality of this and many other websites.</p>
            </div>
          </div>
        </section>

        <section className="contact-legal">
          <div className="container">
            <div className="legal-contact-card">
              <h2>Questions About This Policy</h2>
              <p>If you have questions about this Privacy Policy or our legal policies, please contact us:</p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <div>
                    <h4>Email</h4>
                    <p>privacy@aimerohospital.com</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📞</div>
                  <div>
                    <h4>Phone</h4>
                    <p>+251 911 123 456</p>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div>
                    <h4>Mail</h4>
                    <p>Privacy Officer<br />Aimero Hospital<br />Bole Road, Aimero<br />Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>
              
              <a href="/contact" className="btn-service" onClick={handleClick}>Contact Us</a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyLegal;