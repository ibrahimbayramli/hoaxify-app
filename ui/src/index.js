import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./bootstrap-override.scss";
import reportWebVitals from './reportWebVitals';
import LoginPage from "./pages/LoginPage";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage/>
  </React.StrictMode>
);


reportWebVitals();
