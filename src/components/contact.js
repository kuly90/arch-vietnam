import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import {Link} from 'react-router-dom';

class contact extends Component {
    render() {
        return (
            <div>
                <div className="page-title-container v">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 wow fadeIn animated h">
                                <i className="fa fa-envelope"></i>
                                <h1>Liên hệ </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact-us-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-7 contact-form wow fadeInLeft animated c">
                                <form id="contact-form" action="/contact" method="post" role="form">
                                    <input type="hidden" name="_csrf" />                    <p>
                                                            Xin vui lòng điền đầy đủ thông tin bên dưới. Chúng tôi sẽ phản hồi trong thời gian sớm nhất!
                                                        </p>
                                                        
                                                            <div className="form-group">
                                                                <div className="form-group field-contactform-name required">
                                    <label className="control-label" htmlFor="contactform-name">Tên</label>
                                    <input type="text" id="contactform-name" className="form-control"  placeholder="Nhập họ tên..." />

                                    <p className="help-block help-block-error"></p>
                                    </div>                        </div>
                                                            <div className="form-group">
                                                                <div className="form-group field-contactform-email required">
                                    <label className="control-label" htmlFor="contactform-email">Email</label>
                                    <input type="text" id="contactform-email" className="form-control" placeholder="Nhập địa chỉ email..." />

                                    <p className="help-block help-block-error"></p>
                                    </div>                        </div>
                                                            <div className="form-group">
                                                                <div className="form-group field-contactform-subject required">
                                    <label className="control-label" htmlFor="contactform-subject">Tựa đề</label>
                                    <input type="text" id="contactform-subject" className="form-control"  placeholder="Chủ đề..."/>

                                    <p className="help-block help-block-error"></p>
                                    </div>                        </div>
                                                            <div className="form-group">
                                                                <div className="form-group field-contactform-body required">
                                    <label className="control-label" htmlFor="contactform-body">Nội dung</label>
                                    <textarea id="contactform-body" className="form-control" size="60" maxLength="255" placeholder="Nội dung..."></textarea>

                                    <p className="help-block help-block-error"></p>
                                    </div>                        </div>
                                                            <div className="form-group">
                                                                <div className="form-group field-contactform-verifycode">
                                    <label className="control-label" htmlFor="contactform-verifycode">Mã xác nhận</label>
                                    <div className="row"><div className="col-lg-3"><img id="contactform-verifycode-image" src="/site/captcha?v=5b7631fe15888" alt=""/></div><div className="col-lg-6">
                                    <input id="contactform-verifycode" className="form-control" name="ContactForm[verifyCode]"/></div> <a id="contactform-verifycode-image1">Lấy code mới</a></div>

                                    <p className="help-block help-block-error"></p>
                                    </div>                           
                                                            </div>

                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary" name="contact-button">Gửi</button>                        
                                    </div>
                                </form>
                            </div>
                            <div className="col-sm-5 contact-address wow fadeInUp animated b" style={{height:'300px'}}>
                                <h3>Vị trí công ty</h3>
                                <Map google={this.props.google} zoom={14}>

                                    <Marker onClick={this.onMarkerClick}
                                    name={'Current location'} />
                                </Map>
                                <script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false"></script>
                                    
                                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyA0DBkTL4IbodxPlluxzOl8RgbYkAb8XuY")
  })(contact)
  

