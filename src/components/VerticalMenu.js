import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import AuthService from './service/AuthService';

const Auth = new AuthService();

class VerticalMenu extends Component {
    constructor(props){
        super(props);
        this.state = {
            countMessage: '0'
        }
    }

    // componentDidMount(){
    //     fetch('http://localhost:8080/customers/count')
	// 		.then(response => response.json())
	// 		.then(response => this.setState({countMessage: response.data},()=>console.log('count',response.data)
    //         ))
	// 		.catch(err => console.error(err))
    // }

    handleLogout(){
        Auth.logout()
        this.props.history.push('/login');
        
      }

    render() {
        const { countMessage } = this.state;
        console.log(countMessage);
        
        return (
            <div>
                <div className="vertical-menu">
                    <NavLink to="/adminPage">Add News</NavLink>
                    <NavLink to="/customers">Customers 
                        {
                            countMessage === '0' ?
                             <span></span>
                            :
                            <span className="badge" style={{float:'right'}}>{countMessage}</span>
                        }
                                       
                    </NavLink>
                    <br />
                    <button onClick={this.handleLogout.bind(this)} className="btn btn danger">LogOut</button>
                </div>
            </div>

        );
    }
}

export default withRouter(VerticalMenu);