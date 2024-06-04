import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ProvidersContextProvider } from './context/ProviderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProvidersContextProvider>
      <App />
    </ProvidersContextProvider>
  </React.StrictMode>
);
