import React, { Component } from 'react';
import NewsHeader from "./NewsHeader";

import { Link } from 'react-router-dom';

class New extends Component {
	constructor(props) {
		super(props)
		this.state = {
			news: []
		}
	}

	componentDidMount() {
		this.getNews();
	}

	getNews = _ => {
		fetch('http://localhost:8080/listNews')
			.then(response => response.json())
			.then(response => this.setState({ news: response.data }))
			.catch(err => console.error(err))
	}

	handlerDetail(item) {
		this.props.history.push(`/NewDetail/:${item.id}`)
	}

	render() {
		const { news } = this.state;
		return (
			<div className="container">
				<NewsHeader />
				<div className="container">
					<div className="row">
						<div id="primary" className="content-area col-md-8">
							<main id="main" className="site-main" role="main">
								<div id="w0" className="list-view nl">

									{
										news.map((item, index) =>
											<div className="item" data-key="{&quot;id&quot;:11,&quot;author&quot;:1}" key={index}>
												<article id="post-993" className="post-993 post type-post status-publish format-standard hentry category-template-2 category-uncategorized tag-content-2 					tag-excerpt-2 tag-template row archive">
													<div className="col-md-9 col-xs-12">
														<header className="entry-header">
															<h1 className="entry-title" style={{ cursor: 'pointer' }} onClick={() => this.handlerDetail(item)} >{item.title}</h1>
															<div className="entry-meta">
																<span className="posted-on"><i className="icon-time"> </i>{item.date_create}</span>&nbsp;
																{
																	item.status === '0' ? <span style={{ color: 'green', border: '1px solid green', padding: '2px' }}>HIRRING</span>
																		:
																		<span style={{ color: 'red', border: '1px solid red', padding: '2px' }}>HIRED</span>
																}
															</div>

														</header>
														<div className="entry-content">
															<span>{item.body.substring(0, 250)}&nbsp;...</span>
														</div>
													</div>
												</article>
											</div>
										)
									}

									<ul className="pagination"><li className="prev disabled"><span>«</span></li>
										<li className="active"><Link to="/news?page=1&amp;per-page=5" data-page="0">1</Link></li>
										<li><Link to="/news?page=2&amp;per-page=5" data-page="1">2</Link></li>
										<li className="next"><Link to="/news?page=2&amp;per-page=5" data-page="1">»</Link></li>
									</ul>
								</div>
							</main>
						</div>

						<div id="secondary" className="widget-area col-md-4 nl" role="complementary">
							<aside id="recent-posts-2" className="widget widget_recent_entries"><h1 className="widget-title">Tin tức mới nhất</h1>
								<ul className="rp">
									{
										news.map((item, index) =>
											<li key={index}>
												<b style={{ cursor: 'pointer' }} onClick={() => this.handlerDetail(item)}>{item.title}</b>
											</li>
										)
									}
								</ul>
							</aside>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default New;
