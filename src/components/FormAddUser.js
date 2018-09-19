import React, { Component } from 'react';
import withAuth from "./service/withAuth";

class FormAddUser extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			fullname: '',
			email: '',
			phone: '',
			address: '',
			birthday: '',
			messageSucc: '',
			messageErr: ''
		}
		this.handlerChange = this.handlerChange.bind(this);
		this.addNewUser = this.addNewUser.bind(this);
	}

	handlerChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	addNewUser = _ => {
		const { username, fullname, email, phone, address, birthday } = this.state;
		const password = '123456';
		const rolename = 'ADMIN';
		const username_create = this.props.user.username;
		console.log(username, email, password, fullname, rolename, address, birthday, phone, username_create)
		if (username === '' || email === '' || fullname === '') {
			this.setState({ messageErr: '(*) is requires !', messageSucc: '' })
		} else {
			this.setState({
				username: '',
				fullname: '',
				email: '',
				phone: '',
				address: '',
				birthday: '',
				messageSucc: 'Add User Success !',
				messageErr: ''
			})
			fetch(`http://localhost:8080/users/addUser?username=${username}&email=${email}&password=${password}&fullname=${fullname}&rolename=${rolename}&address=${address}&birthday=${birthday}&phone=${phone}&username_create=${username_create}`)
				.catch(err => console.error(err))
			this.props.history.push('/addUser')
		}
	}

	render() {
		return (
			<div className="col-md-10">
				<h3 style={{ marginLeft: '15px' }}>Add News User</h3>
				<p style={{ color: 'red' }}>{this.state.messageErr}</p>
				<p style={{ color: 'green' }}>{this.state.messageSucc}</p>
				<div className="col-sm-6">
					<label style={{ fontWeight: 'bold' }}>User Name <span style={{ color: 'red' }}>*</span></label>
					<input type="text" id="contactform-subject" className="form-control"
						name="username" onChange={this.handlerChange} value={this.state.username}
					/>
					<p></p>
					<label style={{ fontWeight: 'bold' }}>Full Name <span style={{ color: 'red' }}>*</span></label>
					<input type="text" id="contactform-subject" className="form-control"
						name="fullname" onChange={this.handlerChange} value={this.state.fullname}
					/>
					<p></p>
					<label style={{ fontWeight: 'bold' }}>Email <span style={{ color: 'red' }}>*</span></label>
					<input type="email" id="contactform-subject" className="form-control"
						name="email" onChange={this.handlerChange} value={this.state.email}
					/>
					<p></p>
					<label style={{ fontWeight: 'bold' }}>Phone Number</label>
					<input type="text" id="contactform-subject" className="form-control"
						name="phone" onChange={this.handlerChange} value={this.state.phone}
					/>
					<p></p>
					<label style={{ fontWeight: 'bold' }}>Address</label>
					<input type="text" id="contactform-subject" className="form-control"
						name="address" onChange={this.handlerChange} value={this.state.address}
					/>
					<p></p>
					<label style={{ fontWeight: 'bold' }}>Birthday (yyyy-mm-dd)</label>
					<input type="text" id="contactform-subject" className="form-control"
						name="birthday" onChange={this.handlerChange} value={this.state.birthday}
					/>
					<p></p>

					<button type="submit" className="btn btn-primary" onClick={this.addNewUser}>ADD</button>
				</div>
			</div>
		);
	}
}

export default withAuth(FormAddUser);