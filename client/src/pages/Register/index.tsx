import classNames from "classnames/bind";
import Styles from "./register.module.scss";
import { Link } from "react-router-dom";
import Footer from "../../components/Layouts/DefautLayout/Footer";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(Styles);

function Register() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("body")}>
                <div className={cx("form-register")}>
                    <img className={cx("title")} src="/img/Black_icon_instagram.png" alt="" srcSet="" />
                    <span>Đăng kí để xem ảnh và video từ bạn bè.</span>
                    <button className={cx("login-with-facebook")}>
                        {/* <FontAwesomeIcon icon={faSquareFacebook} /> */}
                        Đăng nhập bằng facebook
                    </button>
                    <p>HOẶC</p>
                    <form action="">
                        <input type="text" className={cx("infor-user")} placeholder="Số di động" />
                        <input type="text" className={cx("infor-user")} placeholder="Email" />
                        <input type="text" className={cx("infor-user")} placeholder="Tên đầy đủ" />
                        <input type="text" className={cx("infor-user")} placeholder="Tên người dùng" />
                        <input type="text" className={cx("infor-user")} placeholder="Mật khẩu" />
                    </form>
                    <p>
                        Những người dùng dịch vụ của chúng tôi có thể đã tải thông tin liên hệ của bạn lên Instagram.
                        <a href="#" className={cx("extra-information")}>
                            {" "}
                            Tìm hiểu thêm
                        </a>
                    </p>
                    <p>
                        Bằng cách đăng ký, bạn đồng ý với{" "}
                        <a href="#" className={cx("extra-information")}>
                            Điều khoản, Chính sách quyền riêng tư
                        </a>{" "}
                        và{" "}
                        <a href="#" className={cx("extra-information")}>
                            {" "}
                            Chính sách cookie
                        </a>{" "}
                        của chúng tôi.
                    </p>
                    <button className={cx("submit-register")}>Đăng kí</button>
                </div>
                <div className={cx("login")}>
                    <p>Bạn có tài khoản? </p>
                    <Link to="/login" className={cx("link-login")}>
                        {" "}
                        Đăng nhập
                    </Link>
                </div>
                <div className={cx("link-download")}>
                    <p>Tải ứng dụng</p>
                    <div className={cx("links")}>
                        <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D348DF04D-3E41-4277-BFCA-4982647526FA%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1">
                            <img src="/img/GooglePlay.png" alt="" />
                        </a>

                        <a href="#">
                            <img src="/img/Microsoft.png" alt="" />
                        </a>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default Register;
