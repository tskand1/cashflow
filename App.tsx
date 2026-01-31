import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import SpecialMachinery from './pages/SpecialMachinery';
import PassengerCars from './pages/PassengerCars';
import Trucks from './pages/Trucks';
import RealEstate from './pages/RealEstate';
import Finansirovanie from './pages/Finansirovanie';
import AlternativaKreditu from './pages/AlternativaKreditu';
import DengiDlyaBiznesa from './pages/DengiDlyaBiznesa';
import CalculatorPage from './pages/CalculatorPage';

// Component to handle scrolling behavior
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // If there is a hash, scroll to it smoothly
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // If no hash, scroll to top instantly
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <div className="antialiased text-slate-900 bg-white">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/passenger-cars" element={<PassengerCars />} />
        {/* Route updated from /trucks to /cargo-transport per requirements */}
        <Route path="/cargo-transport" element={<Trucks />} />
        <Route path="/special-machinery" element={<SpecialMachinery />} />
        <Route path="/real-estate" element={<RealEstate />} />
        <Route path="/finansirovanie-biznesa" element={<Finansirovanie />} />
        <Route path="/alternativa-kreditu" element={<AlternativaKreditu />} />
        <Route path="/dengi-dlya-biznesa" element={<DengiDlyaBiznesa />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </div>
  );
}

export default App;