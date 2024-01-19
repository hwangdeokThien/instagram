import classNames from "classnames/bind";
import Styles from "./Footer.module.scss";

const cx = classNames.bind(Styles);

function Footer() {
    return (
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
    );
}
export default Footer;
