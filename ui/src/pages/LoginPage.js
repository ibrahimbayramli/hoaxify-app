import React, {Component} from 'react';
import Input from "../components/Input";

class LoginPage extends Component {

    state = {
        username: null,
        password: null
    }
    onChange = event => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className={"container"}>
                <form>
                    <h1 className={"text-center"}>Login</h1>
                    <Input label={"Username"} name={"username"} onChange={this.onChange}/>
                    <Input label={"Password"} name={"password"} onChange={this.onChange} type={"password"}/>
                    <div className="text-center mt-3">
                        <button className={"btn btn-primary"}>
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}

export default LoginPage;