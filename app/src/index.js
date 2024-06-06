import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ServicesContextProvider } from './context/ServicesContext';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ServicesContextProvider>
        <App />
      </ServicesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
