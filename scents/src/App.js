// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Perfumes from './pages/Perfumes';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';  // Global styles
import './pages/Home.css';  // Import Home page styles
import './components/Navbar.css';  // Navbar styles
import './components/Footer.css';  // Footer styles

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfumes" element={<Perfumes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
