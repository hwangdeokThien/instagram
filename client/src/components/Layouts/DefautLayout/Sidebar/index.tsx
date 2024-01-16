import styles from "./sidebar.module.scss";
import classNames from "classnames/bind";
import {
    InstagramIcon,
    HomeIcon,
    ReelsIcon,
    MessengerIcon,
    DiscoverIcon,
    HeartIcon,
    CreateIcon,
    FindIcon,
} from "../../../Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx("sidebar")}>
            <Link className={cx("logo")} to={"/"}>
                <InstagramIcon className="logo" />
            </Link>
            <div className={cx("nav")}>
                <Link className={cx("nav-link")} to={"/"}>
                    <HomeIcon className={cx("home-icon", "icon")} />
                    <div className={cx("title")}>Trang chủ</div>
                </Link>
                <Link className={cx("nav-link")} to={"#"}>
                    <FindIcon className={cx("find-icon", "icon")} />
                    <div className={cx("title")}>Tìm kiếm</div>
                </Link>
                <Link className={cx("nav-link")} to={"#"}>
                    <DiscoverIcon className={cx("discover-icon", "icon")} />
                    <div className={cx("title")}>Khám phá</div>
                </Link>
                <Link className={cx("nav-link")} to={"#"}>
                    <ReelsIcon className={cx("reel-icon", "icon")} />
                    <div className={cx("title")}>Reels</div>
                </Link>
                <Link className={cx("nav-link", "message")} to={"#"}>
                    <MessengerIcon className={cx("mess-icon", "icon")} />
                    <div className={cx("title")}>Tin nhắn</div>
                    <span className={cx("number-message")}>4</span>
                </Link>
                <Link className={cx("nav-link")} to={"#"}>
                    <HeartIcon className={cx("notify-icon", "icon")} />
                    <div className={cx("title")}>Thông báo</div>
                </Link>
                <Link className={cx("nav-link")} to={"#"}>
                    <CreateIcon className={cx("creation-icon", "icon")} />
                    <div className={cx("title")}>Tạo</div>
                </Link>
                <Link className={cx("nav-link")} to={"/profile"}>
                    <img src="/img/VanLun.jpg" alt="" srcSet="" className={cx("avatar-user")} />
                    <div className={cx("title")}>Trang cá nhân</div>
                </Link>
            </div>
            <div className={cx("extra-nav", "nav-link")}>
                <FontAwesomeIcon icon={faBars} className={cx("bar-icon", "icon")} />
                <div className={cx("title")}>Xem thêm</div>
            </div>
        </div>
    );
}

export default Sidebar;
