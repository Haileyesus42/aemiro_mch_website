import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Journey from './components/Journey';
import WhySpecialists from './components/WhySpecialists';
import InfoGrid from './components/InfoGrid';
import Footer from './components/Footer';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import AppointmentBooking from './pages/AppointmentBooking';
import Blog from './pages/Blog';
import Careers from './pages/Careers';
import DoctorsDirectory from './pages/DoctorsDirectory';
import FAQ from './pages/FAQ';
import ServicesOverview from './pages/ServicesOverview';

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Navigation />
        <Hero />
        <Stats />
        <Services />
        <Journey />
        <WhySpecialists />
        <InfoGrid />
        <Footer />
      </div>
    </Router>
  );
}

export default App;