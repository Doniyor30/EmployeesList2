import React from 'react';
import ReactDOM from 'react-dom/client';  // Импорт из 'react-dom/client'
import './index.css';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root')); // Создание корня
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
