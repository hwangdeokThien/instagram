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

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <div className={cx("sidebar")}>
            <div className={cx("logo")}>
                <InstagramIcon className="logo" />
            </div>
            <div className={cx("nav")}>
                <div className={cx("nav-link")}>
                    <HomeIcon className={cx("home-icon", "icon")} />
                    <div className={cx("title")}>Trang chủ</div>
                </div>
                <div className={cx("nav-link")}>
                    <FindIcon className={cx("find-icon", "icon")} />
                    <div className={cx("title")}>Tìm kiếm</div>
                </div>
                <div className={cx("nav-link")}>
                    <DiscoverIcon className={cx("discover-icon", "icon")} />
                    <div className={cx("title")}>Khám phá</div>
                </div>
                <div className={cx("nav-link")}>
                    <ReelsIcon className={cx("reel-icon", "icon")} />
                    <div className={cx("title")}>Reels</div>
                </div>
                <div className={cx("nav-link")}>
                    <MessengerIcon className={cx("mess-icon", "icon")} />
                    <div className={cx("title")}>Tin nhắn</div>
                </div>
                <div className={cx("nav-link")}>
                    <HeartIcon className={cx("notify-icon", "icon")} />
                    <div className={cx("title")}>Thông báo</div>
                </div>
                <div className={cx("nav-link")}>
                    <CreateIcon className={cx("creation-icon", "icon")} />
                    <div className={cx("title")}>Tạo</div>
                </div>
                <div className={cx("nav-link")}>
                    <FontAwesomeIcon icon={faBars} className={cx("bar-icon", "icon")} />
                    <div className={cx("title")}>Trang cá nhân</div>
                </div>
            </div>
            <div className={cx("extra-nav", "nav-link")}>
                <FontAwesomeIcon icon={faBars} className={cx("bar-icon", "icon")} />
                <div className={cx("title")}>Xem thêm</div>
            </div>
        </div>
    );
}

export default Sidebar;
