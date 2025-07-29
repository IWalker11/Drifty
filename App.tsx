import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<h1>Welcome to Drifty!</h1>} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
