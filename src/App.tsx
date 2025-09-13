import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SignupPage from './components/SignupPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={
            <>
              <Header />
              <Hero />
              <Benefits />
              <Features />
              <HowItWorks />
              <Testimonials />
              <FAQ />
              <CTA />
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;