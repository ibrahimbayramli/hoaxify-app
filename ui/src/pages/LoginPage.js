import React, {Component} from 'react';
import Input from "../components/Input";
import {login} from "../api/apiCalls";
import ButtonWithProgress from "../components/ButtonWithProgress";
import {withApiProgress} from "../shared/ApiProgress";
import {withTranslation} from "react-i18next";

class LoginPage extends Component {

    state = {
        username: null,
        password: null,
        error: null
    }
    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value,
            error: null
        })
    }


    onClickLogin = async event => {
        event.preventDefault();
        const {username, password} = this.state;
        const creds = {
            username,
            password
        };
        const {push} = this.props.history;
        this.setState({error: null})
        try {
            await login(creds);
            push('/');

        } catch (err) {
            this.setState({
                error: err.response.data.message
            })
        }
    }

    render() {
        const {t, pendingApiCall} = this.props;
        const {username, password, error} = this.state;
        const buttonEnabled = username && password;
        return (
            <div className={"container"}>
                <form>
                    <h1 className={"text-center"}>{t("Login")}</h1>
                    <Input label={t("Username")} name={"username"} onChange={this.onChange}/>
                    <Input label={t("Password")} name={"password"} onChange={this.onChange} type={"password"}/>
                    {this.state.error && <div className="alert alert-danger mt-3" role="alert">
                        {error}
                    </div>}
                    <div className="text-center mt-3">

                        <ButtonWithProgress
                            onClick={this.onClickLogin}
                            disabled={!buttonEnabled || pendingApiCall}
                            pendingApiCall={pendingApiCall}
                            text={t('Login')}/>

                    </div>

                </form>
            </div>
        );
    }
}

const LoginPageWithApiProgress = withApiProgress(LoginPage, "/api/1.0/auth");
const LoginPageWithTranslation = withTranslation()(LoginPageWithApiProgress);


export default LoginPageWithTranslation;