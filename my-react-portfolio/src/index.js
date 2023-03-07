import React from 'react';
import ReactDOM from 'react-dom/client';
import "./About.css";
import "./Contact.css";
// import './Footer.css';
import './index.css';
import './Project.css';
import "./Resume.css";
import './Navigation.css';
import App from './App';
import "bootswatch/dist/lux/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
