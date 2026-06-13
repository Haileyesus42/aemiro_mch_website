import React from 'react';
import './App.css';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import AnatomicalUltrasound from './components/AnatomicalUltrasound';
import Journey from './components/Journey';
import WhySpecialists from './components/WhySpecialists';
import InfoGrid from './components/InfoGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Navigation />
      <Hero />
      <Stats />
      <Services />
      <AnatomicalUltrasound />
      <Journey />
      <WhySpecialists />
      <InfoGrid />
      <Footer />
    </div>
  );
}

export default App;