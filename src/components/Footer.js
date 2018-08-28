import React, { Component } from 'react';
import { Link} from 'react-router-dom';
class Footer extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div id="footer_top">
                        <div className="col-md-7 contact-head">
                            <h2>Tầng 17, Danang Software Park<br/>
                                Số 02 Quang Trung, quận Hải Châu, thành phố Đà Nẵng</h2>
                        </div>      
                        <div className="col-md-5" id="contact-tel">
                            <span className="tell">02363-888-575</span>
                            <br/>
                            <span className="time">Từ 8h - 17h, Thứ 7 và CN nghỉ</span>
                        </div>
                        <div className="col-md-5" id="contact-facebook">
                            <span className="facebook"><Link to="https://www.facebook.com/ARCHVietNam/" >ARCH-VIETNAM</Link>
                            </span>
                            <br/>
                            <span className="name">Offshore Company</span>
                        </div>              
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="container">
                    <footer>

                        <Link to="/">Trang chủ</Link> | <Link to="/about">Giới thiệu</Link> | <Link to="/solutions">Công việc</Link> | <Link to="/news">Tin tức</Link> | <Link to="/contact">Liên hệ</Link>
                        <p>© 2015 ARCH VIETNAM CO., LTD</p>

                    </footer>
                </div>
            </div>
        );
    }
}

export default Footer;
