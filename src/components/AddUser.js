import React, { Component } from 'react';
import VerticalMenu from "./VerticalMenu";
import withAuth from './service/withAuth';
import FormAddUser from './FormAddUser';

class AddUser extends Component {

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<VerticalMenu />
					</div>
					<FormAddUser history={this.props.history} match={this.props.match} />
				</div>
			</div>
		);
	}
}

export default withAuth(AddUser);