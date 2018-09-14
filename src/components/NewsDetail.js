import React, { Component } from 'react';
import NewsHeader from "./NewsHeader";

class NewsDetail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			newsDetail: [],
			listNews: []
		}
	}

	componentDidMount() {
		this.getNewsDetail();
		this.getListNews();
	}

	getNewsDetail = _ => {
		const id = this.props.match.params.id.replace(":", "");
		fetch(`http://localhost:8080/listnews/findById?id=${id}`)
			.then(response => response.json())
			.then(response => this.setState({ newsDetail: response.data }))
			.catch(err => console.error(err))
	}

	getListNews = _ => {
		fetch('http://localhost:8080/listnews')
			.then(response => response.json())
			.then(response => this.setState({ listNews: response.data }))
			.catch(err => console.error(err))
	}

	handlerDetail(item) {
		this.props.history.push(`/NewDetail/:${item.id}`)
		fetch(`http://localhost:8080/listnews/findById?id=${item.id}`)
			.then(response => response.json())
			.then(response => this.setState({ newsDetail: response.data }))
			.catch(err => console.error(err))
	}

	render() {
		const { newsDetail, listNews } = this.state;
		return (
			<div className="container">
				<NewsHeader />
				{
					newsDetail.map((item, index) =>
						<div id="primary" className="content-area col-md-8" key={index}>
							<h1>{item.title}</h1>
							{item.date_create}
							<hr />
							<span>{item.body}</span>
						</div>
					)
				}
				<div id="secondary" className="widget-area col-md-4 nl" role="complementary">
					<aside id="recent-posts-2" className="widget widget_recent_entries"><h1 className="widget-title">Tin tức mới nhất</h1>
						<ul className="rp">
							{
								listNews.map((item, index) =>
									<li key={index}>
										<b style={{ cursor: 'pointer' }} onClick={() => this.handlerDetail(item)}>{item.title}</b>
									</li>
								)
							}
						</ul>
					</aside>
				</div>

			</div>
		);
	}
}

export default NewsDetail;