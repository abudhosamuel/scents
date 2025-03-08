// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes instead of Switch
import Home from './pages/Home';
import Perfumes from './pages/Perfumes';
import Contact from './pages/Contact'; // Ensure this file exists, or comment out temporarily

const App = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Home />} />  {/* Define the element instead of component */}
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;
