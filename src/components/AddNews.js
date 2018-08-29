import React, { Component } from 'react';
import VerticalMenu from "./VerticalMenu";

class AddNews extends Component {
    render() {
        return (
            <div className="container"> 
                <div className="row">
                    <div className="col-md-3">
                        <VerticalMenu/>
                    </div>
                    <div className="col-md-9">
                        <h1>Add News Here</h1>
                    </div>
                </div>             
               
            </div>
        );
    }
}

export default AddNews;