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
			}],
			email: '',
			subject: '',
			message: '',
			formRep: false,
			cusRep: {},
			repMailSucc: '',
			repMailErr: ''
		}
	}

	componentDidMount() {
		const id = this.props.match.params.id.replace(":", "");
		fetch(`http://localhost:8080/customers/findById?id=${id}`)
			.then(response => response.json())
			.then(response => this.setState({ customerDetail: response.data }))
			.catch(err => console.error(err))
	}

	replyForm(item) {
		this.setState({ formRep: true, cusRep: item, repMailSucc: '', repMailErr: '' })
	}

	handlerChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	repMail(cusRep) {
		const { subject, message } = this.state;
		const id = this.props.match.params.id.replace(":", "");
		if (subject === '' || message === '') {
			this.setState({ repMailErr: '(*) is required !', repMailSucc: '' })
		} else {
			fetch(`http://localhost:8080/reply-email?email=${cusRep.email}&subject=${subject}&message=${message}`)
				.then(this.setState({ repMailSucc: 'Reply Mail Success !', formRep: false, repMailErr: '' }))
				.catch(err => console.error(err))
			this.props.history.push(`/customerDetail/:${id}`)
		}
	}

	render() {
		const { customerDetail, formRep, cusRep } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<VerticalMenu />
					</div>
					<div className="col-md-10">
						<div className="col-sm-6 contact-form">
							<p style={{ color: 'green' }}>{this.state.repMailSucc}</p>
							<p style={{ color: 'red' }}>{this.state.repMailErr}</p>
							{
								customerDetail.map((item, index) =>
									<div key={index}>
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
										<textarea className="form-control" value={item.message} readOnly />
										<p className="help-block help-block-error"></p>
										<button className="btn btn-primary" onClick={() => this.replyForm(item)}>Reply</button>
									</div>
								)
							}
						</div>
						{
							formRep === true ?
								<div className="col-sm-6 contact-form" style={{ marginTop: '134px' }}>
									<div id="contact-form">
										<input type="hidden" className="form-control" />
										<label style={{ fontWeight: 'bold' }}>Subject</label>
										<input type="text" className="form-control" name="subject" onChange={this.handlerChange} />
										<p className="help-block help-block-error"></p>
										<label style={{ fontWeight: 'bold' }}>Message</label>
										<textarea className="form-control" size="50" name="message" onChange={this.handlerChange} />
										<p className="help-block help-block-error"></p>
										<button className="btn btn-primary" onClick={() => this.repMail(cusRep)}>Send</button>
									</div>
								</div>
								:
								<div></div>
						}

					</div>
				</div>
			</div>
		);
	}
}

export default CustomerDetail;