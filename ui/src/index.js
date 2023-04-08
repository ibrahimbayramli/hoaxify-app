import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./bootstrap-override.scss";
import reportWebVitals from './reportWebVitals';
import UserSignupPage from "./UserSignupPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserSignupPage/>
  </React.StrictMode>
);


reportWebVitals();
