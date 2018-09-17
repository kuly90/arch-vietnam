import React, { Component } from 'react';
import { NavLink, withRouter } from "react-router-dom";
import AuthService from './service/AuthService';

const Auth = new AuthService();

class VerticalMenu extends Component {
	constructor(props) {
		super(props);
		this.state = {
			customers: []
		}
	}

	componentDidMount() {
		fetch('http://localhost:8080/customers/count')
			.then(response => response.json())
			.then(response => this.setState({ customers: response.data }))
			.catch(err => console.error(err))
	}

	handleLogout() {
		Auth.logout()
		this.props.history.push('/login');

	}

	render() {
		const { customers } = this.state;
		return (
			<div>
				<div className="vertical-menu">
					<NavLink to="/addUser">Add User</NavLink>
					<NavLink to="/listUsers">List Users</NavLink>
					<NavLink to="/addNews">Add News</NavLink>
					<NavLink to="/listNews">List News</NavLink>
					<NavLink to="/customers">Customers
                        {
							customers.length === 0 ?
								<span></span>
								:
								<span className="badge" style={{ float: 'right' }}>{customers.length}</span>
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