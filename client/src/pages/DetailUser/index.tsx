import classNames from "classnames/bind";
import styles from "./DetailUser.module.scss";
import { MessangerIcon, MetaIcon } from "../../components/Icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faA,
    faBan,
    faBell,
    faBellSlash,
    faChevronDown,
    faCircleUser,
    faComment,
    faComputer,
    faCrown,
    faDownload,
    faEyeSlash,
    faHardDrive,
    faHeart,
    faLanguage,
    faLifeRing,
    faLock,
    faRetweet,
    faShieldHalved,
    faSquarePollVertical,
    faStar,
    faUser,
    faUserSlash,
    faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faThreads } from "@fortawesome/free-brands-svg-icons";
import "./DetailUser.module.scss";
import Footer from "../../components/Layouts/DefautLayout/Footer";
import { useRef } from "react";
// import Switch from 'react-js-switch';
const cx = classNames.bind(styles);

function DetailUser() {
    const btnShowListGenders = useRef<HTMLButtonElement>(null);
    const listGenders = useRef<HTMLDivElement>(null);
    const openAndCloseListGenders = (e: React.MouseEvent) => {
        if (listGenders.current) {
            let temp = listGenders.current.style.display;
            if (temp === "none") listGenders.current.style.display = "block";
            else listGenders.current.style.display = "none"; // Fixed this line
        }
    };

    return (
        <div className={cx("wrapper")}>
            <div className={cx("navigation")}>
                <div className={cx("setting")}>
                    <p className={cx("title")}>Cài đặt</p>
                    <button>
                        <MetaIcon className={cx("meta-icon")} />
                        <div className={cx("heading")}>Trung tâm tài khoản</div>
                        <div className={cx("body")}>
                            <p>Quản lí phần cài đặt tài khoản và trải nghiệm kết nối trên các công nghệ của Meta</p>
                            <div className={cx("option-user")}>
                                <p>
                                    <FontAwesomeIcon icon={faUser} className={cx("icon")} /> Thông tin các nhân
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faShieldHalved} className={cx("icon")} /> Mật khẩu và bảo mật
                                </p>
                                <p>
                                    <FontAwesomeIcon icon={faHardDrive} className={cx("icon")} /> Tuỳ chọn quảng cáo
                                </p>
                            </div>
                        </div>
                        <p className={cx("footer")}>Xem thêm trong Trung tâm tài khoản</p>
                    </button>
                </div>
                <div className={cx("list-options")}>
                    <div className={cx("option")}>
                        <p className={cx("short-des")}>Cách bạn dùng Instagram</p>
                        <button className={cx("btn", "active")}>
                            <FontAwesomeIcon icon={faCircleUser} className={cx("icon")} />
                            Chỉnh sửa trang các nhân
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faBell} className={cx("icon")} />
                            Thông báo
                        </button>
                    </div>
                    <div className={cx("option")}>
                        <p className={cx("short-des")}>Nội dung bạn nhìn thấy</p>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faBellSlash} className={cx("icon")} />
                            Tài khoản đã tắt thông báo
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faHeart} className={cx("icon")} />
                            Số lượt thích và lượt chia sẻ
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faCrown} className={cx("icon")} />
                            Gói đăng kí
                        </button>
                    </div>
                    <div className={cx("option")}>
                        <p className={cx("short-des")}>Ai có thể xem nội dung của bạn</p>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faLock} className={cx("icon")} />
                            Quyền riêng tư và tài khoản
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faStar} className={cx("icon")} />
                            Bạn thân
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faBan} className={cx("icon")} />
                            Đã chặn
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faEyeSlash} className={cx("icon")} />
                            Ẩn tin và video trực tiếp
                        </button>
                    </div>
                    <div className={cx("option")}>
                        <p className={cx("short-des")}>Cách người khác có thể tương tác với bạn</p>
                        <button className={cx("btn")}>
                            <MessangerIcon className={cx("icon")} />
                            Tin nhắn và lượt phản hồi
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faThreads} className={cx("icon")} />
                            Thẻ và lượt nhắc
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faComment} className={cx("icon")} />
                            Bình luận
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faRetweet} className={cx("icon")} />
                            Chia sẻ
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faUserSlash} className={cx("icon")} />
                            Tài khoản bị hạn chế
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faA} className={cx("icon")} />
                            Từ bị ẩn
                        </button>
                    </div>
                    <div className={cx("option")}>
                        <p className={cx("short-des")}>Ứng dụng và file phương tiện của bạn</p>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faDownload} className={cx("icon")} />
                            Lưu trữ và tải xuống
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faLanguage} className={cx("icon")} />
                            Ngôn ngữ
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faComputer} className={cx("icon")} />
                            Quyền trên trang web
                        </button>
                    </div>
                    <div className={cx("option")}>
                        <p className={cx("short-des")}>Dành cho gia đình</p>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faUsers} className={cx("icon")} />
                            Giám sát
                        </button>
                    </div>
                    <div className={cx("option")}>
                        <p className={cx("short-des")}>Dành cho chuyên gia</p>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faSquarePollVertical} className={cx("icon")} />
                            Công cụ và loại tài khoản
                        </button>
                    </div>
                    <div className={cx("option")}>
                        <p className={cx("short-des")}>Thông tin khác và hỗ trợ</p>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faLifeRing} className={cx("icon")} />
                            Trợ giúp
                        </button>
                        <button className={cx("btn")}>
                            <FontAwesomeIcon icon={faUser} className={cx("icon")} />
                            Trạng thái tài khoản
                        </button>
                    </div>
                </div>
            </div>
            <div className={cx("content")}>
                <div className={cx("main-content")}>
                    <div className={cx("title")}>Chỉnh sửa trang cá nhân</div>
                    <div className={cx("box-user")}>
                        <div className={cx("left-item")}>
                            <img src="/img/VanLun.jpg" alt="" className={cx("avatar-user")} />
                            <div className={cx("infor-user")}>
                                <div className={cx("username")}>ducvan_09</div>
                                <div className={cx("name")}>Đức Vấn</div>
                            </div>
                        </div>
                        <button className={cx("right-item")}>Đổi ảnh</button>
                    </div>
                    <div className={cx("detail-infor")}>
                        <div className={cx("title")}>Trang web</div>
                        <input type="text" value={"Trang web"} />
                        <p>
                            Bạn chỉ có thể chỉnh sửa liên kết trên di động. Hãy mở ứng dụng Instagram và chỉnh sửa trang
                            cá nhân của bạn để thay đổi trang web trong phần tiểu sử.
                        </p>
                    </div>
                    <div className={cx("detail-infor")}>
                        <div className={cx("title")}>Tiểu sử</div>
                        <input type="text" value={"LuniuLun"} />
                    </div>
                    <div className={cx("detail-infor")}>
                        <div className={cx("title")}>Giới tính</div>
                        <button
                            ref={btnShowListGenders}
                            className={cx("shosen-gender")}
                            onClick={(e) => {
                                openAndCloseListGenders(e);
                            }}
                        >
                            Nam
                            <FontAwesomeIcon icon={faChevronDown} className={cx("icon-down")} />
                        </button>
                        <div ref={listGenders} className={cx("list-gender-options")}>
                            <div className={cx("gender-option")}>
                                <label htmlFor="">Nữ</label>
                                <input className={cx("gender")} type="radio" name="gender" value="Nữ" />
                            </div>
                            <div className={cx("gender-option")}>
                                <label htmlFor="">Nam</label>
                                <input className={cx("gender")} type="radio" name="gender" value="Nam" />
                            </div>
                            <div className={cx("gender-option")}>
                                <div>
                                    <label htmlFor="">Tuỳ chỉnh</label>
                                    <input className={cx("gender")} type="radio" name="gender" value="Tuỳ chỉnh" />
                                </div>
                                <input type="text" className={cx("input-gender")} />
                            </div>
                            <div className={cx("gender-option")}>
                                <label htmlFor="">Không muốn tiết lộ</label>
                                <input className={cx("gender")} type="radio" name="gender" value="Không muốn tiết lộ" />
                            </div>
                        </div>
                        <p>Thông tin này sẽ không xuất hiện trên trang cá nhân công khai của bạn.</p>
                    </div>
                    <div className={cx("detail-infor")}>
                        <div className={cx("title")}>Hiển thị gợi ý tài khoản trên trang cá nhân</div>
                        <div className={cx("show-suggestedUser")}>
                            <div>
                                <span>Hiển thị gợi ý tài khoản trên trang cá nhân</span>
                                <p>
                                    Chọn có cho mọi người thấy các gợi ý tài khoản tương tự trên trang cá nhân của bạn
                                    và có cho hệ thống gợi ý tài khoản của bạn trên các trang cá nhân khác hay không.
                                </p>
                            </div>
                            <label className={cx("switch")}>
                                <input type="checkbox" defaultChecked={true} />
                                <span className={cx("slider", "round")} />
                            </label>
                        </div>
                    </div>
                    <div className={cx("wrapper-btn_submit")}>
                        <button className={cx("btn_submit")}>Gửi</button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default DetailUser;
