import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Nav from './navbar.jsx'
import reportWebVitals from './reportWebVitals';
import Kontakt from './kontakt.jsx'
import Slideshow from './slideshow.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav/>
    <App />
  </React.StrictMode>
);

reportWebVitals();
