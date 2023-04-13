import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "./bootstrap-override.scss";
import reportWebVitals from './reportWebVitals';
import "./i18n";
import LangugeSelector from "./components/LanguageSelector";
import ApiProgress from "./shared/ApiProgress";
import UserSignupPage from "./pages/UserSignupPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <div>
        <React.StrictMode>
            <ApiProgress>
                {/*<LoginPage/>*/}
            <UserSignupPage/>
            </ApiProgress>

            <LangugeSelector/>
        </React.StrictMode>
    </div>
);


reportWebVitals();
