// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';  // Import from react-dom/client (React 18+)
import './index.css';  // Optional: if you have global styles
import App from './App';

// For React 18+:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
