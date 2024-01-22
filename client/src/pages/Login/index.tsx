import styles from "./login.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Layouts/DefautLayout/Footer";
import axios from "axios";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";

const cx = classNames.bind(styles);
// Khai báo một type mới cho useRef với kiểu HTMLImageElement hoặc null
type ImageRef = React.RefObject<HTMLImageElement>;

// const hrefSlideList = [
//     "/img/LoginPicture_1.png",
//     "/img/LoginPicture_2.png",
//     "/img/LoginPicture_3.png",
//     "/img/LoginPicture_4.png",
// ]
function Login() {
    const slideRefs: ImageRef = useRef(null);
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const warningFillInforRef = useRef<HTMLParagraphElement>(null);
    const warningFailedLoginRef = useRef<HTMLParagraphElement>(null);

    const checkLogin = () => {
        if (username?.trim() !== "" && password?.trim() !== "") {
            if (warningFillInforRef.current !== null) {
                warningFillInforRef.current.style.display = "none";                
            }
            const requestData = {
                userName: username,
                userPassword: password,
            };

            axios
                .post("http://localhost:8080/api/v1/users/checkLogin", requestData, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    if (res.data.status == "ok") {
                        sessionStorage.setItem("userID", res.data.data[0].id);
                        window.location.href = "/";
                    }
                })
                .catch(() => {
                    if (warningFailedLoginRef.current !== null) {
                        warningFailedLoginRef.current.style.display = "block"; 
                    }
                });
        } else if (warningFillInforRef.current !== null && warningFailedLoginRef.current !== null) {
            warningFillInforRef.current.style.display = "block"; 
            warningFailedLoginRef.current.style.display = "none"; 
        }
    };

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
                }, 1700);
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
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <input
                            type="password"
                            className={cx("password")}
                            placeholder="Mật khẩu"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <p ref={warningFillInforRef} className={cx("danger-infor")}>
                            Hãy điền đầy đủ thông tin.
                        </p>
                        <input type="button" className={cx("login-submit")} value="Đăng nhập" onClick={checkLogin} />
                        <p className={cx("seperate")}>HOẶC</p>
                        <a href="#" className={cx("login-with-facebook")}>
                            <FontAwesomeIcon icon={faSquareFacebook} className={cx("icon-facebook")} />
                            Đăng nhập bằng Facebook
                        </a>
                        <p ref={warningFailedLoginRef} className={cx("danger-infor-login")}>
                            Rất tiếc, mật khẩu của bạn không đúng. Vui lòng kiểm tra lại mật khẩu.
                        </p>
                        <a href="#" className={cx("forgot-password")}>
                            Quên mật khẩu?
                        </a>
                    </div>
                    <div className={cx("register")}>
                        <p>Bạn chưa có tài khoản ư? </p>
                        <Link to="/register" className={cx("link-register")}>
                            {" "}
                            Đăng kí
                        </Link>
                    </div>
                    <div className={cx("link-download")}>
                        <p>Tải ứng dụng</p>
                        <div className={cx("links")}>
                            <a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3D348DF04D-3E41-4277-BFCA-4982647526FA%26utm_campaign%3DsignupPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge&pli=1">
                                <img src="/img/GooglePlay.png" alt="" />
                            </a>
                            <img src="/img/Microsoft.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
