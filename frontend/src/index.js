import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PdfsContextProvider } from './context/PDFContext';
import { AuthContextProvider } from './context/AuthContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PdfsContextProvider>
        <App />
      </PdfsContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


