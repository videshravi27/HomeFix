import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ServicesContextProvider } from './context/ServicesContext';
import { AuthContextProvider } from './context/AuthContext';
import { ReviewsContextProvider } from './context/ReviewsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <ServicesContextProvider>
        <ReviewsContextProvider>
          <App />
        </ReviewsContextProvider>
      </ServicesContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
