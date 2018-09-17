import React, { Component } from 'react';
import withAuth from "./service/withAuth";

class FormAddUser extends Component {
	constructor(props){
		super(props)
		this.state = {
			username: '',
			fullname:'',
			email:'',
			phone:'',
			address:'',
			birthday:''
		}
		this.handlerChange = this.handlerChange.bind(this);
		this.addNewUser = this.addNewUser.bind(this);
	}

	handlerChange = e => {
		this.setState({[e.target.name]: e.target.value})
	}

	addNewUser = _ => {
		
	}

	render() {
		console.log(this.props)
		return (
			<div className="col-md-10">
				<h3 style={{ marginLeft: '15px' }}>Add News User</h3>
				<div className="col-sm-6">
					<label style={{ fontWeight: 'bold' }}>User Name <span style={{ color: 'red' }}>*</span></label>
					<input type="text" id="contactform-subject" className="form-control"
						name="username" onChange={this.handlerChange}
					/>
					<p></p>
					<label style={{ fontWeight: 'bold' }}>Full Name <span style={{ color: 'red' }}>*</span></label>
					<input type="text" id="contactform-subject" className="form-control"
						name="fullname" onChange={this.handlerChange}
					/>
					<p></p>
					<label style={{ fontWeight: 'bold' }}>Email <span style={{ color: 'red' }}>*</span></label>
					<input type="text" id="contactform-subject" className="form-control"
						name="email" onChange={this.handlerChange}
					/>
					<p></p>
					<label style={{ fontWeight: 'bold' }}>Phone Number</label>
					<input type="text" id="contactform-subject" className="form-control"
						name="phone" onChange={this.handlerChange}
					/>
					<p></p>
					<label style={{ fontWeight: 'bold' }}>Address</label>
					<input type="text" id="contactform-subject" className="form-control"
						name="address" onChange={this.handlerChange}
					/>
					<p></p>
					<label style={{ fontWeight: 'bold' }}>Birthday</label>
					<input type="text" id="contactform-subject" className="form-control"
						name="birthday" onChange={this.handlerChange}
					/>
					<p></p>

					<button type="submit" className="btn btn-primary" onClick={this.addNewUser}>ADD</button>
				</div>
			</div>
		);
	}
}

export default withAuth(FormAddUser);