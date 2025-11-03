import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TechShowcase from './components/TechShowcase';
import AIPredictionAndAbout from './components/AIPredictionAndAbout';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0E0E1A] text-white">
      <Hero />
      <Features />
      <TechShowcase />
      <AIPredictionAndAbout />
    </div>
  );
}

export default App;
