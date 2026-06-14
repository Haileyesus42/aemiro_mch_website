import React, { useState } from 'react';

const DoctorsDirectory = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [filter, setFilter] = useState('all');

  const doctors = [
    {
      id: 1,
      name: "Dr. Hana Tesfaye",
      specialty: "Obstetrician & Gynecologist",
      experience: "12 years",
      education: "MD, MPH from Jimma University",
      languages: ["Amharic", "English"],
      bio: "Dr. Hana Tesfaye is a board-certified obstetrician and gynecologist with over 12 years of experience. She specializes in high-risk pregnancies and minimally invasive surgical procedures.",
      image: "/doctor.png",
      gender: "female"
    },
    {
      id: 2,
      name: "Dr. Samuel Bekele",
      specialty: "Pediatric Specialist",
      experience: "10 years",
      education: "MD from Addis Ababa University",
      languages: ["Amharic", "English"],
      bio: "Dr. Samuel Bekele is a renowned pediatrician specializing in neonatal care and childhood developmental disorders. He has published numerous papers on child health in African populations.",
      image: "/doctor.png",
      gender: "male"
    },
    {
      id: 3,
      name: "Dr. Meron Desta",
      specialty: "Neonatal Care Specialist",
      experience: "8 years",
      education: "MD, Neonatology Fellowship",
      languages: ["Amharic", "English", "Tigrinya"],
      bio: "Dr. Meron Desta specializes in caring for premature and critically ill newborns. She leads our NICU team and is passionate about improving outcomes for vulnerable infants.",
      image: "/doctor.png",
      gender: "female"
    },
    {
      id: 4,
      name: "Dr. Elias Alemu",
      specialty: "Maternal-Fetal Medicine Specialist",
      experience: "15 years",
      education: "MD, MFM Fellowship",
      languages: ["Amharic", "English"],
      bio: "Dr. Elias Alemu focuses on high-risk pregnancies and maternal-fetal complications. He has extensive experience in managing complex cases and providing specialized care.",
      image: "/doctor.png",
      gender: "male"
    },
    {
      id: 5,
      name: "Dr. Aster Woldemariam",
      specialty: "Pediatric Cardiologist",
      experience: "9 years",
      education: "MD, Pediatric Cardiology Fellowship",
      languages: ["Amharic", "English"],
      bio: "Dr. Aster Woldemariam specializes in diagnosing and treating heart conditions in children. She performs advanced cardiac procedures and provides comprehensive cardiac care.",
      image: "/doctor.png",
      gender: "female"
    },
    {
      id: 6,
      name: "Dr. Dawit Haile",
      specialty: "Anesthesiologist",
      experience: "11 years",
      education: "MD, Anesthesia Residency",
      languages: ["Amharic", "English"],
      bio: "Dr. Dawit Haile specializes in obstetric anesthesia and pain management during labor and delivery. He ensures safe and comfortable experiences for mothers.",
      image: "/doctor.png",
      gender: "male"
    }
  ];

  const filteredDoctors = filter === 'all' ? doctors : doctors.filter(doctor => 
    doctor.specialty.toLowerCase().includes(filter)
  );

  const handleDoctorClick = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const handleCloseModal = () => {
    setSelectedDoctor(null);
  };

  const handleClick = (e) => {
    e.preventDefault();
    // Handle click functionality here if needed
  };

  return (
    <main className="doctors-directory-page">
      
      <main className="doctors-directory-page">
        <section className="doctors-hero">
          <div className="container">
            <h1>Meet Our Medical Experts</h1>
            <p>Experienced specialists dedicated to your health and wellbeing</p>
          </div>
        </section>

        <section className="doctors-filter">
          <div className="container">
            <h2>Find a Specialist</h2>
            <div className="filter-options">
              <button 
                className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                onClick={() => setFilter('all')}
              >
                All Specialists
              </button>
              <button 
                className={`filter-btn ${filter === 'obstetrician' ? 'active' : ''}`}
                onClick={() => setFilter('obstetrician')}
              >
                Obstetricians
              </button>
              <button 
                className={`filter-btn ${filter === 'pediatric' ? 'active' : ''}`}
                onClick={() => setFilter('pediatric')}
              >
                Pediatricians
              </button>
              <button 
                className={`filter-btn ${filter === 'neonatal' ? 'active' : ''}`}
                onClick={() => setFilter('neonatal')}
              >
                Neonatal Care
              </button>
              <button 
                className={`filter-btn ${filter === 'cardio' ? 'active' : ''}`}
                onClick={() => setFilter('cardio')}
              >
                Cardiologists
              </button>
            </div>
          </div>
        </section>

        <section className="doctors-grid-section">
          <div className="container">
            <div className="doctors-grid">
              {filteredDoctors.map((doctor) => (
                <div 
                  key={doctor.id} 
                  className="doctor-card"
                  onClick={() => handleDoctorClick(doctor)}
                >
                  <div className={`doctor-avatar ${doctor.gender === 'female' ? 'f' : 'm'}`}>
                    <img src={doctor.image} alt={doctor.name} />
                  </div>
                  <div className="doctor-info">
                    <h3 className="doctor-name">{doctor.name}</h3>
                    <p className="doctor-specialty">{doctor.specialty}</p>
                    <p className="doctor-experience">{doctor.experience} experience</p>
                    <div className="doctor-languages">
                      {doctor.languages.map((lang, index) => (
                        <span key={index} className="language-tag">{lang}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {selectedDoctor && (
          <div className="doctor-modal-overlay" onClick={handleCloseModal}>
            <div className="doctor-modal" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={handleCloseModal}>×</button>
              <div className="doctor-modal-content">
                <div className="doctor-modal-header">
                  <div className={`doctor-avatar-large ${selectedDoctor.gender === 'female' ? 'f' : 'm'}`}>
                    <img src={selectedDoctor.image} alt={selectedDoctor.name} />
                  </div>
                  <div className="doctor-modal-text">
                    <h2>{selectedDoctor.name}</h2>
                    <h3>{selectedDoctor.specialty}</h3>
                    <p className="doctor-experience">{selectedDoctor.experience} experience</p>
                  </div>
                </div>
                
                <div className="doctor-details">
                  <h4>About Dr. {selectedDoctor.name.split(' ')[1]}</h4>
                  <p>{selectedDoctor.bio}</p>
                  
                  <h4>Education</h4>
                  <p>{selectedDoctor.education}</p>
                  
                  <h4>Languages Spoken</h4>
                  <div className="doctor-languages">
                    {selectedDoctor.languages.map((lang, index) => (
                      <span key={index} className="language-tag">{lang}</span>
                    ))}
                  </div>
                  
                  <div className="doctor-actions">
                    <a href="#" className="btn-service" onClick={handleClick}>Book Appointment</a>
                    <a href="#" className="btn-service-outline" onClick={handleClick}>View Schedule</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>

    </main>
  );
};

export default DoctorsDirectory;