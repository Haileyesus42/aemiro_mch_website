import { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');

  .ws-root {
    font-family: 'DM Sans', sans-serif;
    background: #F7F9FC;
    padding: 80px 24px;
    box-sizing: border-box;
  }

  .ws-container {
    max-width: 1140px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: start;
  }

  /* ── Why Card ── */
  .ws-why-card {
    background: linear-gradient(145deg, #0B4F6C 0%, #0D6B8C 60%, #1089B0 100%);
    border-radius: 24px;
    padding: 48px 44px;
    color: #fff;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(11, 79, 108, 0.28);
  }

  .ws-why-card::before {
    content: '';
    position: absolute;
    top: -60px;
    right: -60px;
    width: 220px;
    height: 220px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
  }

  .ws-why-card::after {
    content: '';
    position: absolute;
    bottom: -40px;
    left: -40px;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: rgba(255,255,255,0.04);
  }

  .ws-eyebrow {
    font-size: 11px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.55);
    margin-bottom: 12px;
  }

  .ws-why-title {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 2rem;
    line-height: 1.2;
    font-weight: 400;
    margin: 0 0 36px;
    color: #fff;
  }

  .ws-why-title em {
    font-style: italic;
    color: #7ECFEC;
  }

  .ws-features {
    display: flex;
    flex-direction: column;
    gap: 14px;
    position: relative;
    z-index: 1;
  }

  .ws-feature {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.93rem;
    font-weight: 400;
    color: rgba(255,255,255,0.88);
    line-height: 1.4;
  }

  .ws-check {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(126, 207, 236, 0.2);
    border: 1.5px solid rgba(126, 207, 236, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .ws-check svg {
    width: 11px;
    height: 11px;
    stroke: #7ECFEC;
    stroke-width: 2.5;
    fill: none;
  }

  .ws-watermark {
    position: absolute;
    bottom: -12px;
    right: 24px;
    font-size: 7rem;
    opacity: 0.1;
    user-select: none;
    z-index: 0;
    line-height: 1;
  }

  /* ── Specialists Panel ── */
  .ws-specialists {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .ws-specialists-header {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .ws-specialists-title {
    font-family: 'DM Serif Display', Georgia, serif;
    font-size: 2rem;
    font-weight: 400;
    color: #0B3A52;
    margin: 0;
    line-height: 1.2;
  }

  .ws-underline {
    width: 48px;
    height: 3px;
    background: linear-gradient(90deg, #0B4F6C, #1089B0);
    border-radius: 2px;
  }

  .ws-doctors-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .ws-doctor-card {
    background: #fff;
    border-radius: 16px;
    padding: 24px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 10px;
    border: 1px solid #E4ECF2;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    cursor: default;
  }

  .ws-doctor-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 32px rgba(11, 79, 108, 0.12);
  }

  .ws-avatar {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    overflow: hidden;
  }

  .ws-avatar.f {
    background: linear-gradient(135deg, #E8F5FB 0%, #C6E9F5 100%);
  }

  .ws-avatar.m {
    background: linear-gradient(135deg, #EBF3EC 0%, #C5DFCA 100%);
  }

  .ws-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  .ws-doctor-name {
    font-size: 0.9rem;
    font-weight: 600;
    color: #0B3A52;
    line-height: 1.3;
  }

  .ws-doctor-spec {
    font-size: 0.78rem;
    color: #6B8A9A;
    font-weight: 400;
    line-height: 1.4;
  }

  .ws-badge {
    display: inline-block;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: #0B4F6C;
    background: #E3F3FA;
    border-radius: 20px;
    padding: 3px 10px;
  }

  .ws-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 14px 32px;
    background: #0B4F6C;
    color: #fff;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 100px;
    text-decoration: none;
    letter-spacing: 0.02em;
    transition: background 0.18s ease, transform 0.18s ease;
    align-self: flex-start;
  }

  .ws-btn:hover {
    background: #0D6B8C;
    transform: translateX(2px);
  }

  .ws-btn svg {
    width: 16px;
    height: 16px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
  }

  @media (max-width: 820px) {
    .ws-container {
      grid-template-columns: 1fr;
    }
    .ws-why-card {
      padding: 36px 28px;
    }
  }

  @media (max-width: 480px) {
    .ws-doctors-grid {
      grid-template-columns: 1fr;
    }
  }
`;

const CheckIcon = () => (
  <svg viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
    <polyline points="2,6 5,9 10,3" />
  </svg>
);

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
    <line x1="2" y1="8" x2="13" y2="8" />
    <polyline points="9,4 13,8 9,12" />
  </svg>
);

const features = [
  "24/7 Emergency Services",
  "Personalized Care Plans",
  "Experienced Specialists",
  "Family-Centered Approach",
  "Modern Medical Equipment",
  "Affordable Services",
  "Safe Delivery Facilities",
  "Compassionate Care Team",
];

const doctors = [
  {
    name: "Dr. Hana Tesfaye",
    spec: "Obstetrician & Gynecologist",
    gender: "f",
    badge: "OB-GYN",
    emoji: "👩‍⚕️",
    img: null,
  },
  {
    name: "Dr. Samuel Bekele",
    spec: "Pediatric Specialist",
    gender: "m",
    badge: "Pediatrics",
    emoji: "👨‍⚕️",
    img: null,
  },
  {
    name: "Dr. Meron Desta",
    spec: "Neonatal Care Specialist",
    gender: "f",
    badge: "Neonatology",
    emoji: null,
    img: "/doctor.png",
  },
  {
    name: "Dr. Elias Alemu",
    spec: "Maternal-Fetal Medicine",
    gender: "m",
    badge: "MFM",
    emoji: null,
    img: "/doctor.png",
  },
];

const WhySpecialists = () => {
  const [imgErrors, setImgErrors] = useState({});

  const handleImgError = (idx) => {
    setImgErrors((prev) => ({ ...prev, [idx]: true }));
  };

  return (
    <>
      <style>{styles}</style>
      <section className="ws-root">
        <div className="ws-container">
          {/* Why Aimero */}
          <div className="ws-why-card">
            <p className="ws-eyebrow">Our Commitment</p>
            <h2 className="ws-why-title">
              Why Choose <em>Aimero?</em>
            </h2>
            <div className="ws-features">
              {features.map((f) => (
                <div className="ws-feature" key={f}>
                  <span className="ws-check">
                    <CheckIcon />
                  </span>
                  {f}
                </div>
              ))}
            </div>
            <div className="ws-watermark">👩‍⚕️</div>
          </div>

          {/* Specialists */}
          <div className="ws-specialists">
            <div className="ws-specialists-header">
              <p className="ws-eyebrow">Expert Team</p>
              <h2 className="ws-specialists-title">Meet Our Specialists</h2>
              <div className="ws-underline" />
            </div>

            <div className="ws-doctors-grid">
              {doctors.map((doc, idx) => (
                <div className="ws-doctor-card" key={doc.name}>
                  <div className={`ws-avatar ${doc.gender}`}>
                    {doc.img && !imgErrors[idx] ? (
                      <img
                        src={doc.img}
                        alt={doc.name}
                        onError={() => handleImgError(idx)}
                      />
                    ) : (
                      <span>{doc.emoji || (doc.gender === "f" ? "👩‍⚕️" : "👨‍⚕️")}</span>
                    )}
                  </div>
                  <div className="ws-doctor-name">{doc.name}</div>
                  <div className="ws-doctor-spec">{doc.spec}</div>
                  <span className="ws-badge">{doc.badge}</span>
                </div>
              ))}
            </div>

            <a
              href="#"
              className="ws-btn"
              onClick={(e) => e.preventDefault()}
            >
              View All Doctors <ArrowIcon />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhySpecialists;