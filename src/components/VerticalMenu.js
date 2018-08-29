import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import AuthService from './service/AuthService';

const Auth = new AuthService();

class VerticalMenu extends Component {

    handleLogout(){
        Auth.logout()
        this.props.history.push('/login');
        
      }

    render() {
        return (
            <div>
                <div className="vertical-menu">
                    <NavLink to="/adminPage">Add News</NavLink>
                    <NavLink to="/customers">Customers</NavLink>
                    <br />
                    <button onClick={this.handleLogout.bind(this)} className="btn btn danger">LogOut</button>
                </div>
            </div>

        );
    }
}

export default withRouter(VerticalMenu);