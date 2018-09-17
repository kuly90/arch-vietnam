import React, { Component } from 'react';
import VerticalMenu from "./VerticalMenu";
import withAuth from './service/withAuth';

class ListUsers extends Component {
	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<VerticalMenu />
					</div>
					<div className="col-md-10">
						{/* Table List of Users */}
						<table className="table table-hover">
							<thead>
								<tr>
									<th>User Name</th>
									<th>Full Name</th>
									<th>Email</th>
									<th>Role Name</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								
							</tbody>
						</table>
					</div>
				</div>
				
			</div>
		);
	}
}

export default withAuth(ListUsers);