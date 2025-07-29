import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';

function App() {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
        <nav style={{ marginBottom: '20px', display: 'flex', gap: '15px', background: '#222', padding: '10px', borderRadius: '8px' }}>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
          <Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
          <Link to="/menu" style={{ color: '#fff', textDecoration: 'none' }}>Menu</Link>
          <Link to="/services" style={{ color: '#fff', textDecoration: 'none' }}>Services</Link>
          <Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<h1>Welcome to Drifty</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<h2>Our Street Food Menu is Coming Soon!</h2>} />
          <Route path="/services" element={<h2>We Cater, Meal Prep, and Feed the Community.</h2>} />
          <Route path="/contact" element={<h2>Contact Us at: drifty@support.com</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
