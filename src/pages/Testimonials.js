import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Testimonials = () => {
  const [activeTab, setActiveTab] = useState('all');

  const testimonials = [
    {
      id: 1,
      name: "Almaz T.",
      role: "Mother of twins",
      text: "The care I received at Aimero Hospital was exceptional. The staff went above and beyond to ensure both my babies and I were healthy and comfortable. The neonatal team was particularly amazing with my premature twins.",
      rating: 5,
      date: "2024-01-15",
      service: "newborn-care",
      image: "/doctor.png"
    },
    {
      id: 2,
      name: "Daniel K.",
      role: "Father",
      text: "From the moment we arrived until our discharge, the professionalism and compassion shown by every member of the staff was remarkable. The delivery went smoothly thanks to Dr. Hana's expertise.",
      rating: 5,
      date: "2024-01-10",
      service: "delivery",
      image: "/doctor.png"
    },
    {
      id: 3,
      name: "Selam A.",
      role: "New mother",
      text: "My pregnancy was high-risk, but the team at Aimero made me feel safe and well-cared for. The regular monitoring and personalized care plan gave me peace of mind throughout my pregnancy.",
      rating: 5,
      date: "2024-01-05",
      service: "pregnancy",
      image: "/doctor.png"
    },
    {
      id: 4,
      name: "Abel M.",
      role: "Grandfather",
      text: "I brought my granddaughter for a pediatric consultation and was impressed by the thoroughness and gentleness of Dr. Samuel. The facility is clean and well-equipped.",
      rating: 4,
      date: "2023-12-28",
      service: "child-health",
      image: "/doctor.png"
    },
    {
      id: 5,
      name: "Hiwot F.",
      role: "New mother",
      text: "The postpartum support was incredible. The lactation consultant helped me with breastfeeding, and the nursing staff checked on me regularly. I felt truly cared for during a vulnerable time.",
      rating: 5,
      date: "2023-12-20",
      service: "postpartum",
      image: "/doctor.png"
    },
    {
      id: 6,
      name: "Ephrem T.",
      role: "Father",
      text: "When our son had a serious respiratory issue, the pediatric team acted swiftly and effectively. Their communication with us was clear and reassuring throughout the entire process.",
      rating: 5,
      date: "2023-12-15",
      service: "child-health",
      image: "/doctor.png"
    },
    {
      id: 7,
      name: "Rosa B.",
      role: "Mother",
      text: "The birthing center exceeded my expectations. I was able to have the natural birth I wanted with the support of skilled midwives and doctors who respected my choices.",
      rating: 5,
      date: "2023-12-10",
      service: "delivery",
      image: "/doctor.png"
    },
    {
      id: 8,
      name: "Kiros G.",
      role: "Husband",
      text: "Words cannot express how grateful we are for the care our family received. The doctors and nurses treated us like family and answered all our questions with patience.",
      rating: 5,
      date: "2023-12-05",
      service: "general",
      image: "/doctor.png"
    }
  ];

  const services = [
    { id: 'all', name: 'All Experiences' },
    { id: 'pregnancy', name: 'Pregnancy Care' },
    { id: 'delivery', name: 'Delivery Experience' },
    { id: 'newborn-care', name: 'Newborn Care' },
    { id: 'child-health', name: 'Child Health' },
    { id: 'postpartum', name: 'Postpartum Care' },
    { id: 'general', name: 'General Care' }
  ];

  const filteredTestimonials = activeTab === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.service === activeTab);

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <div className="page-container">
      <TopBar />
      <Navigation />
      
      <main className="testimonials-page">
        <section className="testimonials-hero">
          <div className="container">
            <h1>What Our Patients Say</h1>
            <p>Real experiences from families we've had the privilege to serve</p>
          </div>
        </section>

        <section className="testimonials-stats">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-number">4.8</div>
                <div className="stat-label">Average Rating</div>
                <div className="stat-stars">
                  {'★'.repeat(5)}
                </div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">{testimonials.length}+</div>
                <div className="stat-label">Happy Families</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">98%</div>
                <div className="stat-label">Would Recommend</div>
              </div>
              
              <div className="stat-card">
                <div className="stat-number">100%</div>
                <div className="stat-label">Safe Deliveries</div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials-filter">
          <div className="container">
            <h2>Filter by Experience</h2>
            <div className="filter-tabs">
              {services.map(service => (
                <button
                  key={service.id}
                  className={`tab-btn ${activeTab === service.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(service.id)}
                >
                  {service.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="testimonials-grid">
          <div className="container">
            <div className="testimonials-list">
              {filteredTestimonials.map(testimonial => (
                <div key={testimonial.id} className="testimonial-card">
                  <div className="testimonial-header">
                    <div className="testimonial-avatar">
                      <img src={testimonial.image} alt={testimonial.name} />
                    </div>
                    <div className="testimonial-info">
                      <h3>{testimonial.name}</h3>
                      <p>{testimonial.role}</p>
                      <div className="testimonial-rating">
                        {'★'.repeat(testimonial.rating)}
                        {'☆'.repeat(5 - testimonial.rating)}
                      </div>
                      <span className="testimonial-date">
                        {new Date(testimonial.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  
                  <div className="testimonial-content">
                    <p>{testimonial.text}</p>
                  </div>
                  
                  <div className="testimonial-service">
                    <span>Service: {testimonial.service.replace('-', ' ')}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="success-stories">
          <div className="container">
            <h2>Success Stories</h2>
            <div className="stories-grid">
              <div className="story-card">
                <div className="story-image">
                  <img src="/mother_background.png" alt="Success Story" />
                </div>
                <div className="story-content">
                  <h3>Overcoming High-Risk Pregnancy</h3>
                  <p>After experiencing complications in her first pregnancy, Selam was worried about carrying her second child. Our specialized maternal-fetal medicine team developed a customized care plan that resulted in a healthy delivery.</p>
                  <a href="#" className="read-more" onClick={handleClick}>Read Full Story</a>
                </div>
              </div>
              
              <div className="story-card">
                <div className="story-image">
                  <img src="/building.jpg" alt="Success Story" />
                </div>
                <div className="story-content">
                  <h3>Life-Saving Neonatal Care</h3>
                  <p>When baby Abraham was born prematurely at 28 weeks, our NICU team provided round-the-clock care that helped him thrive. Today, he's a healthy toddler reaching all his developmental milestones.</p>
                  <a href="#" className="read-more" onClick={handleClick}>Read Full Story</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonial-form">
          <div className="container">
            <div className="form-card">
              <h2>Share Your Experience</h2>
              <p>We'd love to hear about your experience with us. Your feedback helps us improve and helps other families choose Aimero Hospital.</p>
              
              <form className="testimonial-form-element">
                <div className="form-row">
                  <div className="form-group">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  
                  <div className="form-group">
                    <input type="text" placeholder="Your Role (e.g., Mother, Father)" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <textarea 
                    placeholder="Share your experience with us..." 
                    rows="5" 
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label>Rate Your Experience</label>
                  <div className="rating-input">
                    {[1, 2, 3, 4, 5].map(star => (
                      <span key={star} className="star">★</span>
                    ))}
                  </div>
                </div>
                
                <button type="submit" className="btn-service">Submit Review</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Testimonials;