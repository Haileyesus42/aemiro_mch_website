import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      category: "General",
      questions: [
        {
          question: "What are your hospital hours?",
          answer: "Our hospital operates 24/7 for emergency services. For non-emergency services, our hours are Monday to Friday from 8:00 AM to 8:00 PM, and Saturday from 8:00 AM to 4:00 PM."
        },
        {
          question: "How can I book an appointment?",
          answer: "You can book an appointment online through our website, by calling our appointment line at +251 911 123 456, or by visiting our reception desk during business hours."
        },
        {
          question: "Do you accept walk-in patients?",
          answer: "Yes, we accept walk-in patients for non-emergency consultations. However, we recommend booking an appointment in advance to minimize waiting time."
        }
      ]
    },
    {
      category: "Maternal Care",
      questions: [
        {
          question: "How many prenatal visits are recommended?",
          answer: "According to WHO guidelines, we recommend at least 8 prenatal visits during pregnancy. The frequency increases as you approach your due date, with weekly visits in the final month."
        },
        {
          question: "What should I bring to my first prenatal visit?",
          answer: "Please bring your identification, insurance card, any previous medical records, and a list of medications you're currently taking. Also bring a list of questions you might have."
        },
        {
          question: "Can I choose my delivery method?",
          answer: "We respect your preferences for delivery methods, but the final decision depends on medical necessity. Your doctor will discuss the safest options for you and your baby."
        }
      ]
    },
    {
      category: "Delivery Services",
      questions: [
        {
          question: "What delivery options are available?",
          answer: "We offer various delivery options including normal vaginal delivery, cesarean section, and water birth. Your doctor will help determine the best option based on your health and the baby's condition."
        },
        {
          question: "Can my partner be present during delivery?",
          answer: "Yes, we encourage partners to be present during delivery. We provide comfortable spaces for partners and offer support throughout the process."
        },
        {
          question: "How long is the typical hospital stay after delivery?",
          answer: "For normal delivery, the typical stay is 2-3 days. For cesarean sections, it's usually 3-4 days. The length of stay depends on your recovery progress and any complications."
        }
      ]
    },
    {
      category: "Newborn Care",
      questions: [
        {
          question: "What newborn services do you provide?",
          answer: "We provide comprehensive newborn services including initial assessment, vaccination, feeding support, jaundice monitoring, and discharge planning with parental education."
        },
        {
          question: "When should my newborn have their first checkup?",
          answer: "The first checkup should occur within 24-48 hours after leaving the hospital, followed by another visit at 1 week and then at 2 weeks of age."
        },
        {
          question: "Do you offer breastfeeding support?",
          answer: "Yes, we have certified lactation consultants who provide breastfeeding support, education, and assistance with any challenges you might face."
        }
      ]
    },
    {
      category: "Insurance & Billing",
      questions: [
        {
          question: "What insurance plans do you accept?",
          answer: "We accept most major insurance plans including National Health Insurance, private insurers, and international health plans. Please contact our billing department to verify coverage."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment plans for services not covered by insurance. Our financial counselors can help you set up a plan that works for your budget."
        },
        {
          question: "How do I get a cost estimate for procedures?",
          answer: "You can get a cost estimate by contacting our billing department at least 48 hours before your scheduled procedure. Estimates are provided free of charge."
        }
      ]
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <div className="page-container">
      <TopBar />
      <Navigation />
      
      <main className="faq-page">
        <section className="faq-hero">
          <div className="container">
            <h1>Frequently Asked Questions</h1>
            <p>Find answers to common questions about our services</p>
          </div>
        </section>

        <section className="faq-search">
          <div className="container">
            <div className="search-box">
              <input type="text" placeholder="Search for questions..." />
              <button className="btn-service">Search</button>
            </div>
          </div>
        </section>

        <section className="faq-categories">
          <div className="container">
            <div className="categories-grid">
              {faqs.map((category, catIndex) => (
                <div key={catIndex} className="category-card">
                  <h3>{category.category}</h3>
                  <ul>
                    {category.questions.slice(0, 3).map((faq, qIndex) => (
                      <li key={qIndex}>
                        <a href="#" onClick={(e) => {
                          e.preventDefault();
                          toggleFAQ(catIndex * 100 + qIndex);
                        }}>
                          {faq.question}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="faq-accordion">
          <div className="container">
            <h2>All Questions</h2>
            
            {faqs.map((category, catIndex) => (
              <div key={catIndex} className="faq-category">
                <h3>{category.category}</h3>
                
                {category.questions.map((faq, qIndex) => {
                  const index = catIndex * 100 + qIndex;
                  return (
                    <div key={index} className="faq-item">
                      <button 
                        className={`faq-question ${openIndex === index ? 'active' : ''}`}
                        onClick={() => toggleFAQ(index)}
                      >
                        {faq.question}
                        <span className="faq-toggle">+</span>
                      </button>
                      
                      {openIndex === index && (
                        <div className="faq-answer">
                          <p>{faq.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </section>

        <section className="faq-contact">
          <div className="container">
            <div className="faq-contact-card">
              <h2>Still Have Questions?</h2>
              <p>Our friendly team is ready to assist you with any additional questions you might have.</p>
              <div className="faq-contact-buttons">
                <a href="/contact" className="btn-service" onClick={handleClick}>Contact Us</a>
                <a href="/appointment-booking" className="btn-service-outline" onClick={handleClick}>Book Consultation</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;