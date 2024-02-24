import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Layouts/DefautLayout/Footer";
import styles from "./profile.module.scss";
import classNames from "classnames/bind";
import { faBookmark, faClipboardUser, faGear, faPlus, faTableCells } from "@fortawesome/free-solid-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { BigPlusIcon } from "../../components/Icon";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx("heading")}>
                <img src="http://localhost:8080/api/v1/fileUpload/files/avatar_user.jpg" alt="" className={cx("avatar-user")} />
                <div className={cx("individual-information")}>
                    <div className={cx("top-items")}>
                        <div className={cx("username")}>ducvan_09</div>
                        <Link to={"/detailuser"} className={cx("edit-information")}>Chỉnh sửa trang cá nhân</Link>
                        <button className={cx("show-store")}>Xem kho lưu trữ</button>
                        <FontAwesomeIcon icon={faGear} className={cx("icon-setting")} />
                    </div>
                    <div className={cx("bottom-items")}>
                        <div className={cx("interaction")}>
                            <div className={cx("count-post")}>2 bài viết</div>
                            <div className={cx("count-folowwer")}>223 người theo dõi</div>
                            <div className={cx("count-folowwing")}>Đang theo dõi 1.266 người dùng</div>
                        </div>
                        <div className={cx("name")}>Đức Vấn</div>
                        <div className={cx("second-name")}>LuniuLun</div>
                        <a className={cx("link-face")}>
                            <FontAwesomeIcon icon={faFacebook} className={cx("icon-facebook")} />
                            Trang cá nhân Facebook
                        </a>
                    </div>
                </div>
            </div>
            <div className={cx("body")}>
                <div className={cx("list-stories")}>
                    <div className={cx("story")}>
                        <div className={cx("wrapper-story")}>
                            <img src="/img/Cat.jpg" alt="" srcSet="" className={cx("story")} />
                        </div>
                        <p>MeoMeoMeo</p>
                    </div>
                    <div className={cx("story")}>
                        <div className={cx("wrapper-story")}>
                            <img src="/img/Cat.jpg" alt="" srcSet="" className={cx("story")} />
                        </div>
                        <p>Neko</p>
                    </div>
                    <div className={cx("wrapper-addStory")}>
                        <BigPlusIcon className={cx("icon-plus")} />
                    </div>
                </div>
                <div className={cx("content")}>
                    <div className={cx("navigation")}>
                        <button className={cx("show-post", "active")}>
                            <FontAwesomeIcon icon={faTableCells} className={cx("icon-post")} />
                            <p>BÀI VIẾT</p>
                        </button>
                        <button className={cx("show-savedPost")}>
                            <FontAwesomeIcon icon={faBookmark} className={cx("icon-savedPost")} />
                            <p>ĐÃ LƯU</p>
                        </button>
                        <button className={cx("show-attackedTag")}>
                            <FontAwesomeIcon icon={faClipboardUser} className={cx("icon-attackedTag")} />
                            <p>ĐƯỢC GẮN THẺ</p>
                        </button>
                    </div>
                    <div className={cx("list-posts")}>
                        <img src="/img/DucThien.jpg" alt="" srcSet="" className={cx("post")} />
                        <img src="/img/DucVan.jpg" alt="" srcSet="" className={cx("post")} />
                        <img src="/img/DucThien.jpg" alt="" srcSet="" className={cx("post")} />
                        <img src="/img/DucVan.jpg" alt="" srcSet="" className={cx("post")} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Profile;
