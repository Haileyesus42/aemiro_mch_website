import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const NewsUpdates = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const newsItems = [
    {
      id: 1,
      title: "Aimero Hospital Achieves JCI Accreditation",
      excerpt: "We are proud to announce that Aimero Hospital has achieved Joint Commission International accreditation, recognizing our commitment to quality and safety.",
      category: "announcements",
      author: "Admin Team",
      date: "2024-01-20",
      readTime: "3 min read",
      image: "/building.jpg",
      featured: true
    },
    {
      id: 2,
      title: "New Advanced NICU Opens at Aimero",
      excerpt: "Our state-of-the-art Neonatal Intensive Care Unit is now operational, equipped with the latest technology for premature and critically ill newborns.",
      category: "announcements",
      author: "Press Office",
      date: "2024-01-15",
      readTime: "4 min read",
      image: "/mother_background.png",
      featured: true
    },
    {
      id: 3,
      title: "World Maternal Health Week: Focus on Prenatal Care",
      excerpt: "Join us in recognizing World Maternal Health Week and learn about the importance of comprehensive prenatal care.",
      category: "events",
      author: "Dr. Hana Tesfaye",
      date: "2024-01-10",
      readTime: "5 min read",
      image: "/doctor.png",
      featured: false
    },
    {
      id: 4,
      title: "Research Study: Improving Outcomes for Premature Infants",
      excerpt: "Aimero Hospital participates in groundbreaking research to improve care protocols for premature infants in East Africa.",
      category: "research",
      author: "Research Team",
      date: "2024-01-05",
      readTime: "6 min read",
      image: "/building.jpg",
      featured: false
    },
    {
      id: 5,
      title: "Community Outreach: Free Health Screening Program",
      excerpt: "Aimero launches a comprehensive health screening program for underserved communities in partnership with local organizations.",
      category: "community",
      author: "Community Outreach",
      date: "2023-12-28",
      readTime: "4 min read",
      image: "/mother_background.png",
      featured: false
    },
    {
      id: 6,
      title: "New Pediatric Cardiology Department Opens",
      excerpt: "We're excited to introduce our new pediatric cardiology department with specialized equipment and expert physicians.",
      category: "announcements",
      author: "Admin Team",
      date: "2023-12-20",
      readTime: "3 min read",
      image: "/doctor.png",
      featured: true
    },
    {
      id: 7,
      title: "Educational Seminar: Child Nutrition in First Two Years",
      excerpt: "Join our upcoming seminar on optimal nutrition for infants and toddlers with our expert dietitians.",
      category: "events",
      author: "Nutrition Department",
      date: "2023-12-15",
      readTime: "2 min read",
      image: "/building.jpg",
      featured: false
    },
    {
      id: 8,
      title: "Technology Upgrade: Electronic Health Records System",
      excerpt: "Aimero implements a new EHR system to enhance patient care coordination and data security.",
      category: "technology",
      author: "IT Department",
      date: "2023-12-10",
      readTime: "5 min read",
      image: "/mother_background.png",
      featured: false
    }
  ];

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'announcements', name: 'Announcements' },
    { id: 'events', name: 'Events' },
    { id: 'research', name: 'Research' },
    { id: 'community', name: 'Community' },
    { id: 'technology', name: 'Technology' }
  ];

  const filteredNews = selectedCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === selectedCategory);

  const featuredNews = newsItems.filter(item => item.featured);

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <div className="page-container">
      <TopBar />
      <Navigation />
      
      <main className="news-updates-page">
        <section className="news-hero">
          <div className="container">
            <h1>News & Updates</h1>
            <p>Latest developments and insights from Aimero Hospital</p>
          </div>
        </section>

        <section className="featured-news">
          <div className="container">
            <h2>Featured Stories</h2>
            <div className="featured-grid">
              {featuredNews.map(item => (
                <article key={item.id} className="featured-card">
                  <div className="featured-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="featured-content">
                    <div className="news-meta">
                      <span className="news-category">{item.category}</span>
                      <span className="news-date">{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <div className="featured-footer">
                      <span>By {item.author}</span>
                      <a href="#" className="read-more" onClick={handleClick}>Read More</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="news-categories">
          <div className="container">
            <div className="category-filters">
              {categories.map(category => (
                <button
                  key={category.id}
                  className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="news-list">
          <div className="container">
            <h2>Recent Updates</h2>
            <div className="news-grid">
              {filteredNews.map(item => (
                <article key={item.id} className="news-card">
                  <div className="news-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-content">
                    <div className="news-meta">
                      <span className="news-category">{item.category}</span>
                      <span className="news-date">{new Date(item.date).toLocaleDateString()}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.excerpt}</p>
                    <div className="news-footer">
                      <span>By {item.author}</span>
                      <span className="read-time">{item.readTime}</span>
                      <a href="#" className="read-more" onClick={handleClick}>Read More</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredNews.length === 0 && (
              <div className="no-results">
                <h3>No news found in this category</h3>
                <p>Check back later or select a different category</p>
              </div>
            )}
          </div>
        </section>

        <section className="newsletter-subscribe">
          <div className="container">
            <div className="newsletter-card">
              <h2>Stay Updated</h2>
              <p>Subscribe to our newsletter to receive the latest news and updates from Aimero Hospital</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="btn-service">Subscribe</button>
              </form>
              <p className="newsletter-note">We respect your privacy. Unsubscribe at any time.</p>
            </div>
          </div>
        </section>

        <section className="press-kit">
          <div className="container">
            <div className="press-card">
              <h2>Press & Media Resources</h2>
              <div className="press-content">
                <div className="press-text">
                  <p>For press inquiries, media interviews, or to access our press kit, please contact our communications team.</p>
                  <p>Our press resources include official statements, high-resolution images, and fact sheets about our hospital and services.</p>
                  
                  <div className="press-contacts">
                    <div className="contact-item">
                      <h4>Media Contact</h4>
                      <p>Press Office</p>
                      <p>press@aimerohospital.com</p>
                      <p>+251 911 123 456</p>
                    </div>
                    
                    <div className="contact-item">
                      <h4>Public Relations</h4>
                      <p>PR Department</p>
                      <p>pr@aimerohospital.com</p>
                      <p>+251 911 123 457</p>
                    </div>
                  </div>
                </div>
                
                <div className="press-links">
                  <a href="#" className="press-link" onClick={handleClick}>
                    Download Press Kit
                  </a>
                  <a href="#" className="press-link" onClick={handleClick}>
                    View Official Statements
                  </a>
                  <a href="#" className="press-link" onClick={handleClick}>
                    Request Interview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NewsUpdates;