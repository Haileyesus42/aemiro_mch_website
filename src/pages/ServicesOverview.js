import React, { useState } from 'react';
import '../styles/pages/ServicesOverview.css';

const ServicesOverview = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Services', icon: '🌟' },
    { id: 'maternal-care', name: 'Maternal Care', icon: '🤰' },
    { id: 'delivery-services', name: 'Delivery Services', icon: '👶' },
    { id: 'newborn-care', name: 'Newborn Care', icon: '🍼' },
    { id: 'child-health', name: 'Child Healthcare', icon: '🧒' },
    { id: 'womens-health', name: 'Women\'s Health', icon: '🩺' }
  ];

  const services = {
    'maternal-care': [
      { title: 'Prenatal Care', description: 'Comprehensive care throughout pregnancy' },
      { title: 'High-Risk Pregnancy Management', description: 'Specialized care for complex pregnancies' },
      { title: 'Nutrition Counseling', description: 'Personalized dietary guidance' },
      { title: 'Labor Preparation Classes', description: 'Education for expectant parents' }
    ],
    'delivery-services': [
      { title: 'Natural Vaginal Delivery', description: 'Support for natural birth experience' },
      { title: 'Cesarean Section', description: 'Safe surgical delivery options' },
      { title: 'Water Birth', description: 'Gentle water immersion delivery' },
      { title: 'Planned Delivery', description: 'Scheduled delivery with personalized plan' }
    ],
    // ... other service categories would follow the same pattern
  };

  const filteredServices = activeCategory === 'all' 
    ? Object.values(services).flat()
    : services[activeCategory] || [];

  return (
    <main className="services-overview-page">
      <section className="services-header">
        <div className="container">
          <h1>Our Comprehensive Services</h1>
          <p>Providing exceptional care at every stage of your journey</p>
        </div>
      </section>

      <section className="services-categories">
        <div className="container">
          <div className="category-tabs">
            {categories.map(category => (
              <button
                key={category.id}
                className={activeCategory === category.id ? 'active' : ''}
                onClick={() => setActiveCategory(category.id)}
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          <div className="grid">
            {filteredServices.map((service, index) => (
              <div className="service-card" key={index}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#" className="btn-learn teal">Learn More</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicesOverview;