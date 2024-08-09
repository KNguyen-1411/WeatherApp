import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//config
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import { StateContextProvider } from './Context/index.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StateContextProvider>
    <App />
  </StateContextProvider>
);

