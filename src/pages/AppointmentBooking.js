import React, { useState } from 'react';

const AppointmentBooking = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    doctor: '',
    date: '',
    time: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    reason: ''
  });

  const services = [
    { id: 'maternal', name: 'Maternal Care' },
    { id: 'delivery', name: 'Delivery Services' },
    { id: 'newborn', name: 'Newborn Care' },
    { id: 'child', name: 'Child Health' },
    { id: 'womens', name: 'Women\'s Health' },
    { id: 'emergency', name: 'Emergency Care' }
  ];

  const doctors = [
    { id: 'hana', name: 'Dr. Hana Tesfaye', specialty: 'Obstetrician & Gynecologist' },
    { id: 'samuel', name: 'Dr. Samuel Bekele', specialty: 'Pediatric Specialist' },
    { id: 'meron', name: 'Dr. Meron Desta', specialty: 'Neonatal Care Specialist' },
    { id: 'elias', name: 'Dr. Elias Alemu', specialty: 'Maternal-Fetal Medicine Specialist' },
    { id: 'aster', name: 'Dr. Aster Woldemariam', specialty: 'Pediatric Cardiologist' },
    { id: 'dawit', name: 'Dr. Dawit Haile', specialty: 'Anesthesiologist' }
  ];

  const timeSlots = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Appointment booked successfully! You will receive a confirmation email shortly.');
    // In a real app, you would send the form data to a server here
  };

  return (
    <main className="appointment-booking-page">
      <section className="appointment-hero">
        <div className="container">
          <h1>Book an Appointment</h1>
          <p>Schedule your visit with our healthcare professionals</p>
        </div>
      </section>

      <section className="appointment-process">
        <div className="container">
          <div className="progress-steps">
            <div className={`step ${currentStep >= 1 ? 'active' : ''}`}>
              <span className="step-number">1</span>
              <span className="step-label">Service & Doctor</span>
            </div>
            <div className={`step ${currentStep >= 2 ? 'active' : ''}`}>
              <span className="step-number">2</span>
              <span className="step-label">Date & Time</span>
            </div>
            <div className={`step ${currentStep >= 3 ? 'active' : ''}`}>
              <span className="step-number">3</span>
              <span className="step-label">Personal Info</span>
            </div>
            <div className={`step ${currentStep >= 4 ? 'active' : ''}`}>
              <span className="step-number">4</span>
              <span className="step-label">Confirm</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="appointment-form">
            {/* Step 1: Service and Doctor Selection */}
            {currentStep === 1 && (
              <div className="form-step">
                <h2>Select Service and Doctor</h2>
                
                <div className="form-group">
                  <label htmlFor="service">Service Type</label>
                  <select 
                    id="service" 
                    name="service" 
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>{service.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="doctor">Preferred Doctor</label>
                  <select 
                    id="doctor" 
                    name="doctor" 
                    value={formData.doctor}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Choose a doctor</option>
                    {doctors.map(doctor => (
                      <option key={doctor.id} value={doctor.id}>
                        {doctor.name} - {doctor.specialty}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-navigation">
                  <button type="button" disabled>Previous</button>
                  <button type="button" onClick={nextStep}>Next</button>
                </div>
              </div>
            )}

            {/* Step 2: Date and Time Selection */}
            {currentStep === 2 && (
              <div className="form-step">
                <h2>Select Date and Time</h2>
                
                <div className="form-group">
                  <label htmlFor="date">Preferred Date</label>
                  <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    value={formData.date}
                    onChange={handleChange}
                    required
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="form-group">
                  <label>Available Time Slots</label>
                  <div className="time-slots">
                    {timeSlots.map((time, index) => (
                      <button 
                        key={index}
                        type="button"
                        className={`time-slot ${formData.time === time ? 'selected' : ''}`}
                        onClick={() => setFormData({...formData, time})}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="form-navigation">
                  <button type="button" onClick={prevStep}>Previous</button>
                  <button type="button" onClick={nextStep}>Next</button>
                </div>
              </div>
            )}

            {/* Step 3: Personal Information */}
            {currentStep === 3 && (
              <div className="form-step">
                <h2>Your Information</h2>
                
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      type="text" 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      type="text" 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input 
                      type="date" 
                      id="dob" 
                      name="dob" 
                      value={formData.dob}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select 
                      id="gender" 
                      name="gender" 
                      value={formData.gender}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="reason">Reason for Visit</label>
                  <textarea 
                    id="reason" 
                    name="reason" 
                    value={formData.reason}
                    onChange={handleChange}
                    rows="4"
                    placeholder="Briefly describe the reason for your visit..."
                  ></textarea>
                </div>

                <div className="form-navigation">
                  <button type="button" onClick={prevStep}>Previous</button>
                  <button type="button" onClick={nextStep}>Next</button>
                </div>
              </div>
            )}

            {/* Step 4: Confirmation */}
            {currentStep === 4 && (
              <div className="form-step">
                <h2>Confirm Your Appointment</h2>
                
                <div className="confirmation-summary">
                  <h3>Appointment Details</h3>
                  <p><strong>Service:</strong> {services.find(s => s.id === formData.service)?.name || 'Not selected'}</p>
                  <p><strong>Doctor:</strong> {doctors.find(d => d.id === formData.doctor)?.name || 'Not selected'}</p>
                  <p><strong>Date:</strong> {formData.date || 'Not selected'}</p>
                  <p><strong>Time:</strong> {formData.time || 'Not selected'}</p>
                  
                  <h3>Patient Information</h3>
                  <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                  <p><strong>Email:</strong> {formData.email}</p>
                  <p><strong>Phone:</strong> {formData.phone}</p>
                  <p><strong>Reason:</strong> {formData.reason}</p>
                </div>

                <div className="form-navigation">
                  <button type="button" onClick={prevStep}>Previous</button>
                  <button type="submit">Confirm Appointment</button>
                </div>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
};

export default AppointmentBooking;