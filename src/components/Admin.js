import React, { Component } from 'react';
import withAuth from './service/withAuth';

import AddNews from "./AddNews";


class Admin extends Component {
    render() {
        return (
            <div classname="container">
                <AddNews />
            </div>
        );
    }
}

export default withAuth(Admin);