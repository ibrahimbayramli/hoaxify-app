import React from "react";
import {signup} from "../api/apiCalls";
import Input from "../components/Input";

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
        this.setState({
            [name]: value,
            errors
        })
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
        const {username,displayName,password} = errors
        return (

            <div className="container">
                <form>
                    <h1 className={"text-center"}>Sign Up</h1>

                    <Input name={"username"} label={"Username"} error={username} onChange={this.onChange}/>
                    <Input name={"displayName"} label={"Display Name"} error={displayName} onChange={this.onChange}/>
                    <Input name={"password"} label={"Password"} error={password} onChange={this.onChange} type={"password"}/>


                    <div className={"form-group"}>
                        <label>Password Repeat</label>
                        <input className={"form-control"} name={"passwordRepeat"} onChange={this.onChange} type={"password"}/>
                    </div>


                    <div className="text-center mt-3">
                        <button
                            className={"btn btn-primary"}
                            onClick={this.onClickSignup}
                            disabled={pendingApiCall}
                        >
                            {pendingApiCall && <span className="spinner-border spinner-border-sm me-1"></span>}
                            Sign Up
                        </button>
                    </div>


                </form>
            </div>
        )
    }

}

export default UserSignupPage;