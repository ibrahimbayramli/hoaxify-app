import React from "react";
import {changeLanguage, signup} from "../api/apiCalls";
import Input from "../components/Input";
import {withTranslation} from "react-i18next"

class UserSignupPage extends React.Component {


    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false,
        errors: {}
    }
    onChange = e => {

        const {name, value} = e.target;
        const errors = {...this.state.errors};
        errors[name] = undefined;
        if (name === "password" || name === "passwordRepeat") {
            if (name === "password" && value !== this.state.passwordRepeat) {
                errors.passwordRepeat = this.props.t("Password mismatch");
            } else if (name === "passwordRepeat" && value !== this.state.password) {
                errors.passwordRepeat = this.props.t("Password mismatch");
            } else {
                errors.passwordRepeat = undefined;
            }
        }
        this.setState({
            [name]: value,
            errors
        })
    }
    onChangeLanguage=language=>{
        const {i18n}=this.props;
        i18n.changeLanguage(language);
        changeLanguage(language);
    }
    onClickSignup = async event => {
        event.preventDefault();
        const {username, displayName, password} = this.state;
        const body = {
            username,
            displayName,
            password

        }
        this.setState({pendingApiCall: true});

        try {
            const response = await signup(body);
            console.log(response);
        } catch (error) {
            if (error.response.data.validationErrors) {
                this.setState({errors: error.response.data.validationErrors})

            }
        }
        this.setState({pendingApiCall: false});


    }


    render() {
        const {pendingApiCall, errors} = this.state;
        const {username, displayName, password, passwordRepeat} = errors
        return (

            <div className="container">
                <form>
                    <h1 className={"text-center"}>{this.props.t("Sign Up")}</h1>

                    <Input name={"username"} label={this.props.t("Username")} error={username} onChange={this.onChange}/>
                    <Input name={"displayName"} label={this.props.t("Display Name")} error={displayName} onChange={this.onChange}/>
                    <Input name={"password"} label={this.props.t("Password")} error={password} onChange={this.onChange} type={"password"}/>
                    <Input name={"passwordRepeat"} label={this.props.t("Password Repeat")} error={passwordRepeat} onChange={this.onChange} type={"password"}/>


                    <div className="text-center mt-3">
                        <button
                            className={"btn btn-primary"}
                            onClick={this.onClickSignup}
                            disabled={pendingApiCall || passwordRepeat !== undefined}
                        >
                            {pendingApiCall && <span className="spinner-border spinner-border-sm me-1"></span>}
                            {this.props.t("Sign Up")}
                        </button>
                    </div>
                    <div>
                        <img src={"https://flagsapi.com/TR/flat/32.png"} style={{cursor:"pointer"}} alt={"Turkish Flag"} onClick={()=>{this.onChangeLanguage("tr")}}></img>
                        <img src={"https://flagsapi.com/US/flat/32.png"} style={{cursor:"pointer"}} alt={"USA Flag"} onClick={()=>{this.onChangeLanguage("en")}}></img>
                    </div>


                </form>
            </div>
        )
    }

}

const UserSignupPageWithTranslation = withTranslation()(UserSignupPage);

export default UserSignupPageWithTranslation;