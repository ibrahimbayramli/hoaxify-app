import React from 'react';
import LanguageSelector from '../components/LanguageSelector';
import UserPage from "../pages/UserPage";

function App() {
    return (
        <div className="container">
            <UserPage/>
            <LanguageSelector />
        </div>
    );
}

export default App;