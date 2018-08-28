import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <div className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink className="navbar-brand" to="/"><img src="http://arch-vietnam.vn/images/logo.jpg" alt=""/></NavLink>
                    </div>

                    <div className="collapse navbar-collapse">

                        <ul className="nav navbar-nav navbar-right mt15">
                            <li><NavLink className="NavLink" to="/privacy"> Chính sách bảo mật</NavLink></li>
                            <li className="active"><a href="http://www.arch.jp/" >Arch Japan</a></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right mt15">
                            <li><NavLink to="/"><i className="fa fa-home"></i> Trang chủ</NavLink></li>
                            <li><NavLink to="/about"><i className="fa fa-info-circle"></i> Giới thiệu</NavLink></li>                        
                            <li><NavLink to="/solutions"><i className="fa fa-briefcase"></i> Công việc</NavLink></li>
                            <li><NavLink to="/new"><i className="fa fa-rss-square"></i> Tin tức</NavLink></li>
                            <li><NavLink to="/contact"><i className="fa fa-envelope"></i> Liên hệ</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div> 
        );
    }
}

export default Header;
