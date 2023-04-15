import React from 'react';
import LanguageSelector from '../components/LanguageSelector';
import {HashRouter, Redirect, Route, Switch} from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import UserSignupPage from "../pages/UserSignupPage";
import UserPage from "../pages/UserPage";

function App() {
    return (
        <div>
            <HashRouter>
                <Switch>
                    <Route exact path={"/"} component={HomePage}/>
                    <Route path={"/login"} component={LoginPage}/>
                    <Route path={"/signup"} component={UserSignupPage}/>
                    <Route path={"/user/:username"} component={UserPage}/>
                    <Redirect to={"/"}/>
                </Switch>
            </HashRouter>
            <LanguageSelector/>
        </div>
    );
}

export default App;