import React, { Component } from 'react';
import VerticalMenu from "./VerticalMenu";
class CustomerDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			customerDetail: [{
				name: '',
				email: '',
				subject: '',
				message: ''
			}]
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id.replace(":", "");
		fetch(`http://localhost:8080/customers/findById?id=${id}`)
			.then(response => response.json())
			.then(response => this.setState({ customerDetail: response.data }))
			.catch(err => console.error(err))
	}

	render() {
		const { customerDetail } = this.state;

		return (
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<VerticalMenu />
					</div>
					<div className="col-md-10">
						<div className="col-sm-7 contact-form">
							{
								customerDetail.map((item, index) =>
									<div id="contact-form" key={index}>
										<label style={{ fontWeight: 'bold' }}>Name</label>
										<input type="text" id="contactform-name" className="form-control" value={item.name} readOnly />
										<p className="help-block help-block-error"></p>
										<label style={{ fontWeight: 'bold' }}>Email</label>
										<input type="text" id="contactform-email" className="form-control" value={item.email} readOnly />
										<p className="help-block help-block-error"></p>
										<label style={{ fontWeight: 'bold' }}>Subject</label>
										<input type="text" id="contactform-subject" className="form-control" value={item.subject} readOnly />
										<p className="help-block help-block-error"></p>
										<label style={{ fontWeight: 'bold' }}>Message</label>
										<textarea id="contactform-body" className="form-control" size="50" value={item.message} readOnly />
										<p className="help-block help-block-error"></p>
									</div>
								)
							}
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default CustomerDetail;