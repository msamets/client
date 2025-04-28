// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Features from './pages/Features';
import Services from './pages/Services';

function App() {
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
