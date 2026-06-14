import React, { useState } from 'react';
import TopBar from '../components/TopBar';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Your First Trimester",
      excerpt: "What to expect during the first 12 weeks of pregnancy and how to maintain optimal health.",
      category: "pregnancy",
      author: "Dr. Hana Tesfaye",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/mother_background.png",
      tags: ["pregnancy", "first trimester", "health"]
    },
    {
      id: 2,
      title: "Signs That Labor Is Approaching",
      excerpt: "How to recognize the early signs of labor and when to head to the hospital.",
      category: "delivery",
      author: "Dr. Elias Alemu",
      date: "2024-01-10",
      readTime: "7 min read",
      image: "/building.jpg",
      tags: ["delivery", "labor", "birth"]
    },
    {
      id: 3,
      title: "Newborn Care Essentials",
      excerpt: "A comprehensive guide to caring for your newborn in the first few weeks of life.",
      category: "newborn",
      author: "Dr. Meron Desta",
      date: "2024-01-05",
      readTime: "8 min read",
      image: "/doctor.png",
      tags: ["newborn", "care", "parenting"]
    },
    {
      id: 4,
      title: "Benefits of Breastfeeding",
      excerpt: "Exploring the health benefits of breastfeeding for both mother and baby.",
      category: "child-health",
      author: "Dr. Aster Woldemariam",
      date: "2023-12-28",
      readTime: "6 min read",
      image: "/building.jpg",
      tags: ["breastfeeding", "nutrition", "health"]
    },
    {
      id: 5,
      title: "Preparing for Your Hospital Stay",
      excerpt: "What to pack and what to expect during your stay at Aimero Hospital.",
      category: "hospital",
      author: "Dr. Samuel Bekele",
      date: "2023-12-20",
      readTime: "4 min read",
      image: "/mother_background.png",
      tags: ["hospital", "preparation", "stay"]
    },
    {
      id: 6,
      title: "Child Development Milestones",
      excerpt: "Understanding key developmental milestones and when to seek professional help.",
      category: "child-health",
      author: "Dr. Samuel Bekele",
      date: "2023-12-15",
      readTime: "9 min read",
      image: "/doctor.png",
      tags: ["development", "milestones", "pediatrics"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Articles' },
    { id: 'pregnancy', name: 'Pregnancy' },
    { id: 'delivery', name: 'Delivery' },
    { id: 'newborn', name: 'Newborn Care' },
    { id: 'child-health', name: 'Child Health' },
    { id: 'hospital', name: 'Hospital Tips' }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <div className="page-container">
      <TopBar />
      <Navigation />
      
      <main className="blog-page">
        <section className="blog-hero">
          <div className="container">
            <h1>Healthcare Insights & Advice</h1>
            <p>Expert articles and tips for mothers, children, and families</p>
          </div>
        </section>

        <section className="blog-search-filter">
          <div className="container">
            <div className="search-filter-container">
              <div className="search-box">
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button className="search-btn">🔍</button>
              </div>
              
              <div className="category-filter">
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
          </div>
        </section>

        <section className="blog-content">
          <div className="container">
            <div className="blog-grid">
              {filteredPosts.map(post => (
                <article key={post.id} className="blog-card">
                  <div className="blog-image">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-content-wrapper">
                    <div className="blog-meta">
                      <span className="blog-category">{post.category}</span>
                      <span className="blog-date">{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <h2 className="blog-title">{post.title}</h2>
                    <p className="blog-excerpt">{post.excerpt}</p>
                    <div className="blog-footer">
                      <div className="blog-author">
                        <span>By {post.author}</span>
                        <span className="read-time">{post.readTime}</span>
                      </div>
                      <a href="#" className="read-more" onClick={handleClick}>Read More</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {filteredPosts.length === 0 && (
              <div className="no-results">
                <h3>No articles found</h3>
                <p>Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>
        </section>

        <section className="blog-popular-tags">
          <div className="container">
            <h2>Popular Topics</h2>
            <div className="tags-container">
              <span className="tag">Pregnancy Tips</span>
              <span className="tag">Newborn Care</span>
              <span className="tag">Delivery</span>
              <span className="tag">Child Development</span>
              <span className="tag">Breastfeeding</span>
              <span className="tag">Postpartum Care</span>
              <span className="tag">Vaccinations</span>
              <span className="tag">Nutrition</span>
            </div>
          </div>
        </section>

        <section className="newsletter-signup">
          <div className="container">
            <div className="newsletter-card">
              <h2>Stay Informed</h2>
              <p>Subscribe to our newsletter for the latest health tips and hospital updates</p>
              <form className="newsletter-form">
                <input type="email" placeholder="Your email address" required />
                <button type="submit" className="btn-service">Subscribe</button>
              </form>
            </div>
          </div>
        </section>

        <section className="blog-highlights">
          <div className="container">
            <h2>Featured Articles</h2>
            <div className="highlights-grid">
              <div className="highlight-card">
                <div className="highlight-image">
                  <img src="/mother_background.png" alt="Pregnancy Guide" />
                </div>
                <div className="highlight-content">
                  <h3>Complete Pregnancy Guide</h3>
                  <p>A comprehensive guide covering all aspects of pregnancy from conception to birth.</p>
                  <a href="#" className="read-more" onClick={handleClick}>Read Guide</a>
                </div>
              </div>
              
              <div className="highlight-card">
                <div className="highlight-image">
                  <img src="/doctor.png" alt="Newborn Care" />
                </div>
                <div className="highlight-content">
                  <h3>Newborn Care Basics</h3>
                  <p>Essential tips for caring for your newborn in the first crucial weeks.</p>
                  <a href="#" className="read-more" onClick={handleClick}>Read Guide</a>
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

export default Blog;