import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class about extends Component {
    render() {
        return (
        	<div className="content">
                <div className="page-title-container v" >
				    <div className="container">
				        <div className="row">
				            <div className="col-sm-12 wow fadeIn animated mm">
				                <i className="fa fa-info-circle"></i>
				                <h1>Giới thiệu</h1>
				            </div>
				        </div>
				    </div>
				</div>

				<div className="container mt25">
				    <div className="col-md-12 n">
				        <p>Language :
				        <Link to="http://arch-vietnam.vn/about_jp"><img src="http://arch-vietnam.vn/images/japan.png" /></Link></p>
				     </div>
				     <div className="clearfix"></div>
				     <div className="intro border">
				     <div className="intro border">
				            <img className="intro-image img-responsive" src="http://arch-vietnam.vn/images/arch_intro_index.jpg" />
				        </div>  

				        <div className="col-md-6">
				            <h4 className="intro-heading">Triết lý kinh doanh</h4>
				            <div className="lead">
				                <p>ARCH là tên viết tắt 4 chữ cái đầu của “Advanced Research, Computer and Human”.<br/>
				                    Chúng tôi nổ lực để hướng đến mục tiêu xây dựng nên mối quan hệ lý tưởng giữa “Con người” và “Máy tính”, 
				                    đồng thời trở thành một doanh nghiệp  có thể cống hiến cho xã hội bằng kĩ thuật và lòng tin.<br/>
				                    Cách làm của Arch là suy nghĩ coi trọng “Con người”. Để đạt được kết quả đó, mỗi một kỹ sư là một đại diện của Arch,
				                    suy nghĩ sẽ làm được những gì cho Arch và cùng hợp lực để tạo ra nguồn sức mạnh.<br/>
				                    Luôn suy nghĩ vì lợi ích của người sử dụng.</p>
				            </div>
				            <h4 className="intro-heading">Phương châm kinh doanh</h4>
				            <div className="lead">
				                <p>Mỗi năm, chúng tôi cử 2 người sang Tokyo để nghiên cứu, học hỏi thêm về kỹ thuật công nghệ và cả tiếng Nhật trong khoảng thời gian gần 1 năm.<br/>
				                    Với mục tiêu trở thành một công ty sẽ không có nhân viên nào nghỉ việc. chúng tôi sẽ cố gắng tích lũy nhiều hơn nữa những kiến thức nghiệp vụ để phục vụ cho khách hàng.</p>

				            </div>
				            
				            </div>
				        <div className="clearfix"></div>
				    </div>
				</div>
				<br/><br/>

				<div id="main" className="container mt25">
				    <table summary="profile" className="col-md-12">
				        <tbody><tr><th colSpan="2"><p>Tên công ty</p></th><td><p>CÔNG TY TNHH ARCH VIỆT NAM
				                        <br/>ARCH VIETNAM COMPANY LIMITED.</p></td></tr>
				            <tr><th colSpan="2"><p>Loại hình doanh nghiệp </p></th><td><p>Công ty TNHH một thành viên</p></td></tr>
				            <tr><th colSpan="2"><p>Ngày thành lập</p></th><td><p>27/05/2015</p></td></tr>					 
				            <tr><th rowSpan="3"><p>Liên hệ</p></th>
				                <th>Địa chỉ</th><td><p>Tầng 17, Danang Software Park, số 02 đường Quang Trung, quận Hải Châu,

				                    <br/> Thành phố Đà Nẵng, Việt Nam</p><p></p></td></tr>
				            <tr><th><p>TEL</p></th><td><p>02363-888-575</p></td></tr>
				            <tr><th><p>FAX</p></th><td><p>02363-888-585</p></td></tr>
				            <tr><th colSpan="2"><p>Người đại diện theo pháp luật</p></th><td><p>Obata Katsuhiro</p></td></tr>
				            <tr><th rowSpan="3"><p>Giấy phép kinh doanh</p></th>
				                <th><p>Số giấy phép</p></th><td><p>321043000270</p></td></tr>
				            <tr><th><p>Ngày cấp</p></th><td><p>27/05/2015</p></td></tr>
				            <tr><th><p>Thời hạn hiệu lực</p></th><td><p>10 năm kể từ ngày cấp</p></td></tr>

				            <tr><th rowSpan="2"><p>Vốn</p></th>
				                <th><p>Vốn điều lệ</p></th><td><p>2,130,000,000 VND</p></td></tr>
				            <tr><th><p>Tổng vốn đầu tư thực hiện dự án</p></th><td><p>8,520,000,000 VND</p></td></tr>
				            <tr><th colSpan="2"><p>Số lượng nhân viên</p></th><td><p>11 (01/06/2016)</p></td></tr>
				            <tr><th colSpan="2"><p>Nhà đầu tư </p></th><td><p>Công ty Cổ phần Arch  100%</p></td></tr>
				            <tr><th rowSpan="2"><p>Ngành nghề kinh doanh </p></th>
				                <th>Mã ngành 6201</th><td><p>Lập trình máy tính <br/> Chi tiết: Dịch vụ thiết kế, sản xuất, gia công phần mềm máy tính, hệ thống trang web, ứng dụng điện thoại.</p></td></tr>
				            <tr><th>Mã ngành 6202 </th><td><p>Dịch vụ tư vấn máy tính và quản trị hệ thống máy tính <br/>(không bao gồm dịch vụ xử lý dữ liệu)</p></td></tr>
				            <tr><th colSpan="2"><p>Mã số thuế </p></th><td><p>0401681275</p></td></tr>
				        </tbody>
				    </table>
				</div>
			</div>
        );
    }
}
export default about;