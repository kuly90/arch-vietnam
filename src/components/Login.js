import React, { Component } from 'react';
import AuthService from './service/AuthService';
import PropTypes from 'prop-types';

class Login extends Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
    componentWillMount() {
        if (this.Auth.loggedIn()) {
            this.props.history.replace('/adminPage');
        }
    }

    render() {
        return (
            <div className="container">
                <h2>Login form</h2>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Email:</label>
                    <input type="txt" className="form-control"
                        placeholder="Enter username" name="username"
                        onChange={this.handleChange} />
                    <label>Password:</label>
                    <input type="password" className="form-control"
                        placeholder="Enter password" name="password"
                        onChange={this.handleChange} />
                    <div className="checkbox">
                        <label><input type="checkbox" name="remember" /> Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                </form>
            </div>
        );
    }

    handleFormSubmit(e) {
        e.preventDefault();
        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                this.props.history.replace('/adminPage')
            })

            .catch(err => {
                alert(err);
            })
    }

    handleChange(e) {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }
}
Login.propTypes = {
    location: PropTypes.object.isRequired
};

export default Login;