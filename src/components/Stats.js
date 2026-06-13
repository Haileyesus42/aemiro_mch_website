import React from 'react';

const Stats = () => {
  return (
    <div style={{ padding: '0 24px', position: 'relative', zIndex: '10', marginTop: '-30px' }}>
      <div className="stats" style={{ maxWidth: '1152px', margin: '0 auto' }}>
        <div className="stats-inner">
          <div className="stat-item">
            <div className="stat-icon teal">👩‍👩‍👦</div>
            <div>
              <div className="stat-num">10,000+</div>
              <div className="stat-label">Mothers Served</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon pink">👶</div>
            <div>
              <div className="stat-num pink">5,000+</div>
              <div className="stat-label">Successful Deliveries</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon teal">⏰</div>
            <div>
              <div className="stat-num teal">24/7</div>
              <div className="stat-label">Emergency Care</div>
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-icon pink">👨‍⚕️</div>
            <div>
              <div className="stat-num">20+</div>
              <div className="stat-label">Healthcare Professionals</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;