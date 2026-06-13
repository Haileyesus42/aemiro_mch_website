import React from 'react';

const Journey = () => {
  return (
    <section className="journey">
      <div className="container">
        <div className="section-title">
          <h2>Your Pregnancy Journey</h2>
          <div className="underline"></div>
        </div>
        <div className="journey-steps">
          <div className="journey-step">
            <div className="step-content">
              <div className="step-circle s1">
                🤰<span className="step-num">1</span>
              </div>
              <div className="step-title">First Trimester</div>
              <div className="step-desc">Initial checkups, prenatal vitamins, and pregnancy assessment.</div>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="journey-step">
            <div className="step-content">
              <div className="step-circle s2">
                🩺<span className="step-num">2</span>
              </div>
              <div className="step-title pink">Second Trimester</div>
              <div className="step-desc">Ultrasound examinations and fetal development monitoring.</div>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="journey-step">
            <div className="step-content">
              <div className="step-circle s3">
                🏃<span className="step-num">3</span>
              </div>
              <div className="step-title">Third Trimester</div>
              <div className="step-desc">Birth preparation, delivery planning, and maternal monitoring.</div>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="journey-step">
            <div className="step-content">
              <div className="step-circle s4">
                🏥<span className="step-num">4</span>
              </div>
              <div className="step-title teal">Delivery</div>
              <div className="step-desc">Safe labor and delivery support with skilled professionals.</div>
            </div>
          </div>
          <div className="step-arrow">→</div>
          <div className="journey-step">
            <div className="step-content">
              <div className="step-circle s5">
                👶<span className="step-num">5</span>
              </div>
              <div className="step-title">Postpartum Care</div>
              <div className="step-desc">Recovery support, breastfeeding assistance, and newborn care.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;