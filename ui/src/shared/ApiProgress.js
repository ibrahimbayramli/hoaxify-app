import React, {Component} from 'react';
import axios from "axios";

class ApiProgress extends Component {
    state = {
        pendingApiCall: false,
    }

    componentDidMount() {
        axios.interceptors.request.use((rq) => {
            this.setState({pendingApiCall: true})
            return rq;
        })
        axios.interceptors.response.use((rq) => {
            this.setState({pendingApiCall: false})
            return rq;
        }, (error) => {
            this.setState({pendingApiCall: false})
            throw error;
        })
    }

    render() {
        const {pendingApiCall} = this.state
        return (
            <div>
                {React.cloneElement(this.props.children, {
                    pendingApiCall: pendingApiCall,
                })}
            </div>
        );
    }
}

export default ApiProgress;