import React, { Component } from 'react';
import AuthService from './service/AuthService';
import withAuth from './service/withAuth';

import AddNews from "./AddNews";


class Admin extends Component {
    render() {
        return (
            <div>
                <AddNews />
            </div>
        );
    }
}

export default withAuth(Admin);