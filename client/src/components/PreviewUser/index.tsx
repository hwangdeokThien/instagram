import classNames from "classnames/bind";
import styles from "./PreviewUser.module.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function PreviewUser() {
    const [isHavingPoster, setIsHavingPoster] = useState(true);
    return (
        <div className={cx("wrapper")}>
            <div className={cx("heading")}>
                <div className={cx("top-items")}>
                    <img src="/img/VanLun.jpg" alt="" className={cx("avatar-user")} />
                    <div className={cx("infor-user")}>
                        <div className={cx("username")}>ducvan_09</div>
                        <div className={cx("name")}>Đức Vấn</div>
                    </div>
                </div>
                <div className={cx("bottom-items")}>
                    <div className={cx("countPost")}>
                        <div className={cx("count")}>8</div>
                        <p>bài viết</p>
                    </div>
                    <div className={cx("countFollower")}>
                        <div className={cx("count")}>33</div>
                        <p>người theo dõi</p>
                    </div>
                    <div className={cx("countFollowing")}>
                        <div className={cx("count")}>121</div>
                        <p>đang theo dõi</p>
                    </div>
                </div>
            </div>
            <div className={cx("body")}>
                {isHavingPoster ? (
                    <div className={cx("list-posts")}>
                        <img src="/img/DucThien.jpg" alt="" className={cx("post")} />
                        <img src="/img/DucVan.jpg" alt="" className={cx("post")} />
                        <img src="/img/DucThien.jpg" alt="" className={cx("post")} />
                    </div>
                ) : (
                    <div className={cx("no-posts")}>
                        <img src="/img/NoPoster.jpg" alt="" srcSet="" />
                        <span>Chưa có bài viết nào</span>
                        <p>Khi ducvan_09 chia sẻ, bạn sẽ thấy ảnh và thước phim của họ ở đây.</p>
                    </div>
                )}
            </div>
            <div className={cx("footer")}>
                <button className={cx("follow")}>
                    <FontAwesomeIcon className={cx("icon-follow")} icon={faUserPlus} />
                    Theo dõi
                </button>
            </div>
        </div>
    );
}
export default PreviewUser;
