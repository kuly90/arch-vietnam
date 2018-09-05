import React, { Component } from 'react';
import VerticalMenu from "./VerticalMenu";
import withAuth from './service/withAuth';

class ListNews extends Component {
	constructor(props){
		super(props)
		this.state = {
			listNews :[],
			delNews:{}
		}
	}
	
	componentDidMount(){
		this.getListNews();
	}

	getListNews = _ => {
		fetch('http://localhost:8080/listnews')
			.then(response => response.json())
			.then(response => this.setState({listNews: response.data}))
			.catch(err => console.error(err))
	}

	changeToHirring(item){
		fetch(`http://localhost:8080/changeToHirring?status=0&id=${item.id}`)
			.then(this.getListNews)
			.catch(err => console.error(err))
		this.props.history.push('/listNews')
	}

	changeToHired(item){
		fetch(`http://localhost:8080/changeToHired?status=1&id=${item.id}`)
			.then(this.getListNews)
			.catch(err => console.error(err))
			this.props.history.push('/listNews')
	}

	confirmDelete(item) {
		this.setState({
			delNews: item
		})
	}

	deleteNews(delNews){
		fetch(`http://localhost:8080/deleteNews?id=${delNews.id}`)
			.then(this.getListNews)
			.catch(err => console.error(err))
		this.props.history.push('/listNews')	
	}

	render() {
		const { listNews, delNews } = this.state;
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-2">
						<VerticalMenu/>
					</div>
					<div className="col-md-10">
						{/* Table List of News */}
						<table className="table table-hover">
							<thead>
								<tr>
									<th>Title</th>
									<th>Date Create</th>
									<th>Status</th>
									<th style={{textAlign:'center'}}>Action</th>
								</tr>
							</thead>
							<tbody>
								{
									listNews.map((item, index) =>
									<tr key={index}>
										<td>{item.title}</td>
										<td>{item.date_create}</td>
										{
											item.status === '0' ? <td style={{cursor:'pointer', color:'green'}} onClick={() => this.changeToHired(item)}>HIRRING</td>
											: 
											<td style={{cursor:'pointer', color:'red'}} onClick={() => this.changeToHirring(item)}>HIRED</td>
										}
										<td>
											<button className="btn btn-primary">
														<span className="fa fa-pencil fa-fw"></span>
											</button>&nbsp;
											<button className="btn btn-danger" data-toggle="modal" data-target="#myModalDelete" onClick={() => this.confirmDelete(item)}>
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
				<div className="modal fade" id="myModalDelete">
					<div className="modal-dialog">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">
									<span className="fa fa-exclamation-triangle btn-danger"></span>&nbsp;
									Do you want to delete News has Title is "{delNews.title}" ?
									</h5>
								<button type="button" className="close" data-dismiss="modal">&times;</button>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => this.deleteNews(delNews)}>Yes</button>
								<button type="button" className="btn btn-danger" data-dismiss="modal">No</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default withAuth(ListNews);