import React from 'react';

const Journey = () => {
  return (
    <section className="journey">
      <div className="jw">
        <button className="arrow-btn arrow-left">&#8249;</button>
        <button className="arrow-btn arrow-right">&#8250;</button>

        <h2 className="title">Your Pregnancy Journey</h2>

        <div className="steps">
          {/* Step 1 */}
          <div className="step">
            <div className="image-wrap">
              <div className="img-oval ic1">
                <img src="/first_trimester.png" alt="First Trimester" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span className="number n1">1</span>
            </div>
            <div className="step-content">
              <h4 className="h1">First Trimester</h4>
              <p>Initial checkups, prenatal vitamins, and pregnancy assessment.</p>
            </div>
          </div>

          <div className="arr">→</div>

          {/* Step 2 */}
          <div className="step">
            <div className="image-wrap">
              <div className="img-oval ic2">
                <img src="/second_trimester.png" alt="Second Trimester" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span className="number n2">2</span>
            </div>
            <div className="step-content">
              <h4 className="h2">Second Trimester</h4>
              <p>Ultrasound examinations and fetal development monitoring.</p>
            </div>
          </div>

          <div className="arr">→</div>

          {/* Step 3 */}
          <div className="step">
            <div className="image-wrap">
              <div className="img-oval ic3">
                <img src="/third_trimester.png" alt="Third Trimester" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span className="number n3">3</span>
            </div>
            <div className="step-content">
              <h4 className="h3">Third Trimester</h4>
              <p>Birth preparation, delivery planning, and maternal monitoring.</p>
            </div>
          </div>

          <div className="arr">→</div>

          {/* Step 4 */}
          <div className="step">
            <div className="image-wrap">
              <div className="img-oval ic4">
                <img src="/delivery.png" alt="Delivery" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span className="number n4">4</span>
            </div>
            <div className="step-content">
              <h4 className="h4">Delivery</h4>
              <p>Safe labor and delivery support with skilled professionals.</p>
            </div>
          </div>

          <div className="arr">→</div>

          {/* Step 5 */}
          <div className="step">
            <div className="image-wrap">
              <div className="img-oval ic5">
                <img src="/postpartum.png" alt="Postpartum Care" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <span className="number n5">5</span>
            </div>
            <div className="step-content">
              <h4 className="h5">Postpartum Care</h4>
              <p>Recovery support, breastfeeding assistance, and newborn care.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;