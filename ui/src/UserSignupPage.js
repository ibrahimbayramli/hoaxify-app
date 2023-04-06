import React from "react";
import axios from "axios";

class UserSignupPage extends React.Component {


    state={
        username:null,
        displayName:null,
        password:null,
        passwordRepeat:null
    }
    onChange=e=>{
        const {name,value}=e.target;

        this.setState({
            [name]:value
        })
    }
    onClickSignup=event=>{
        event.preventDefault();
        const {username,displayName,password}=this.state;
        const body={
            username,
            displayName,
            password

        }
       axios.post("http://localhost:8088/api/1.0/users",body)
    }



    render() {
        return (

            <form >
                <h1>Sign Up</h1>
                <div>
                    <label >Username</label>
                    <input name={"username"} onChange={this.onChange}/>
                </div>
                <div>
                    <label >Display Name</label>
                    <input name={"displayName"} onChange={this.onChange} />
                </div>
                <div>
                    <label >Password</label>
                    <input name={"password"} onChange={this.onChange} type={"password"} />
                </div>
                <div>
                    <label >Password Repeat</label>
                    <input name={"passwordRepeat"} onChange={this.onChange} type={"password"} />
                </div>
                <div>

                    <button onClick={this.onClickSignup} >Sign Up</button>
                </div>
                
            </form>
    )}

}

export default UserSignupPage;