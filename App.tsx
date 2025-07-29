import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './About';

const Home = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Welcome to Drifty</h1>
    <p>Modern catering, meal prep, and mobile food cart brand.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <nav style={{ padding: '1rem', backgroundColor: '#222', color: '#fff' }}>
        <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Home</Link>
        <Link to="/about" style={{ color: '#fff' }}>About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
