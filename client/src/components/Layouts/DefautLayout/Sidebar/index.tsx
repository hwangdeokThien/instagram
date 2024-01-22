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
import {
    faBars,
    faBookmark,
    faChartLine,
    faGear,
    faMoon,
    faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { RefObject, useRef } from "react";

const cx = classNames.bind(styles);

function Sidebar() {
    const btnShowExtraOptions = useRef<HTMLButtonElement>(null) as RefObject<HTMLButtonElement>;
    const extraOptions = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

    const showExtraOptions = () => {
        const element = extraOptions.current;
        if (element) {
            if (element.style.display == "flex") {
              element.style.display = "none";
            } else {
              element.style.display = "flex";
            }
          }
    };

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
            <button ref={btnShowExtraOptions} onClick={showExtraOptions} className={cx("extra-nav", "nav-link")}>
                <FontAwesomeIcon icon={faBars} className={cx("bar-icon", "icon")} />
                <div className={cx("title")}>Xem thêm</div>
            </button>
            <div ref={extraOptions} className={cx("extra-modal")}>
                <button className={cx("option")}>
                    <FontAwesomeIcon icon={faGear} className={cx("small-icon")} />
                    <p>Cài đặt</p>
                </button>
                <button className={cx("option")}>
                    <FontAwesomeIcon icon={faChartLine} className={cx("small-icon")} />
                    <p>Hoạt động của bạn</p>
                </button>
                <button className={cx("option")}>
                    <FontAwesomeIcon icon={faBookmark} className={cx("small-icon")} />
                    <p>Đã lưu</p>
                </button>
                <button className={cx("option")}>
                    <FontAwesomeIcon icon={faMoon} className={cx("small-icon")} />
                    <p>Chuyển chế độ</p>
                </button>
                <button className={cx("option")}>
                    <FontAwesomeIcon icon={faTriangleExclamation} className={cx("small-icon")} />
                    <p>Báo cáo sự cố</p>
                </button>
                <div className={cx("seperate-line")}></div>
                <button className={cx("option")}>
                    <p>Chuyển tài khoản</p>
                </button>
                <div className={cx("seperate-line", "thin")}></div>
                <Link to={"/login"} className={cx("option")}>
                    <p>Đăng xuất</p>
                </Link>
            </div>
        </div>
    );
}

export default Sidebar;
