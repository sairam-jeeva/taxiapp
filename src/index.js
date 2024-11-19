// src/index.js (Frontend)

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Your main App component
import './index.css'; // Optional: Your global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
