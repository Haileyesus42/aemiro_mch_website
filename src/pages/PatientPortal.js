import React, { useState } from 'react';

const PatientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real application, this would connect to an authentication API
    if(credentials.username && credentials.password) {
      setIsLoggedIn(true);
    } else {
      alert('Please enter valid credentials');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCredentials({ username: '', password: '' });
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
  };

  // Mock patient data
  const patientInfo = {
    name: 'Jane Doe',
    dob: '05/12/1985',
    phone: '+251 911 123 456',
    email: 'jane.doe@example.com',
    address: '123 Main St, Addis Ababa, Ethiopia',
    insurance: 'Ethiopian National Insurance',
    policyNumber: 'ENI-123456789'
  };

  const appointments = [
    { id: 1, date: '2024-05-15', time: '10:00 AM', provider: 'Dr. Hana Tesfaye', type: 'Prenatal Checkup' },
    { id: 2, date: '2024-05-22', time: '02:00 PM', provider: 'Dr. Samuel Bekele', type: 'Child Health Checkup' },
    { id: 3, date: '2024-06-01', time: '09:00 AM', provider: 'Dr. Meron Desta', type: 'Postnatal Visit' }
  ];

  const labResults = [
    { id: 1, testName: 'Complete Blood Count', date: '2024-04-20', status: 'Normal' },
    { id: 2, testName: 'Blood Sugar', date: '2024-04-20', status: 'Normal' },
    { id: 3, testName: 'Ultrasound', date: '2024-04-25', status: 'Pending' }
  ];

  return (
    <div className="patient-portal">
      <div className="container">
        <h1>Patient Portal</h1>
        {!isLoggedIn ? (
          <div className="login-container">
            <h2>Access Your Health Information</h2>
            <p>Log in to view your medical records, schedule appointments, and communicate with your healthcare team.</p>
            
            <form onSubmit={handleLogin} className="login-form">
              <div className="form-group">
                <label htmlFor="username">Username or Email</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-actions">
                <button type="submit" className="btn-primary">Log In</button>
              </div>
            </form>
            
            <div className="portal-features">
              <h3>Portal Features</h3>
              <ul>
                <li>View test results and medical records</li>
                <li>Schedule and manage appointments</li>
                <li>Communicate securely with providers</li>
                <li>Request prescription renewals</li>
                <li>Update personal and insurance information</li>
                <li>View billing statements</li>
                <li>Access educational materials</li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="portal-dashboard">
            <div className="dashboard-header">
              <h2>Welcome, {patientInfo.name}</h2>
              <button onClick={handleLogout} className="btn-secondary">Log Out</button>
            </div>
            
            <div className="dashboard-content">
              <div className="dashboard-section">
                <h3>Personal Information</h3>
                <div className="info-grid">
                  <div className="info-item">
                    <label>Name:</label>
                    <span>{patientInfo.name}</span>
                  </div>
                  <div className="info-item">
                    <label>Date of Birth:</label>
                    <span>{patientInfo.dob}</span>
                  </div>
                  <div className="info-item">
                    <label>Phone:</label>
                    <span>{patientInfo.phone}</span>
                  </div>
                  <div className="info-item">
                    <label>Email:</label>
                    <span>{patientInfo.email}</span>
                  </div>
                  <div className="info-item">
                    <label>Insurance:</label>
                    <span>{patientInfo.insurance}</span>
                  </div>
                  <div className="info-item">
                    <label>Policy Number:</label>
                    <span>{patientInfo.policyNumber}</span>
                  </div>
                </div>
              </div>
              
              <div className="dashboard-section">
                <h3>Upcoming Appointments</h3>
                <div className="appointments-list">
                  {appointments.map(app => (
                    <div key={app.id} className="appointment-item">
                      <div className="app-date">{app.date}</div>
                      <div className="app-time">{app.time}</div>
                      <div className="app-provider">{app.provider}</div>
                      <div className="app-type">{app.type}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="dashboard-section">
                <h3>Recent Lab Results</h3>
                <div className="results-list">
                  {labResults.map(result => (
                    <div key={result.id} className="result-item">
                      <div className="result-name">{result.testName}</div>
                      <div className="result-date">{result.date}</div>
                      <div className={`result-status ${result.status.toLowerCase()}`}>{result.status}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="dashboard-section">
                <h3>Quick Actions</h3>
                <div className="quick-actions">
                  <button className="btn-secondary">Schedule Appointment</button>
                  <button className="btn-secondary">Message Provider</button>
                  <button className="btn-secondary">View Test Results</button>
                  <button className="btn-secondary">Request Records</button>
                  <button className="btn-secondary">Update Profile</button>
                  <button className="btn-secondary">Request Prescription</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientPortal;