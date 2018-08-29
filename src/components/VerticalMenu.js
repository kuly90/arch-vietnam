import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

class VerticalMenu extends Component {
    render() {
        return (
            <div>
                <div className="vertical-menu">
                    <NavLink to="/adminPage">Add News</NavLink>
                    <NavLink to="/customers">Customers</NavLink>
                    <br />
                    <button className="btn btn danger">LogOut</button>
                </div>
            </div>

        );
    }
}

export default VerticalMenu;