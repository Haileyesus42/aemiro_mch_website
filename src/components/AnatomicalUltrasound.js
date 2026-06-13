import React from 'react';

const AnatomicalUltrasound = () => {
  const handleBookScan = (e) => {
    e.preventDefault();
    console.log("Book Scan clicked");
  };

  const handleLearnMore = (e) => {
    e.preventDefault();
    console.log("Learn More clicked");
  };

  return (
    <section className="anatomical-ultrasound" style={{ background: '#f9fafb', padding: '70px 24px' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-title" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2>Anatomical Ultrasound</h2>
          <div className="underline" style={{ width: '40px', height: '3px', background: '#e8457a', borderRadius: '2px', margin: '10px auto 0' }}></div>
        </div>
        
        <div className="ultrasound-content" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
          <div className="ultrasound-info">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', color: '#1f2937', marginBottom: '16px' }}>Detailed Fetal Assessment</h3>
            
            {/* Reduced paragraph text */}
            <p style={{ fontSize: '0.95rem', color: '#4b5563', lineHeight: '1.7', marginBottom: '20px' }}>
              Comprehensive ultrasound at 18-22 weeks to evaluate your baby's development and anatomy.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '24px' }}>
              <li style={{ fontSize: '0.85rem', color: '#4b5563', padding: '6px 0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#1a9d8f', fontWeight: 'bold', flexShrink: 0 }}>&#8226;</span>
                {/* Reduced bullet text */}
                <span>Fetal organ examination</span>
              </li>
              <li style={{ fontSize: '0.85rem', color: '#4b5563', padding: '6px 0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#1a9d8f', fontWeight: 'bold', flexShrink: 0 }}>&#8226;</span>
                <span>Growth assessment</span>
              </li>
              <li style={{ fontSize: '0.85rem', color: '#4b5563', padding: '6px 0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#1a9d8f', fontWeight: 'bold', flexShrink: 0 }}>&#8226;</span>
                <span>Abnormality detection</span>
              </li>
              <li style={{ fontSize: '0.85rem', color: '#4b5563', padding: '6px 0', display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <span style={{ color: '#1a9d8f', fontWeight: 'bold', flexShrink: 0 }}>&#8226;</span>
                <span>Gender determination</span>
              </li>
            </ul>
            
            <div className="ultrasound-btns" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button 
                className="btn-primary" 
                style={{ 
                  background: '#1a9d8f', 
                  color: 'white', 
                  padding: '12px 24px', 
                  borderRadius: '8px', 
                  fontSize: '0.9rem', 
                  fontWeight: '600', 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '8px', 
                  border: 'none', 
                  cursor: 'pointer', 
                  textDecoration: 'none', 
                  transition: 'background 0.2s, transform 0.15s', 
                  boxShadow: '0 4px 14px rgba(26,157,143,0.3)' 
                }} 
                onClick={handleBookScan}>
                Book Scan
              </button>
              <button 
                className="btn-learn" 
                style={{ 
                  display: 'inline-block', 
                  padding: '12px 24px', 
                  border: '1.5px solid #e8457a', 
                  color: '#e8457a', 
                  borderRadius: '6px', 
                  fontSize: '0.9rem', 
                  fontWeight: '600', 
                  textAlign: 'center', 
                  transition: 'all 0.2s', 
                  textDecoration: 'none', 
                  cursor: 'pointer', 
                  background: 'transparent' 
                }} 
                onClick={handleLearnMore}>
                Learn More
              </button>
            </div>
          </div>
          
          <div className="ultrasound-image" style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="ultrasound-img-frame" style={{ width: '380px', height: '320px', borderRadius: '16px', overflow: 'hidden', background: '#fff', border: '4px solid #ffffff', boxShadow: '0 20px 60px rgba(0, 0, 0, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', transform: 'rotate(-2deg)' }}>
              <img src="/doctor_and_pregnant_ultrasound.png" alt="Anatomical Ultrasound" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnatomicalUltrasound;