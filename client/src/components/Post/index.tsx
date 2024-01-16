import classNames from "classnames/bind";
import styles from "./post.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";
import { CommentIcon, HeartIcon, SavingIcon, SharingIcon } from "../Icon";
import { Link } from "react-router-dom";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons/faFaceSmile";
import Tippy from "@tippy.js/react";
import { ReactNode } from "react";
import PreviewUser from "../PreviewUser";

const cx = classNames.bind(styles);
type RenderPreviewProps = {
    propps: ReactNode;
};
function Post() {
    const renderPreview = (props: RenderPreviewProps) => {
        return (
            <div tabIndex={-1} {...props}>
                <PreviewUser />
            </div>
        );
    };
    return (
        <div className={cx("wrapper")}>
            <div className={cx("heading")}>
                <div className={cx("wrapper-avatar")}>
                    <img src="/img/DucVan.jpg" alt="" srcSet="" className={cx("avatar-user")} />
                </div>
                <div className={cx("username")}>ducvan_09</div>
                <div className={cx("time-post")}>17 giờ</div>
                <FontAwesomeIcon icon={faEllipsis} className={cx("extra-options")} />
            </div>
            <div className={cx("body")}>
                <div className={cx("content")}>
                    <img src="/img/Post_1_1.png" alt="" srcSet="" className={cx("post")} />
                </div>
                <div className={cx("interact")}>
                    <div className={cx("icon-lists")}>
                        <div className={cx("right-icons")}>
                            <HeartIcon className={cx("loving")} />
                            <CommentIcon className={cx("comment")} />
                            <SharingIcon className={cx("share")} />
                        </div>
                        <SavingIcon className={cx("save")} />
                    </div>
                    <div className={cx("count-loving")}>4.969 lượt thích</div>
                </div>
            </div>
            <div className={cx("footer")}>
                <div className={cx("description")}>
                    <Link to={"/profile"} className={cx("username")}>
                        <Tippy
                            interactive
                            delay={[800, 0]}
                            placement="top-start"
                            offset={[-6, -20].join(",")}
                            content={<div>{renderPreview({ propps: "your content here" })}</div>}
                        >
                            <p>ducvan_09</p>
                        </Tippy>
                    </Link>
                    <p>Suýt nữa thì nói em đồng ý :))))</p>
                </div>
                <button className={cx("show-comment")}>Xem tất cả 34 bình luận</button>
                <input type="text" placeholder="Thêm bình luận..." className={cx("add-comment")} />
                <FontAwesomeIcon icon={faFaceSmile} className={cx("show-emotion")} />
            </div>
        </div>
    );
}

export default Post;
