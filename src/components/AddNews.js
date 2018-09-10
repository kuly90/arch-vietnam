import React, { Component } from 'react';
import VerticalMenu from "./VerticalMenu";
import withAuth from './service/withAuth';

class AddNews extends Component {
	constructor(props) {
		super(props)
		this.state = {
			title: '',
			body: '',
			msgError: '',
			msgSuccess: ''
		}
		this.hanlerChange = this.hanlerChange.bind(this);
		this.handlerSaveNews = this.handlerSaveNews.bind(this);
	}

	hanlerChange = e => {
		this.setState({ [e.target.name]: e.target.value })
	}

	handlerSaveNews = _ => {
		const { title, body} = this.state;
		if (title === '' || body === '') {
			this.setState({
				msgError: '(*) is required !!!',
				msgSuccess: ''
			})
		} else {
			this.setState({
				msgError: '',
				msgSuccess: 'Add News Success !',
				title: '',
				body: ''
			})
			fetch(`http://localhost:8080/addNews?title=${title}&body=${body}`)
				.catch(err => console.error(err))
		}

	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<VerticalMenu />
					</div>
					<div className="col-md-10">
						<h3 style={{ marginLeft: '15px' }}>Add News</h3>
						<p style={{ color: 'red' }}>{this.state.msgError}</p>
						<p style={{ color: 'green' }}>{this.state.msgSuccess}</p>
						<div className="col-sm-6">
							<label style={{ fontWeight: 'bold' }}>Title <span style={{ color: 'red' }}>*</span></label>
							<input type="text" id="contactform-subject" className="form-control" name="title"
								onChange={this.hanlerChange} value={this.state.title} />
							<p></p>
							<label style={{ fontWeight: 'bold' }}>Body <span style={{ color: 'red' }}>*</span></label>
							<textarea className="form-control" size="60" style={{ height: '300px' }}
								onChange={this.hanlerChange} name="body" value={this.state.body} /><br />
							<button onClick={this.handlerSaveNews} type="submit" className="btn btn-primary">ADD</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withAuth(AddNews);