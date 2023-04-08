import React from "react";
import {signup} from "../api/apiCalls";

class UserSignupPage extends React.Component {


    state = {
        username: null,
        displayName: null,
        password: null,
        passwordRepeat: null,
        pendingApiCall: false
    }
    onChange = e => {
        const {name, value} = e.target;

        this.setState({
            [name]: value
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

        try{
            const response=await signup(body) ;
            console.log(response);
        }catch (error){

        }
        this.setState({pendingApiCall: false});


    }


    render() {
        const {pendingApiCall}=this.state
        return (

            <div className="container">
                <form>
                    <h1 className={"text-center"}>Sign Up</h1>
                    <div className={"form-group"}>
                        <label>Username</label>
                        <input className={"form-control"} name={"username"} onChange={this.onChange}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Display Name</label>
                        <input className={"form-control"} name={"displayName"} onChange={this.onChange}/>
                    </div>
                    <div className={"form-group"}>
                        <label>Password</label>
                        <input className={"form-control"} name={"password"} onChange={this.onChange} type={"password"}/>
                    </div>
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