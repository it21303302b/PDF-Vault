import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { PdfsContextProvider } from './context/PDFContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PdfsContextProvider>
    <App />
    </PdfsContextProvider>
  </React.StrictMode>
);


