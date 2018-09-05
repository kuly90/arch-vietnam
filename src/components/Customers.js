import React, { Component } from 'react';
import VerticalMenu from "./VerticalMenu";
import withAuth from './service/withAuth';

class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			customers: [],
			delCustomer: {
				name: ''
			},
			customerDetail: {
			}
		}
	}

	componentDidMount() {
		this.getCustomers();
	}

	getCustomers = _ => {
		fetch('http://localhost:8080/customers')
			.then(response => response.json())
			.then(response => this.setState({ customers: response.data }))
			.catch(err => console.error(err))
	}

	confirmDelete(item) {
		this.setState({
			delCustomer: item
		})
	}

	deleteCustomer(delCustomer) {
		const id = delCustomer.id;
		fetch(`http://localhost:8080/customers/deleteCustomer?id=${id}`)
			.then(this.getCustomers)
			.catch(err => console.error(err))
		this.props.history.push('/customers')

	}

	handlerDetail(item) {
		this.props.history.push(`/customerDetail/:${item.id}`);
		const status = '1';
		fetch(`http://localhost:8080/customers/updateStatus?status=${status}&id=${item.id}`)
			.then(this.getCustomers)
			.catch(err => console.error(err))
	}

	render() {
		const { customers, delCustomer } = this.state;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<VerticalMenu />
					</div>
					<div className="col-md-10">
						{/* Table Customer */}
						<table className="table table-hover">
							<thead>
								<tr>
									<th>Name</th>
									<th>Message</th>
									<th>date time</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{
									customers.map((item, index) =>
										<tr key={index}>
											{
												item.status === '1' ?
													<td style={{ textAlign: 'left', cursor: 'pointer' }} onClick={() => this.handlerDetail(item)}>{item.name}</td>
													:
													<td style={{ textAlign: 'left', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => this.handlerDetail(item)}>{item.name}</td>
											}
											{
												item.status === '1' ?
													<td style={{ textAlign: 'left', cursor: 'pointer' }} onClick={() => this.handlerDetail(item)}>{item.message.substring(0, 50)}&nbsp;...</td>
													:
													<td style={{ textAlign: 'left', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => this.handlerDetail(item)}>{item.message.substring(0, 50)}&nbsp;...</td>
											}
											{
												item.status === '1' ?
													<td style={{ textAlign: 'left', cursor: 'pointer' }} onClick={() => this.handlerDetail(item)}>{item.date_create}</td>
													:
													<td style={{ textAlign: 'left', fontWeight: 'bold', cursor: 'pointer' }} onClick={() => this.handlerDetail(item)}>{item.date_create}</td>
											}
											<td>
												<button className="btn btn-danger" data-toggle="modal" data-target="#myModalDelete"
													onClick={() => this.confirmDelete(item)}>
													<span className="fa fa-trash-o fa-fw"></span>
												</button>
											</td>
										</tr>
									)
								}
							</tbody>
						</table>
					</div>
				</div>

				{/* Confirm Delete User */}
				<div className="modal fade" id="myModalDelete">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">
									<span className="fa fa-exclamation-triangle btn-danger"></span>&nbsp;
									Do you want to delete customer has name is "{delCustomer.name}" ?
									</h5>
								<button type="button" className="close" data-dismiss="modal">&times;</button>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.deleteCustomer(delCustomer)}>Yes</button>
								<button type="button" className="btn btn-danger" data-dismiss="modal">No</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withAuth(Customers);