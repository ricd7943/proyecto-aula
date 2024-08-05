import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'; // Solo si estás importando CSS directamente en JS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
