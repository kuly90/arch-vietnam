import React, { Component } from 'react';


class Solutions extends Component {
    render() {
        return (
            <div className="content">
                <div className="page-title-container v" >
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 wow fadeIn animated h" >
                                <i className="fa fa-briefcase"></i>
                                <h1>Công việc</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">

                    <div id="service" className="row mt25">
                        <div className=" col-sm-6">
                            <div id="small-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    <li data-target="#small-carousel" data-slide-to="0" className=""></li>
                                    <li data-target="#small-carousel" data-slide-to="1" className=""></li>
                                    <li data-target="#small-carousel" data-slide-to="2" className="active"></li>
                                </ol>
                                <div className="carousel-inner" role="listbox">
                                    <div className="item">
                                        <img className="first-slide" src="http://arch-vietnam.vn/images/arch1_b.jpg" alt="First slide" />                      
                                    </div>
                                    <div className="item">
                                        <img className="second-slide" src="http://arch-vietnam.vn/images/arch2_b.jpg" alt="Second slide" />                      
                                    </div>
                                    <div className="item active">
                                        <img className="third-slide" src="http://arch-vietnam.vn/images/arch3_b.jpg" alt="Third slide" />                      
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="lead">
                            <h3><span>Tại sao bạn nên chọn Arch?</span></h3>
                            <p>- Bạn muốn làm việc trong một môi trường làm việc chuyên nghiệp, năng động.</p>
                            <p>- Bạn muốn cơ hội học hỏi, làm việc với đồng nghiệp, đối tác Nhật bản.</p>
                            <p>- Bạn muốn thử sức với công việc làm cùng các công ty nổi tiếng như IBM Nhật bản, NEC, Điện lực Tokyo…</p>
                            <p>Công ty Arch là 1 công ty có thể đem đến cho bạn những cơ hội đó. Công ty chờ đón sự cộng tác của các bạn.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <h3 className="title"><i className="fa fa-briefcase"></i> Nội dung công việc</h3>
                        <div className="col-xs-18 col-sm-4 col-md-4">
                            <div className="thumbnail">
                                <img src="http://arch-vietnam.vn/images/trienkhaicv.jpg" alt="" />
                                <div className="caption">
                                    <h4>Triển khai develop công việc từ Arch JP</h4>
                                    <p>Chịu trách nhiệm phát triển phần mềm cho các dự án liên qua mà công ty Arch JP đưa sang VN. Sản xuất các ứng dụng liên quan đến nghiệp vụ của các công ty khách hàng Ví dụ như: Hệ thống quản lý của công ty In ấn, các dự án liên quan đến ngành điện ở Nhật bản… <br/><br/></p>
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
                                    <p>Ngoài các vấn đề với các đối tác chiến lược, thì Arch Việt Nam sẽ xúc tiến đưa các công nghệ tiên tiến ở Nhật bản về Việt Nam. Cũng như xúc tiến các business với Việt Nam.<br/><br/><br/></p>
                                   
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default Solutions;
