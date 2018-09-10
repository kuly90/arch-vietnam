import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class container extends Component {
	constructor(props) {
		super(props)
		this.state = {
			listNews: []
		}
	}

	componentDidMount(){
		fetch('http://localhost:8080/listnews')
			.then(response => response.json())
			.then(response => this.setState({listNews: response.data}))
			.catch(err => console.error(err))
	}

	render() {
		const { listNews } = this.state;
		return (
			<div className="content">
				<div className="container">
					<div id="myCarousel" className="carousel slide" data-ride="carousel">
						<ol className="carousel-indicators">
							<li data-target="#myCarousel" data-slide-to="0" className=""></li>
							<li data-target="#myCarousel" data-slide-to="1" className=""></li>
							<li data-target="#myCarousel" data-slide-to="2" className="active"></li>
						</ol>
						<div className="carousel-inner" role="listbox">
							<div className="item">
								<img className="first-slide" src="http://arch-vietnam.vn/images/arch1_a.jpg" alt="First slide" />
								<div className="container">
									<div className="carousel-caption">

									</div>
								</div>
							</div>
							<div className="item">
								<img className="second-slide" src="http://arch-vietnam.vn/images/arch2_a.jpg" alt="Second slide" />
								<div className="container">
									<div className="carousel-caption">

									</div>
								</div>
							</div>
							<div className="item active">
								<img className="third-slide" src="http://arch-vietnam.vn/images/arch3_a.jpg" alt="Third slide" />
								<div className="container">
									<div className="carousel-caption">

									</div>
								</div>
							</div>
						</div>
						<a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
							<span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
							<span className="sr-only">Previous</span>
						</a>
						<a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
							<span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
							<span className="sr-only">Next</span>
						</a>
					</div>
				</div>
				<div className="container">
					<div id="news">
						<div className="row">
							<div className="col-md-12">
								<div className="carousel slide" data-ride="carousel" id="news-carousel">

									<div className="carousel-inner">

										{
											listNews.map((item, index) =>
											<div className="item active" key={index}>
											<div className="row">
												<div className="col-sm-12 text-left">
													<p><Link to="/detail-news?id=9">{item.title}</Link></p>
												</div>
											</div>
										</div>
										)
										}
									
										
									</div>
									<Link data-slide="prev" to="#news-carousel" className="left carousel-control"><i className="fa fa-chevron-left"></i></Link>
									<Link data-slide="next" to="#news-carousel" className="right carousel-control"><i className="fa fa-chevron-right"></i></Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="container">
					<h3 className="title"><i className="fa fa-info-circle"></i>Giới thiệu chung</h3>

					<div className="intro border">
						<div className="intro border">
							<img className="intro-image img-responsive" src="http://arch-vietnam.vn/images/arch_intro_index.jpg" />
						</div>

						<div className="col-md-6">
							<h4 className="intro-heading">Triết lý kinh doanh</h4>
							<div className="lead">
								<p>ARCH là tên viết tắt 4 chữ cái đầu của “Advanced Research, Computer and Human”.<br />
									Chúng tôi nổ lực để hướng đến mục tiêu xây dựng nên mối quan hệ lý tưởng giữa “Con người” và “Máy tính”,
                                    đồng thời trở thành một doanh nghiệp  có thể cống hiến cho xã hội bằng kĩ thuật và lòng tin.<br />
									Cách làm của Arch là suy nghĩ coi trọng “Con người”. Để đạt được kết quả đó, mỗi một kỹ sư là một đại diện của Arch,
                                    suy nghĩ sẽ làm được những gì cho Arch và cùng hợp lực để tạo ra nguồn sức mạnh.<br />
									Luôn suy nghĩ vì lợi ích của người sử dụng.</p>
							</div>
							<h4 className="intro-heading">Phương châm kinh doanh</h4>
							<div className="lead">
								<p>Mỗi năm, chúng tôi cử 2 người sang Tokyo để nghiên cứu, học hỏi thêm về kỹ thuật công nghệ và cả tiếng Nhật trong khoảng thời gian gần 1 năm.<br />
									Với mục tiêu trở thành một công ty sẽ không có nhân viên nào nghỉ việc. chúng tôi sẽ cố gắng tích lũy nhiều hơn nữa những kiến thức nghiệp vụ để phục vụ cho khách hàng.</p>

							</div>
						</div>
						<div className="clearfix"></div>
					</div>
				</div>
				<div className="container marketing">
					<div className="row">
						<h3 className="title"><i className="fa fa-briefcase"></i>Công việc</h3>
						<div className="col-xs-18 col-sm-4 col-md-4">
							<div className="thumbnail">
								<img src="http://arch-vietnam.vn/images/trienkhaicv.jpg" alt="" />
								<div className="caption">
									<h4>Triển khai develop công việc từ Arch JP</h4>
									<p>Chịu trách nhiệm phát triển phần mềm cho các dự án liên qua mà công ty Arch JP đưa sang VN. Sản xuất các ứng dụng liên quan đến nghiệp vụ của các công ty khách hàng Ví dụ như: Hệ thống quản lý của công ty In ấn, các dự án liên quan đến ngành điện ở Nhật bản… <br /><br /></p>
								</div>
							</div>
						</div>

						<div className="col-xs-18 col-sm-4 col-md-4">
							<div className="thumbnail">
								<img src="http://arch-vietnam.vn/images/company-NEET-in-Japan-01.jpg" alt="" />
								<div className="caption">
									<h4>Công việc với các đối tác khác ở Nhật.</h4>
									<p>Ngoài việc nhận công việc sản xuất phần mềm từ công ty mẹ ở Nhật bản, thì Arch Việt nam xúc tiến trực tiếp khai thác khách hàng với các đối tác Nhật bản khác. Với đội ngũ quản lý, giám sát chất lượng có kinh nghiệm từ cty Arch JP, Arch VN sẽ có thể đảm bảo chất lượng, cũng như những đòi hỏi nghiêm ngặt của các đối tác Nhật bản.</p>

								</div>
							</div>
						</div>

						<div className="col-xs-18 col-sm-4 col-md-4">
							<div className="thumbnail">
								<img src="http://arch-vietnam.vn/images/japanese-tech.jpg" alt="" />
								<div className="caption">
									<h4>Triển khai các công nghệ Nhật bản ở Việt Nam</h4>
									<p>Ngoài các vấn đề với các đối tác chiến lược, thì Arch Việt Nam sẽ xúc tiến đưa các công nghệ tiên tiến ở Nhật bản về Việt Nam. Cũng như xúc tiến các business với Việt Nam.<br /><br /><br /></p>

								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		);
	}
}

export default container;
