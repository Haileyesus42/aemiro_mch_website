import React from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const InsuranceBilling = () => {
  const insuranceProviders = [
    { name: "National Health Insurance", logo: "🏥", accepted: true },
    { name: "Ethiopian Insurance Corporation", logo: "🛡️", accepted: true },
    { name: "Dashen Insurance", logo: "🏦", accepted: true },
    { name: "Nib Insurance", logo: "💎", accepted: true },
    { name: "Cooperative Insurance", logo: "🤝", accepted: true },
    { name: "Africa Insurance", logo: "🌍", accepted: true },
    { name: "AXA Mansard Insurance", logo: "🛡️", accepted: true },
    { name: "Hartford Insurance", logo: "🏢", accepted: false }
  ];

  const billingInfo = [
    {
      service: "Initial Consultation",
      uninsured: "ETB 500",
      insured: "Copay applies"
    },
    {
      service: "Prenatal Visit",
      uninsured: "ETB 400",
      insured: "Copay applies"
    },
    {
      service: "Ultrasound",
      uninsured: "ETB 1,200",
      insured: "Copay applies"
    },
    {
      service: "Normal Delivery",
      uninsured: "ETB 45,000",
      insured: "Coverage varies"
    },
    {
      service: "C-Section",
      uninsured: "ETB 75,000",
      insured: "Coverage varies"
    },
    {
      service: "Newborn Care",
      uninsured: "ETB 2,500/day",
      insured: "Coverage varies"
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
      
      <main className="insurance-billing-page">
        <section className="billing-hero">
          <div className="container">
            <h1>Insurance & Billing</h1>
            <p>Information about accepted insurance plans and billing procedures</p>
          </div>
        </section>

        <section className="insurance-info">
          <div className="container">
            <div className="insurance-content">
              <div className="insurance-text">
                <h2>Accepted Insurance Plans</h2>
                <p>We work with multiple insurance providers to ensure you receive the care you need without financial stress. Our billing team is available to help you understand your coverage and benefits.</p>
                <p>Before your visit, please verify that we are in-network with your insurance plan to avoid unexpected costs.</p>
              </div>
              <div className="insurance-stats">
                <div className="stat-card">
                  <div className="stat-number">25+</div>
                  <div className="stat-label">Insurance Providers</div>
                </div>
                <div className="stat-card">
                  <div className="stat-number">98%</div>
                  <div className="stat-label">Claim Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="insurance-providers">
              <h3>Our Network Partners</h3>
              <div className="providers-grid">
                {insuranceProviders.map((provider, index) => (
                  <div key={index} className={`provider-card ${provider.accepted ? 'accepted' : 'not-accepted'}`}>
                    <div className="provider-logo">{provider.logo}</div>
                    <div className="provider-info">
                      <h4>{provider.name}</h4>
                      <p>{provider.accepted ? 'In Network' : 'Out of Network'}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="billing-process">
          <div className="container">
            <h2>Understanding Your Bill</h2>
            <div className="process-steps">
              <div className="step-card">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Service Provided</h3>
                  <p>Receive medical services at Aimero Hospital</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Claims Submission</h3>
                  <p>We submit claims to your insurance provider</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Payment Processing</h3>
                  <p>Insurance processes the claim and pays portion</p>
                </div>
              </div>
              
              <div className="step-card">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Final Bill</h3>
                  <p>You receive bill for remaining balance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing-info">
          <div className="container">
            <h2>Self-Pay Pricing</h2>
            <p>For patients without insurance or choosing to pay out-of-pocket. Prices are estimates and may vary based on specific circumstances.</p>
            
            <div className="pricing-table">
              <table>
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Uninsured Cost</th>
                    <th>With Insurance</th>
                  </tr>
                </thead>
                <tbody>
                  {billingInfo.map((item, index) => (
                    <tr key={index}>
                      <td>{item.service}</td>
                      <td>{item.uninsured}</td>
                      <td>{item.insured}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="payment-options">
          <div className="container">
            <h2>Payment Options</h2>
            <div className="options-grid">
              <div className="option-card">
                <div className="option-icon">💳</div>
                <h3>Major Credit Cards</h3>
                <p>Visa, MasterCard, Amex, and other major cards accepted</p>
              </div>
              
              <div className="option-card">
                <div className="option-icon">📱</div>
                <h3>Mobile Payments</h3>
                <p>Pay securely using mobile banking apps</p>
              </div>
              
              <div className="option-card">
                <div className="option-icon">💰</div>
                <h3>Payment Plans</h3>
                <p>Flexible payment arrangements available for qualified patients</p>
              </div>
              
              <div className="option-card">
                <div className="option-icon">🏛️</div>
                <h3>Bank Transfers</h3>
                <p>Direct bank transfers accepted for large payments</p>
              </div>
            </div>
          </div>
        </section>

        <section className="financial-assistance">
          <div className="container">
            <div className="assistance-card">
              <h2>Financial Assistance</h2>
              <div className="assistance-content">
                <div className="assistance-text">
                  <p>Need help with medical costs? We offer financial assistance programs for eligible patients. Our financial counselors can help you explore options including:</p>
                  <ul>
                    <li>Income-based discounts</li>
                    <li>Payment plan arrangements</li>
                    <li>Charity care programs</li>
                    <li>Government assistance programs</li>
                  </ul>
                  <a href="#" className="btn-service" onClick={handleClick}>Apply for Assistance</a>
                </div>
                <div className="assistance-icon">💰</div>
              </div>
            </div>
          </div>
        </section>

        <section className="billing-faq">
          <div className="container">
            <h2>Billing FAQ</h2>
            <div className="faq-list">
              <div className="faq-item">
                <h3>When will I receive my bill?</h3>
                <p>You will typically receive your bill within 2-3 weeks after your visit. If you have insurance, you'll receive an explanation of benefits (EOB) from your insurer first, followed by a bill for any remaining balance.</p>
              </div>
              
              <div className="faq-item">
                <h3>What if I can't pay my bill in full?</h3>
                <p>We offer flexible payment plans to help you manage your medical expenses. Contact our billing department as soon as possible to discuss your options before your account becomes delinquent.</p>
              </div>
              
              <div className="faq-item">
                <h3>How do I dispute a charge?</h3>
                <p>If you believe there is an error on your bill, please contact our billing department within 30 days of receiving the statement. We will investigate and correct any errors promptly.</p>
              </div>
              
              <div className="faq-item">
                <h3>Do you offer electronic billing?</h3>
                <p>Yes, we offer electronic billing and payment options through our patient portal. You can view statements, make payments, and set up payment plans online.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsuranceBilling;