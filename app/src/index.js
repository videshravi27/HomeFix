import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ServicesContextProvider } from './context/ServicesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ServicesContextProvider>
      <App />
    </ServicesContextProvider>
  </React.StrictMode>
);
