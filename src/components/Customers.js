import React, { Component } from 'react';
import VerticalMenu from "./VerticalMenu";
import withAuth from './service/withAuth';

class Customers extends Component {
	constructor(props) {
		super(props);
		this.state = {
			status: '0',
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

	customerDetail(item) {
		this.setState({
			customerDetail: item,
			status: '1'
		})
		const id = item.id;
		const status = '1';
		fetch(`http://localhost:8080/customers/updateStatus?status=${status}&id=${id}`)
	}

	deleteCustomer(delCustomer) {
		const id = delCustomer.id;
		fetch(`http://localhost:8080/customers/deleteCustomer?id=${id}`)
			.then(this.getCustomers)
			.catch(err => console.error(err))
	}

	render() {
		const { customers, delCustomer, customerDetail, countMessage } = this.state;
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
												this.state.status === '1' || item.status === '1' ?
												<td style={{ textAlign: 'left' }}>{item.name}</td>
												:
												<td style={{ textAlign: 'left', fontWeight:'bold' }}>{item.name}</td>
											}
											{
												this.state.status ==='1' || item.status === '1' ? 
												<td style={{ textAlign: 'left' }}>{item.message.substring(0, 50) + '...'}</td>
												:
												<td style={{ textAlign: 'left', fontWeight: 'bold' }}>{item.message.substring(0, 50) + '...'}</td>
											}
											<td style={{ textAlign: 'left' }}>{item.date_create}</td>
											<td>
												<button className="btn btn-primary" data-toggle="modal" data-target="#myModalDetail"
													onClick={() => this.customerDetail(item)}>
													Detail
												</button>
												&nbsp;
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

				{/* Modal Customer Detail */}
				<div className="modal fade" id="myModalDetail">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h4 className="modal-title">
									Detail For {customerDetail.name}
								</h4>
								<button type="button" className="close" data-dismiss="modal">&times;</button>
							</div>
							<div className="modal-body">
								<div className="form-inline">
									<div className="form-group field-contactform-name required">
										<label className="control-label" htmlFor="contactform-name">Name:</label>
										<input type="text" className="form-control" style={{marginLeft:'25px'}}
												value={customerDetail.name} readOnly />
									</div>
									<br /><br />
									<div className="form-group field-contactform-email required">
										<label className="control-label" htmlFor="contactform-email">Email:</label>
										<input type="text" className="form-control" style={{marginLeft:'25px'}}
													value={customerDetail.email} readOnly/>
									</div>
									<br /><br />
									<div className="form-group field-contactform-subject required">
										<label className="control-label" htmlFor="contactform-subject">Subject:</label>
										<input type="text" className="form-control" style={{marginLeft:'15px'}}
													value={customerDetail.subject} readOnly/>
									</div>
									<br /><br />
									<div className="form-group field-contactform-body required">
										<label className="control-label" htmlFor="contactform-body">Message:</label>
										<textarea className="form-control" rows='7' cols='60' style={{marginLeft:'5px'}}
										value={customerDetail.message} readOnly/>
									</div>
								</div>

							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-danger" data-dismiss="modal">OK</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withAuth(Customers);