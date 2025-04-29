// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Features from './pages/Features';
import Services from './pages/Services';
import { initializeAnimations, refreshAnimations } from './utils/AnimationUtils';

function App() {
  useEffect(() => {
    // Initialize animations
    initializeAnimations();

    // Refresh animations on window resize
    window.addEventListener('resize', refreshAnimations);

    return () => {
      window.removeEventListener('resize', refreshAnimations);
    };
  }, []);

  return (
    <Router>
      <div>
        {/* Route Definitions */}
        <Routes>
          {/** Frontend Urls */}
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/services" element={<Services />} />
          <Route path="*" element={<Home />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
