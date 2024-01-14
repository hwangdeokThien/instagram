import styles from "./login.module.scss";
import classNames from "classnames/bind";
import { InstagramIcon } from "../../components/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

const cx = classNames.bind(styles);
// Khai báo một type mới cho useRef với kiểu HTMLImageElement hoặc null
type ImageRef = React.RefObject<HTMLImageElement>;
function Login() {
    const slideRefs: ImageRef = useRef(null);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const element = slideRefs.current;
            if (element) {                
                let temp = String(element.src).slice(-5);
                setTimeout(() => {
                    if (temp.includes("4")) {
                        element.src = "/img/LoginPicture_1.png";
                    } else {
                        element.src = "/img/LoginPicture_" + (Number(temp.charAt(0)) + 1) + ".png";
                    }
                }, 1500);
            }
        }, 1700);
    
        // Cleanup function khi component unmount
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("body")}>
                <div className={cx("right-item")}>
                    <img ref={slideRefs} className={cx("slide", "open")} src="/img/LoginPicture_1.png" alt="" />
                    {/* <img ref={slideRefs} className={cx("slide")} src="/img/LoginPicture_2.png" alt="" />
                    <img ref={slideRefs} className={cx("slide")} src="/img/LoginPicture_3.png" alt="" />
                    <img ref={slideRefs} className={cx("slide")} src="/img/LoginPicture_4.png" alt="" /> */}
                </div>
                <div className={cx("left-item")}>
                    <div className={cx("login-box")}>
                        <img className={cx("title")} src="/img/Black_icon_instagram.png" alt="" srcSet="" />
                        <input
                            type="text"
                            className={cx("username")}
                            placeholder="Số điện thoại, tên người dùng hoặc email"
                        />
                        <input type="text" className={cx("password")} placeholder="Mật khẩu" />
                        <input type="button" className={cx("login-submit")} value="Đăng nhập" />
                        <p className={cx("seperate")}>HOẶC</p>
                        <a href="#" className={cx("login-with-facebook")}>
                            {/* <FontAwesomeIcon icon={faSquareFacebook} /> */}
                            Đăng nhập bằng Facebook
                        </a>
                        <a href="#" className={cx("forgot-password")}>
                            Quên mật khẩu?
                        </a>
                    </div>
                    <div className={cx("register")}>
                        <p>Bạn chưa có tài khoản ư? </p>
                        <a href="#" className={cx("link-register")}>
                            {" "}
                            Đăng kí
                        </a>
                    </div>
                    <div className={cx("link-download")}>
                        <p>Tải ứng dụng</p>
                        <div className={cx("links")}>
                            <img src="/img/GooglePlay.png" alt="" />
                            <img src="/img/Microsoft.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx("footer")}>
                <div className={cx("link-infor")}>
                    <a href="#">Meta</a>
                    <a href="#">Giớt thiệu</a>
                    <a href="#">Blog</a>
                    <a href="#">Việc Làm</a>
                    <a href="#">Trợ Giúp</a>
                    <a href="#">Quyền riêng tư</a>
                    <a href="#">Điều Khoản</a>
                    <a href="#">Vị trí</a>
                    <a href="#">Instagram Lite</a>
                    <a href="#">Threads</a>
                    <a href="#">Tải thông tin người liên hệ lên & người không phải người dùng</a>
                    <a href="#">Meta đã xác minh</a>
                </div>
                <p>Tiếng Việt</p>
                <p>© 2024 Instagram from Meta</p>
            </div>
        </div>
    );
}

export default Login;
